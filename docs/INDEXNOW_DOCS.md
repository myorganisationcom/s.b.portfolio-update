# IndexNow Implementation Documentation

This document outlines how the custom IndexNow integration works for `sarvanu.com`. This integration allows you to instantly notify search engines (like Bing, Yandex, etc.) whenever your site content changes, speeding up SEO discovery without waiting for crawls.

## 1. Environment Requirements
To make the integration work, ensure the following environment variables are set (in your `.env.local` or Vercel Dashboard):

```env
INDEXNOW_KEY="06881c5a6a2fb7c34a6d70acc388af78"
INDEXNOW_HOST="sarvanu.com"
INDEXNOW_ENDPOINT="https://api.indexnow.org/indexnow"
API_SECRET_KEY="your_super_secret_api_key_here"
CRON_SECRET="your_super_secret_cron_key_here"
```
*(The verification file `public/06881c5a6a2fb7c34a6d70acc388af78.txt` must match `INDEXNOW_KEY`)*

---

## 2. API Endpoints Overview

Two protected endpoints have been created in `src/app/api/indexnow/`. Both require standard `POST` requests and custom headers to function.

### A. Submitting Single or Selected URLs (`/submit`)
Use this endpoint when you just published a new blog post and you only want to notify Bing about that specific URL.

- **URL**: `POST https://sarvanu.com/api/indexnow/submit`
- **Header**: `x-api-key: <your API_SECRET_KEY>`
- **Body Options**:
  ```json
  // Single URL
  {
    "url": "https://sarvanu.com/blog/new-post"
  }
  
  // Multiple specific URLs
  {
    "urls": [
      "https://sarvanu.com/blog/new-post-1", 
      "https://sarvanu.com/case-studies"
    ]
  }
  ```

### B. Syncing the Entire Sitemap (`/sync`)
Use this endpoint for Automated Cron Jobs (e.g., Vercel Cron) to push your entire sitemap to Bing automatically on a schedule (e.g., daily or weekly).

- **URL**: `POST https://sarvanu.com/api/indexnow/sync`
- **Header**: `x-cron-secret: <your CRON_SECRET>`
- **Body**: None required. It automatically fetches every URL via `getSitemapUrls()`.

---

## 3. Automation via Vercel Cron

To automatically sync your sitemap to search engines every day at midnight, simply add `vercel.json` to your root directory:

```json
{
  "crons": [
    {
      "path": "/api/indexnow/sync",
      "schedule": "0 0 * * *"
    }
  ]
}
```
*Note: Make sure your `CRON_SECRET` env variable in Vercel is set to authorize the cron job correctly, as Vercel attaches this header automatically.*

---

## 4. Troubleshooting
If submissions fail:
1. Ensure the verification file (`06881c5a6a2fb7c34a6d70acc388af78.txt`) is correctly output in the root of the server (`https://sarvanu.com/06881c5a6a2fb7c34a6d70acc388af78.txt`).
2. Ensure you are sending `POST` requests (not `GET`).
3. Ensure your headers exactly match `x-api-key` or `x-cron-secret`.
