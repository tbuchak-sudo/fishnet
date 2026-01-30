// Це проста заглушка Service Worker
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // Просто пропускаємо всі запити в інтернет
  e.respondWith(fetch(e.request));
});
