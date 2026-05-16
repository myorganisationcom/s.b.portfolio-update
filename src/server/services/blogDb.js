/**
 * Blog Database Connector
 *
 * Dedicated PostgreSQL pool for the external blog database.
 * Activated when BLOG_DATABASE_URL env var is set.
 *
 * This is SEPARATE from the main site DB (DATABASE_URL) —
 * the blog content lives in an external admin-managed database.
 */

let _pool = null;

/**
 * Returns true when an external blog DB is configured.
 */
export function hasBlogDb() {
  return !!process.env.BLOG_DATABASE_URL;
}

/**
 * Lazy-initialise and return the blog pg Pool.
 */
async function getPool() {
  if (_pool) return _pool;

  const { Pool } = await import('pg');

  _pool = new Pool({
    connectionString: process.env.BLOG_DATABASE_URL,
    ssl: { rejectUnauthorized: false },
    max: 5,
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 5_000,
  });

  _pool.on('error', (err) => {
    console.error('[blogDb] Unexpected pool error', err);
  });

  return _pool;
}

/**
 * Run a SELECT and return all rows.
 */
export async function queryAll(sql, params = []) {
  const pool = await getPool();
  const result = await pool.query(sql, params);
  return result.rows;
}

/**
 * Run a SELECT and return the first row (or undefined).
 */
export async function queryOne(sql, params = []) {
  const pool = await getPool();
  const result = await pool.query(sql, params);
  return result.rows[0] ?? undefined;
}
