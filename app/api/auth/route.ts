import { NextRequest, NextResponse } from 'next/server'
import { signToken, checkPassword, COOKIE_NAME, SESSION_MAX_AGE } from '@/lib/auth'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const password = typeof body?.password === 'string' ? body.password : ''

    if (!password || !checkPassword(password)) {
      return NextResponse.json({ error: 'Incorrect password' }, { status: 401 })
    }

    const token = await signToken()
    const response = NextResponse.json({ ok: true })
    response.cookies.set(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: SESSION_MAX_AGE,
      path: '/',
    })
    return response
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
