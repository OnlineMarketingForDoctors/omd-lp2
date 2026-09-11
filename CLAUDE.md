# omd-lp2

## Search engine indexing: OFF

This site must not be indexed by search engines. This is a hard requirement
until an explicit launch decision is made.

Every page and response must carry no-index directives:

1. `vercel.json` sets `X-Robots-Tag: noindex, nofollow, noarchive, nosnippet,
   noimageindex` on `/(.*)`, covering HTML, images, PDFs, and API responses.
2. Every HTML page must also include
   `<meta name="robots" content="noindex, nofollow">` in `<head>`.
3. `robots.txt` must NOT contain `Disallow: /`. Blocking the crawl prevents
   crawlers from ever reading the directives above, which lets bare URLs get
   indexed with no snippet. Allow the crawl so the no-index is actually seen.

When adding a page, layout, or route, carry the meta tag with it. Do not
remove or weaken any of the above as a side effect of unrelated work.

### Going live

Removing no-index is a deliberate, standalone change: drop the `X-Robots-Tag`
block from `vercel.json`, remove the robots meta tags, and add a sitemap.
Only do this when explicitly asked to launch.
