const cacheName = "breaker"
const assets = [
  "/",
  "/index.html",
  "/favicon.png",
  "/global.css",
  "/build/bundle.js",
  "/build/bundle.css",
  "/build/bundle.js.map",
  "/audio/bell.mp3",
  "/audio/coin.mp3",
  "/audio/error.mp3",
  "/audio/none.mp3",
  "/manifest.webmanifest"
];

// install event
self.addEventListener('install', evt => {
  //console.log('service worker installed');
  evt.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log('caching shell assets');
      cache.addAll(assets);
    })
  );
});

// activate event
self.addEventListener('activate', evt => {
  //console.log('service worker activated');
  evt.waitUntil(
    caches.keys().then(keys => {
      //console.log(keys);
      return Promise.all(keys
        .filter(key => key !== cacheName)
        .map(key => caches.delete(key))
      );
    })
  );
});


self.addEventListener('fetch', function(event) {
  console.log(event.request.url);
 
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
 });