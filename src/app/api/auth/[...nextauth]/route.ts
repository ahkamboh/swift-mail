import { NextRequest, NextResponse } from 'next/server';

// GET method
export async function GET(req: NextRequest) {
  return NextResponse.json({ message: 'GET request to /api/auth/[...nextauth]' });
}

// POST method
export async function POST(req: NextRequest) {
  // Handle POST request logic
  return NextResponse.json({ message: 'POST request to /api/auth/[...nextauth]' });
}
