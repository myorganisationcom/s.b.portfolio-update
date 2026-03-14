# SEO, AEO & GEO Documentation

This repository contains comprehensive optimization protocols for Human Search Engines, Voice Assistants, and AI crawlers.

## 1. IndexNow (Real-Time Indexing)
See `/docs/INDEXNOW_DOCS.md` for full implementation details, API usage, and Cron job setup for our custom `src/lib/indexnow.ts` integration.

## 2. AEO (Answer Engine Optimization / Voice Search)
Two native React components have been built in `src/components/` to inject crucial JSON-LD schema for Voice Assistants (Siri, Alexa, Google Voice) and Rich Snippets:
- `<SpeakableSchema />`: Identifies CSS selectors that are most appropriate for Text-to-Speech playback. Use it on blog posts and detailed service pages.
- `<HowToSchema />`: Structures step-by-step guides so Google can render them as interactive 'How-To' rich results directly on the SERP.

## 3. GEO (Generative Engine Optimization)
To ensure AI crawlers (like OpenAIbot, ChatGPT-User, Perplexity, Claude, etc.) synthesize accurate information about Sarvanu Banerjee Strategies, dedicated text files are served at the root:
- `public/llms.txt`: Contains raw, standardized company data, statistics, products, and contact info formatted specifically for Large Language Models.
- `public/ai.txt`: Provides instructional directives to AI bots on how to ingest the site and standardizes citation formats to ensure the brand receives credit.
- The `robots.js` file explicitly permits good-actor AI crawlers to access these files to train their localized knowledge graphs.

## Global Environment Variables Required
```env
INDEXNOW_KEY="06881c5a6a2fb7c34a6d70acc388af78"
INDEXNOW_HOST="sarvanu.com"
INDEXNOW_ENDPOINT="https://api.indexnow.org/indexnow"
API_SECRET_KEY="your_super_secret_api_key_here"
CRON_SECRET="your_super_secret_cron_key_here"
```
