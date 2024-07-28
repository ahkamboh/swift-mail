import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

// PrismaClient initialization as a singleton
let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient();
  }
  prisma = (global as any).prisma;
}

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const guest = await prisma.guestUser.create({
      data: {
        email,
      },
    });

    return NextResponse.json(guest, { status: 201 });
  } catch (error) {
    console.error('Detailed error:', error);

    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}

// Optionally, you can add a GET method if you need to retrieve guest users
export async function GET() {
  try {
    const guests = await prisma.guestUser.findMany();
    return NextResponse.json(guests);
  } catch (error) {
    console.error('Error fetching guests:', error);
    return NextResponse.json({ error: 'Failed to fetch guests' }, { status: 500 });
  }
}