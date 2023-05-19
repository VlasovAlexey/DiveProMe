const CACHE_NAME = 'diveprome-cache';

// Add whichever assets you want to pre-cache here:
const PRECACHE_ASSETS = [
  '/DiveProMe/PWA_test/',
  '/DiveProMe/PWA_test/index.html',
  '/DiveProMe/PWA_test/index.js',
  '/DiveProMe/PWA_test/style.css',
  '/DiveProMe/PWA_test/images/fox1.jpg',
  '/DiveProMe/PWA_test/images/fox2.jpg',
  '/DiveProMe/PWA_test/images/fox3.jpg',
  '/DiveProMe/PWA_test/images/fox4.jpg',
  '/DiveProMe/PWA_test/apple-touch-icon-76x76.png',
  '/DiveProMe/PWA_test/apple-touch-icon-76x76+.png',
  '/DiveProMe/PWA_test/apple-touch-icon-120x120.png',
  '/DiveProMe/PWA_test/apple-touch-icon-120x120+.png',
  '/DiveProMe/PWA_test/apple-touch-icon-152x152+.png',
  '/DiveProMe/PWA_test/apple-touch-icon-180x180.png',
  '/DiveProMe/PWA_test/apple-touch-icon-180x180+.png',
  '/DiveProMe/PWA_test/apple-touch-icon-192x192.png',
  '/DiveProMe/PWA_test/apple-touch-icon-512x512.png',
  '/DiveProMe/PWA_test/apple-touch-icon.png',
  '/DiveProMe/PWA_test/apple-touch-icon+.png',
  '/DiveProMe/PWA_test/diveprome_screenshot_01.png'
]

// Listener for the install event - pre-caches our assets list on service worker install.
self.addEventListener('install', event => {
    event.waitUntil((async () => {
        const cache = await caches.open(CACHE_NAME);
        cache.addAll(PRECACHE_ASSETS);
    })());
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(async () => {
      const cache = await caches.open(CACHE_NAME);

      // match the request to our cache
      const cachedResponse = await cache.match(event.request);

      // check if we got a valid response
      if (cachedResponse !== undefined) {
          // Cache hit, return the resource
          return cachedResponse;
      } else {
        // Otherwise, go to the network
          return fetch(event.request)
      };
  });
});
