self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      '/DiveProMe/PWA_test/',
      '/DiveProMe/PWA_test/index.html',
      '/DiveProMe/PWA_test/index.js',
      '/DiveProMe/PWA_test/style.css',
      '/DiveProMe/PWA_test/images/fox1.jpg',
      '/DiveProMe/PWA_test/images/fox2.jpg',
      '/DiveProMe/PWA_test/images/fox3.jpg',
      '/DiveProMe/PWA_test/images/fox4.jpg',
      '/DiveProMe/PWA_test/apple-touch-icon-76x76.png',
      '/DiveProMe/PWA_test/apple-touch-icon-76x76+.png.png',
      '/DiveProMe/PWA_test/apple-touch-icon-120x120.png.png',
      '/DiveProMe/PWA_test/apple-touch-icon-120x120+.png.png',
      '/DiveProMe/PWA_test/apple-touch-icon-152x152+.png.png',
      '/DiveProMe/PWA_test/apple-touch-icon-180x180.png.png',
      '/DiveProMe/PWA_test/apple-touch-icon-180x180+.png.png',
      '/DiveProMe/PWA_test/apple-touch-icon-192x192.png.png',
      '/DiveProMe/PWA_test/apple-touch-icon-512x512.png.png',
      '/DiveProMe/PWA_test/apple-touch-icon.png.png',
      '/DiveProMe/PWA_test/apple-touch-icon+.png.png'
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
