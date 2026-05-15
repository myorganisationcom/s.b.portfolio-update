/**
 * PostgreSQL Adapter — production
 *
 * Requires: npm install pg
 * Activated when DATABASE_URL env var is set.
 *
 * Automatically converts `?` placeholders → `$1`, `$2`, … so the same
 * repository queries work for both SQLite and PostgreSQL.
 */

let pool = null;

async function getPool() {
  if (!pool) {
    // Dynamic import — only executed when DATABASE_URL is set (production)
    // This prevents bundlers from statically resolving 'pg' in dev
    const { Pool } = await import('pg');

    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.NODE_ENV === 'production'
        ? { rejectUnauthorized: false }
        : false,
      max: 10,
      idleTimeoutMillis: 30_000,
      connectionTimeoutMillis: 5_000,
    });

    pool.on('error', (err) => {
      console.error('[postgres] Unexpected client error', err);
    });
  }
  return pool;
}

/**
 * Convert `?` placeholders to `$1`, `$2`, … for PostgreSQL.
 * e.g. "INSERT INTO t (a,b) VALUES (?,?)" → "INSERT INTO t (a,b) VALUES ($1,$2)"
 */
function adaptSql(sql) {
  let i = 0;
  return sql.replace(/\?/g, () => `$${++i}`);
}

const postgresAdapter = {
  dialect: 'postgres',

  async initialize(schema) {
    // PostgreSQL uses SERIAL / BIGSERIAL instead of AUTOINCREMENT
    const pgSchema = schema
      .replace(/INTEGER PRIMARY KEY AUTOINCREMENT/gi, 'BIGSERIAL PRIMARY KEY')
      .replace(/DATETIME DEFAULT CURRENT_TIMESTAMP/gi, 'TIMESTAMPTZ DEFAULT NOW()');

    const client = await getPool().connect();
    try {
      await client.query(pgSchema);
    } finally {
      client.release();
    }
  },

  async run(sql, params = []) {
    const result = await getPool().query(adaptSql(sql), params);
    // For INSERT … RETURNING id
    const lastInsertId = result.rows?.[0]?.id ?? null;
    return { lastInsertId, changes: result.rowCount };
  },

  async all(sql, params = []) {
    const result = await getPool().query(adaptSql(sql), params);
    return result.rows;
  },

  async get(sql, params = []) {
    const result = await getPool().query(adaptSql(sql), params);
    return result.rows[0] ?? undefined;
  },
};

export default postgresAdapter;
