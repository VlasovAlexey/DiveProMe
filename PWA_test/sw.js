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
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
