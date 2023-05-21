self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('divepro-me-store').then((cache) => cache.addAll([
  '/DiveProMe/PWA_test1/',
  '/DiveProMe/PWA_test1/index.html',
  '/DiveProMe/PWA_test1/index.js',
  '/DiveProMe/PWA_test1/style.css',
  '/DiveProMe/PWA_test1/images/fox1.jpg',
  '/DiveProMe/PWA_test1/images/fox2.jpg',
  '/DiveProMe/PWA_test1/images/fox3.jpg',
  '/DiveProMe/PWA_test1/images/fox4.jpg',
  '/DiveProMe/PWA_test1/apple-touch-icon-76x76.png',
  '/DiveProMe/PWA_test1/apple-touch-icon-76x76+.png',
  '/DiveProMe/PWA_test1/apple-touch-icon-120x120.png',
  '/DiveProMe/PWA_test1/apple-touch-icon-120x120+.png',
  '/DiveProMe/PWA_test1/apple-touch-icon-152x152+.png',
  '/DiveProMe/PWA_test1/apple-touch-icon-180x180.png',
  '/DiveProMe/PWA_test1/apple-touch-icon-180x180+.png',
  '/DiveProMe/PWA_test1/apple-touch-icon-192x192.png',
  '/DiveProMe/PWA_test1/apple-touch-icon-512x512.png',
  '/DiveProMe/PWA_test1/apple-touch-icon.png',
  '/DiveProMe/PWA_test1/apple-touch-icon+.png',
  '/DiveProMe/PWA_test1/diveprome_screenshot_01.png'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
