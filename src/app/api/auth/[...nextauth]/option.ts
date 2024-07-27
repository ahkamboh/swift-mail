import { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import dbconnect from "@/lib/dbConnect";
import UserModel from "@/model/User"

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            credentials: {
                identifier: { label: "Username or Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials: any): Promise<any> {
                await dbconnect();
                try {
                    const user = await UserModel.findOne({
                        $or: [
                            { email: credentials.identifier },
                            { username: credentials.identifier }
                        ]
                    });

                    if (!user) {
                        throw new Error("No user found with this email or username");
                    }

                    if (!user.isVerified) {
                        throw new Error("Please verify your account before login");
                    }

                    const isValid = await bcrypt.compare(credentials.password, user.password);
                    if (isValid) {
                        return user;
                    } else {
                        throw new Error("Invalid password");
                    }
                } catch (err: any) {
                    throw new Error(err.message);
                }
            }
        })
    ],
    pages: {
        signIn: "/sign-in"
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async session({ session, user, token }) {
            return session;
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            return token;
        }
    }
}
