import { NextResponse } from 'next/server';

function generateDiscountCode(length: number): string {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export async function GET(request: Request) {
  await delay(4100);
  const discountCode = generateDiscountCode(8);
  return NextResponse.json({ discountCode: discountCode });
}