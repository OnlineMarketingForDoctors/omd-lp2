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

## Publishing: push to main

The owner has asked for every change to go straight to `main` (standing
instruction, October 2026). After committing on a working branch, merge it
into `main` (fast-forward when possible) and push `main`, without opening a
pull request or asking first. Keep the working branch in step with `main`.
This does not change the no-index rules above: they still apply to every push.

Vercel can pick up pushes late: on 21 October 2026 its GitHub builds ran 15 to
25 minutes behind the push, for every commit, including uploads made on the
GitHub website. After pushing, check that a production deployment exists for
the new `main` commit. If it has not started within a few minutes, create one
for that commit (Vercel project `omd-lp2`), then check again once the queue
clears that production is still on the newest commit: a late build of an older
commit can replace it, and the fix is to redeploy the newest one.
