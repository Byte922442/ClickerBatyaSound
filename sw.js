const cacheName = 'batya-v1';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './photo_7_2026-02-01_23-17-10.png',
  './fonovaya_muzyka.mp3'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(cacheName).then((c) => c.addAll(assets)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then((res) => res || fetch(e.request)));
});
