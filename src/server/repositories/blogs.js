/**
 * Blog Repository — Unified data layer
 *
 * When BLOG_DATABASE_URL is set  → queries the external PostgreSQL "blogs" table.
 * When it is NOT set             → falls back to static data files for dev/preview.
 *
 * External DB schema (Prisma @@map("blogs")):
 *   id, title, seo_slug, status, views, created_at,
 *   content, author, featured_image, tags, category_id,
 *   download_link, updated_at
 */

import { hasBlogDb, queryAll, queryOne } from '../services/blogDb.js';

// Static fallbacks (used when no external DB is configured)
import { blogPosts as staticPosts } from '@/data/blogPosts';
import { blogContent as staticContent } from '@/data/blogContent';

/* ─── helpers ─────────────────────────────────────────── */

/**
 * Convert a raw DB row into the normalised BlogPost shape
 * that the frontend components expect.
 */
function normaliseRow(row) {
  return {
    id:            Number(row.id),
    slug:          row.seo_slug,
    title:         row.title,
    description:   extractDescription(row.content),
    content:       row.content,
    author:        row.author,
    image:         row.featured_image || '',
    featuredImage: row.featured_image || '',
    tags:          parseTags(row.tags),
    category:      String(row.category_id ?? ''),
    categoryId:    Number(row.category_id ?? 0),
    status:        row.status,
    views:         Number(row.views ?? 0),
    createdAt:     row.created_at,
    updatedAt:     row.updated_at,
    downloadLink:  row.download_link || null,
    // keep icon/originalFile for compat with static data
    icon:          '📝',
    originalFile:  null,
  };
}

/**
 * Extract a plain-text description (first ~160 chars) from HTML content.
 */
function extractDescription(html) {
  if (!html) return '';
  const text = html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
  return text.length > 160 ? text.slice(0, 157) + '...' : text;
}

/**
 * Parse tags — could be JSON array string, comma-separated, or already an array.
 */
function parseTags(tags) {
  if (!tags) return [];
  if (Array.isArray(tags)) return tags;
  try {
    const parsed = JSON.parse(tags);
    if (Array.isArray(parsed)) return parsed;
  } catch { /* not JSON */ }
  return String(tags).split(',').map(t => t.trim()).filter(Boolean);
}

/* ─── public API ──────────────────────────────────────── */

/**
 * Get all published blog posts (listing data — no full content).
 */
export async function getAllPublishedPosts() {
  if (!hasBlogDb()) {
    // Static fallback
    return staticPosts;
  }

  const rows = await queryAll(
    `SELECT id, title, seo_slug, status, views, created_at,
            author, featured_image, tags, category_id,
            download_link, updated_at, content
     FROM blogs
     WHERE LOWER(status) = 'published'
     ORDER BY created_at DESC`
  );

  return rows.map(normaliseRow);
}

/**
 * Get a single post by slug (with full content).
 */
export async function getPostBySlug(slug) {
  if (!hasBlogDb()) {
    // Static fallback
    const meta = staticPosts.find(p => p.slug === slug);
    const content = staticContent[slug];
    if (!meta || !content) return null;
    return { ...meta, content };
  }

  const row = await queryOne(
    `SELECT * FROM blogs
     WHERE seo_slug = $1 AND LOWER(status) = 'published'
     LIMIT 1`,
    [slug]
  );

  if (!row) return null;
  return normaliseRow(row);
}

/**
 * Get all slugs (for generateStaticParams in dynamic mode).
 */
export async function getAllSlugs() {
  if (!hasBlogDb()) {
    return staticPosts.map(p => p.slug);
  }

  const rows = await queryAll(
    `SELECT seo_slug FROM blogs WHERE LOWER(status) = 'published'`
  );

  return rows.map(r => r.seo_slug);
}
