/**
 * SQLite Adapter — local development only
 * Uses better-sqlite3 (synchronous) wrapped in an async interface
 * so it is interchangeable with the PostgreSQL adapter.
 *
 * Queries should be written with `?` placeholders.
 */

import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

const DB_DIR  = path.join(process.cwd(), 'data');
const DB_PATH = path.join(DB_DIR, 'leads.db');

let _connection = null;

function getConnection() {
  if (!_connection) {
    // Ensure the data/ directory exists
    fs.mkdirSync(DB_DIR, { recursive: true });

    _connection = new Database(DB_PATH);
    _connection.pragma('journal_mode = WAL');   // better concurrent reads
    _connection.pragma('foreign_keys = ON');
  }
  return _connection;
}

const sqliteAdapter = {
  dialect: 'sqlite',

  /**
   * Run DDL / migrations.
   * @param {string} schema  Raw SQL (CREATE TABLE IF NOT EXISTS …)
   */
  async initialize(schema) {
    getConnection().exec(schema);
  },

  /**
   * Execute INSERT / UPDATE / DELETE.
   * @returns {{ lastInsertId: number|bigint, changes: number }}
   */
  async run(sql, params = []) {
    const stmt   = getConnection().prepare(sql);
    const result = stmt.run(params);
    return { lastInsertId: result.lastInsertRowid, changes: result.changes };
  },

  /**
   * SELECT returning all rows.
   * @returns {Array<Object>}
   */
  async all(sql, params = []) {
    return getConnection().prepare(sql).all(params);
  },

  /**
   * SELECT returning a single row (or undefined).
   * @returns {Object|undefined}
   */
  async get(sql, params = []) {
    return getConnection().prepare(sql).get(params);
  },
};

export default sqliteAdapter;
