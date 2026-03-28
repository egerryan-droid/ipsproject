import { SignJWT, jwtVerify } from 'jose'
import { timingSafeEqual } from 'crypto'

function getSecret() {
  const secret = process.env.AUTH_SECRET
  if (!secret) throw new Error('AUTH_SECRET environment variable is required')
  return new TextEncoder().encode(secret)
}

function getPassword() {
  const pw = process.env.PORTAL_PASSWORD
  if (!pw) throw new Error('PORTAL_PASSWORD environment variable is required')
  return pw
}

export const COOKIE_NAME = 'ips-auth'

// Session expires after 4 hours of inactivity
const SESSION_DURATION = '4h'
const SESSION_MAX_AGE = 60 * 60 * 4 // 4 hours in seconds

export { SESSION_MAX_AGE }

export async function signToken() {
  return new SignJWT({ auth: true })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime(SESSION_DURATION)
    .sign(getSecret())
}

export async function verifyToken(token: string) {
  try {
    await jwtVerify(token, getSecret())
    return true
  } catch {
    return false
  }
}

export function checkPassword(input: string): boolean {
  const password = getPassword()
  if (input.length !== password.length) return false
  const a = Buffer.from(input, 'utf-8')
  const b = Buffer.from(password, 'utf-8')
  return timingSafeEqual(a, b)
}
