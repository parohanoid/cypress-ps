import { NextResponse } from 'next/server';

interface LoginRequestBody {
  username: string,
  password: string,
}

const users = [
  { id: 1, username: 'jim@contoso.com' },
  { id: 2, username: 'julia@example.com' },
];

export async function POST(request: Request) {
  const loginCredentials: LoginRequestBody = await request.json()

  if (
    loginCredentials.password == "failure" ||
    users.filter((u) => u.username == loginCredentials.username)?.length == 0) {

    return NextResponse.json({ success: false })
  }

  return NextResponse.json({ success: true });
}