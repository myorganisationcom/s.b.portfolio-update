/**
 * Leads Repository
 *
 * All database queries for the `leads` table live here.
 * No business logic — only data access.
 *
 * Uses `?` placeholders (works for both SQLite and PostgreSQL adapters).
 */

import db from '../db/index.js';

// ─── Schema ────────────────────────────────────────────────────────────────

const SCHEMA = `
  CREATE TABLE IF NOT EXISTS leads (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    name            TEXT        NOT NULL,
    organisation    TEXT        NOT NULL DEFAULT '',
    designation     TEXT        NOT NULL DEFAULT '',
    email           TEXT        NOT NULL,
    phone           TEXT        NOT NULL,
    quiz_answers    TEXT        NOT NULL DEFAULT '{}',
    lead_quality    TEXT        NOT NULL DEFAULT 'Nurture',
    created_at      DATETIME    DEFAULT CURRENT_TIMESTAMP
  )
`;

// Ensure the table exists — called once when the module is first loaded
let _initialized = false;
async function ensureInitialized() {
  if (!_initialized) {
    await db.initialize(SCHEMA);
    _initialized = true;
  }
}

// ─── Write Operations ───────────────────────────────────────────────────────

/**
 * Insert a new lead record.
 * @param {{ name, organisation, designation, email, phone, quizAnswers, leadQuality }} data
 * @returns {{ lastInsertId: number }}
 */
export async function createLead({ name, organisation, designation, email, phone, quizAnswers, leadQuality }) {
  await ensureInitialized();

  return db.run(
    `INSERT INTO leads (name, organisation, designation, email, phone, quiz_answers, lead_quality)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [
      name,
      organisation  ?? '',
      designation   ?? '',
      email,
      phone,
      typeof quizAnswers === 'string' ? quizAnswers : JSON.stringify(quizAnswers ?? {}),
      leadQuality   ?? 'Nurture',
    ]
  );
}

// ─── Read Operations ────────────────────────────────────────────────────────

/**
 * Return all leads, newest first.
 * @returns {Array<Object>}
 */
export async function getAllLeads() {
  await ensureInitialized();
  const rows = await db.all(`SELECT * FROM leads ORDER BY created_at DESC`, []);
  return rows.map(parseRow);
}

/**
 * Return a single lead by id.
 * @param {number} id
 * @returns {Object|undefined}
 */
export async function getLeadById(id) {
  await ensureInitialized();
  const row = await db.get(`SELECT * FROM leads WHERE id = ?`, [id]);
  return row ? parseRow(row) : undefined;
}

// ─── Helpers ────────────────────────────────────────────────────────────────

/** Parse stored JSON fields back into objects. */
function parseRow(row) {
  return {
    ...row,
    quiz_answers: (() => {
      try { return JSON.parse(row.quiz_answers); }
      catch { return {}; }
    })(),
  };
}
