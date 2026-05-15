/**
 * Database Adapter Factory
 *
 * LOCAL DEV  (DATABASE_URL not set) → SQLite via better-sqlite3
 * PRODUCTION (DATABASE_URL is set)  → PostgreSQL via pg
 *
 * Both pg and better-sqlite3 are listed in next.config.mjs
 * `serverExternalPackages` so Turbopack never bundles them —
 * they are loaded as native Node.js requires at runtime.
 *
 * The postgres adapter is imported via a lazy dynamic import()
 * so it is only evaluated when DATABASE_URL is present.
 */

import sqliteAdapter from './adapters/sqlite.js';

let _adapter = null;

async function getAdapter() {
  if (_adapter) return _adapter;

  if (process.env.DATABASE_URL) {
    const { default: pgAdapter } = await import('./adapters/postgres.js');
    _adapter = pgAdapter;
  } else {
    _adapter = sqliteAdapter;
  }

  return _adapter;
}

const db = {
  get dialect() {
    return process.env.DATABASE_URL ? 'postgres' : 'sqlite';
  },
  async initialize(schema) {
    return (await getAdapter()).initialize(schema);
  },
  async run(sql, params = []) {
    return (await getAdapter()).run(sql, params);
  },
  async all(sql, params = []) {
    return (await getAdapter()).all(sql, params);
  },
  async get(sql, params = []) {
    return (await getAdapter()).get(sql, params);
  },
};

export default db;
