/**
 * Blog Repository — Unified data layer
 *
 * When DATABASE_URL is set  → queries the PostgreSQL "blogs" table through Prisma.
 * When it is NOT set             → falls back to static data files for dev/preview.
 *
 * External DB schema (Prisma @@map("blogs")):
 *   id, title, seo_slug, status, views, created_at,
 *   content, author, featured_image, tags, category_id,
 *   download_link, updated_at
 */

import { getPrisma, hasDatabase } from '../services/prisma.js';

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
    slug:          row.seoSlug,
    title:         row.title,
    description:   extractDescription(row.content),
    content:       row.content,
    author:        row.author,
    image:         row.featuredImage || '',
    featuredImage: row.featuredImage || '',
    tags:          parseTags(row.tags),
    category:      String(row.categoryId ?? ''),
    categoryId:    Number(row.categoryId ?? 0),
    status:        row.status,
    views:         Number(row.views ?? 0),
    createdAt:     row.createdAt,
    updatedAt:     row.updatedAt,
    downloadLink:  row.downloadLink || null,
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
  if (!hasDatabase()) {
    // Static fallback
    return staticPosts;
  }

  const prisma = getPrisma();
  const rows = await prisma.blog.findMany({
    where: {
      status: {
        equals: 'published',
        mode: 'insensitive',
      },
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return rows.map(normaliseRow);
}

/**
 * Get a single post by slug (with full content).
 */
export async function getPostBySlug(slug) {
  if (!hasDatabase()) {
    // Static fallback
    const meta = staticPosts.find(p => p.slug === slug);
    const content = staticContent[slug];
    if (!meta || !content) return null;
    return { ...meta, content };
  }

  const prisma = getPrisma();
  const row = await prisma.blog.findFirst({
    where: {
      seoSlug: slug,
      status: {
        equals: 'published',
        mode: 'insensitive',
      },
    },
  });

  if (!row) return null;
  return normaliseRow(row);
}

/**
 * Get all slugs (for generateStaticParams in dynamic mode).
 */
export async function getAllSlugs() {
  if (!hasDatabase()) {
    return staticPosts.map(p => p.slug);
  }

  const prisma = getPrisma();
  const rows = await prisma.blog.findMany({
    where: {
      status: {
        equals: 'published',
        mode: 'insensitive',
      },
    },
    select: {
      seoSlug: true,
    },
  });

  return rows.map(r => r.seoSlug);
}
