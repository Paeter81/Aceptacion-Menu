const CACHE = 'menus-logo-v2';
const PREFIX = 'menus-logo-';
const CORE = ["./", "./index.html", "./manifest.webmanifest", "./icon-16.png", "./icon-32.png", "./icon-48.png", "./icon-96.png", "./icon-152.png", "./icon-180.png", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png", "./favicon-32x32.png", "./favicon-96x96.png", "./favicon.ico", "./icon-maskable-192.png", "./icon-maskable-512.png"];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key.startsWith(PREFIX) && key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET' || !request.url.startsWith('http')) return;
  const url = new URL(request.url);
  if (url.origin === self.location.origin) {
    event.respondWith(fetch(request).then(response => {
      if (response.ok) {
        const copy = response.clone();
        event.waitUntil(caches.open(CACHE).then(cache => cache.put(request, copy)));
      }
      return response;
    }).catch(async () => {
      const cached = await caches.match(request, {ignoreSearch: true});
      if (cached) return cached;
      if (request.mode === 'navigate') return caches.match('./index.html');
      return Response.error();
    }));
  } else {
    event.respondWith(caches.match(request).then(cached => cached || fetch(request).then(response => {
      if (response.ok || response.type === 'opaque') {
        const copy = response.clone();
        event.waitUntil(caches.open(CACHE).then(cache => cache.put(request, copy)));
      }
      return response;
    })));
  }
});
