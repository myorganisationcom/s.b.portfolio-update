/**
 * Admin Authentication Helpers
 * JWT sign/verify + requireAdmin middleware
 */

import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-dev-secret-change-me';
const COOKIE_NAME = 'admin_token';

/**
 * Sign a JWT for the given admin email.
 * @param {string} email
 * @returns {string} token
 */
export function signAdminToken(email) {
  return jwt.sign({ email, role: 'admin' }, JWT_SECRET, { expiresIn: '24h' });
}

/**
 * Verify a JWT token.
 * @param {string} token
 * @returns {{ email: string, role: string } | null}
 */
export function verifyAdminToken(token) {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch {
    return null;
  }
}

/**
 * Middleware: reads httpOnly cookie, returns decoded payload or null.
 * Use inside API route handlers.
 * @param {Request} request
 * @returns {{ email: string, role: string } | null}
 */
export function getAdminFromRequest(request) {
  const cookieHeader = request.headers.get('cookie') || '';
  const match = cookieHeader.match(new RegExp(`(?:^|;\\s*)${COOKIE_NAME}=([^;]+)`));
  if (!match) return null;
  return verifyAdminToken(decodeURIComponent(match[1]));
}

/**
 * Auth guard — returns admin payload or throws a 401 Response.
 * Call at the top of protected route handlers.
 * @param {Request} request
 * @returns {{ email: string, role: string }}
 */
export function requireAdmin(request) {
  const admin = getAdminFromRequest(request);
  if (!admin) {
    throw new Response(JSON.stringify({ success: false, error: 'Unauthorized' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  return admin;
}

export { COOKIE_NAME };
