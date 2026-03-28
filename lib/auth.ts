import { SignJWT, jwtVerify } from 'jose'

const SECRET = new TextEncoder().encode(process.env.AUTH_SECRET || 'ips-capstone-2026-secret')
export const COOKIE_NAME = 'ips-auth'
const PASSWORD = process.env.PORTAL_PASSWORD || 'IPS2026'

export async function signToken() {
  return new SignJWT({ auth: true })
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('30d')
    .sign(SECRET)
}

export async function verifyToken(token: string) {
  try {
    await jwtVerify(token, SECRET)
    return true
  } catch {
    return false
  }
}

export function checkPassword(input: string) {
  return input === PASSWORD
}
