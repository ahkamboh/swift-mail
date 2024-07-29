import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SessionWrapper from "./components/SessionWrapper";
import Head from 'next/head'; // Import Head component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome to Swift Mail",
  description: "Swift Mail helps you write effective cold emails using AI technology.",
  openGraph: {
    title: "Swift Mail - AI-Powered Cold Email Writer",
    description: "Swift Mail uses advanced AI to craft compelling cold emails, helping you make a great first impression.",
    images: [
      {
        url: "https://swift-mail.vercel.app/ourlogo.png",
        width: 300,
        height: 300,
        alt: "Swift Mail Logo",
      },
    ],
    url: "https://swift-mail.vercel.app/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Swift Mail - AI-Powered Cold Email Writer",
    description: "Swift Mail uses advanced AI to craft compelling cold emails, helping you make a great first impression.",
    images: [
      {
        url: "https://swift-mail.vercel.app/ourlogo.png",
        width: 300,
        height: 300,
        alt: "Swift Mail Logo",
      },
    ],
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <Head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-6MRRSFSM4Z"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-6MRRSFSM4Z');
            `,
          }}
        />
      </Head>
      <SessionWrapper>
        <body className={inter.className}>{children}</body>
      </SessionWrapper>
    </html>
  );
}
