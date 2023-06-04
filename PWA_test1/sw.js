self.addEventListener("install", function(event) {
  event.waitUntil(preLoad());
});

var preLoad = function(){
  console.log("Installing web app");
  return caches.open("diveprome-offline").then(function(cache) {
    console.log("caching index and important routes");
    return cache.addAll(['/DiveProMe/PWA_test1/',
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
  '/DiveProMe/PWA_test1/diveprome_screenshot_01.png']);
  });
};

self.addEventListener("fetch", function(event) {
  event.respondWith(checkResponse(event.request).catch(function() {
    return returnFromCache(event.request);
  }));
  event.waitUntil(addToCache(event.request));
});

var checkResponse = function(request){
  return new Promise(function(fulfill, reject) {
    fetch(request).then(function(response){
      if(response.status !== 404) {
        fulfill(response);
      } else {
        reject();
      }
    }, reject);
  });
};

var addToCache = function(request){
  return caches.open("diveprome-offline").then(function (cache) {
    return fetch(request).then(function (response) {
      console.log(response.url + " was cached");
      return cache.put(request, response);
    });
  });
};

var returnFromCache = function(request){
  return caches.open("diveprome-offline").then(function (cache) {
    return cache.match(request).then(function (matching) {
     if(!matching || matching.status == 404) {
       return cache.match("index.html");
     } else {
       return matching;
     }
    });
  });
};
