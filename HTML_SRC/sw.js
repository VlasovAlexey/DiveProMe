const CACHE_NAME = 'diveprome-v161';
const UPDATE_INTERVAL_MS = 90 * 24 * 60 * 60 * 1000; // 90 days
const TS_KEY = '_sw_last_update';

// App shell — pre-cached at install time
const SHELL_URLS = [
    './',
    './index.html',
    './sys/manifest.webmanifest'
];

// --- timestamp helpers (stored as a synthetic cache entry) ---
async function readTs(cache) {
    const r = await cache.match(TS_KEY);
    return r ? (await r.json()).t : 0;
}
async function writeTs(cache) {
    await cache.put(TS_KEY, new Response(JSON.stringify({ t: Date.now() }), {
        headers: { 'Content-Type': 'application/json' }
    }));
}

// Refresh every cached resource from the network, then reset the 90-day clock
async function refreshAllCached(cache) {
    const keys = await cache.keys();
    await Promise.allSettled(
        keys
            .filter(req => req.url !== TS_KEY)
            .map(async req => {
                try {
                    const fresh = await fetch(req);
                    if (fresh.ok) await cache.put(req, fresh);
                } catch (_) {}
            })
    );
    await writeTs(cache);
}

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(SHELL_URLS))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(
                keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
            ))
            .then(() => self.clients.claim())
    );
});

// Guard so only one background refresh runs at a time
let refreshing = false;

self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') return;
    if (!event.request.url.startsWith(self.location.origin)) return;

    event.respondWith((async () => {
        const cache = await caches.open(CACHE_NAME);
        const cached = await cache.match(event.request);

        if (cached) {
            // Serve from cache immediately — internet not required
            if (!refreshing) {
                const ts = await readTs(cache);
                if (Date.now() - ts > UPDATE_INTERVAL_MS) {
                    // 90 days elapsed: refresh all cached assets in background
                    refreshing = true;
                    event.waitUntil(
                        refreshAllCached(cache).finally(() => { refreshing = false; })
                    );
                }
            }
            return cached;
        }

        // Resource not yet cached — fetch from network, cache for future offline use
        try {
            const response = await fetch(event.request);
            if (response.ok) {
                cache.put(event.request, response.clone());
                // Record the timestamp on the very first successful network fetch
                const ts = await readTs(cache);
                if (ts === 0) await writeTs(cache);
            }
            return response;
        } catch (_) {
            return new Response('Offline', { status: 503 });
        }
    })());
});
