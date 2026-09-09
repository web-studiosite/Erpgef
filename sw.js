// Service Worker for PRUMO ERP - Offline-first caching for Ferragens & Construcao
const CACHE_NAME = 'prumo-gef-v1.0';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  '/img/app-icon.svg',
  '/img/pwa-192x192.png',
  '/img/pwa-512x512.png',
  '/img/apple-touch-icon.png',
  '/css/app.css',
  '/js/entry.js',
  '/js/vendor/react.js',
  '/js/vendor/lucide.js',
  '/js/vendor/supabase.js',
  '/js/vendor/other.js',
  '/js/app/core.js',
  '/js/app/components.js',
  '/js/app/views.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch((err) => {
        console.warn('PWA: Some static assets failed to pre-cache', err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);

  // Do not intercept Supabase or remote API calls
  if (url.hostname.includes('supabase.co') || url.pathname.startsWith('/api')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, networkResponse.clone()));
          }
        }).catch(() => {});
        return cachedResponse;
      }
      return fetch(event.request).catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match('/');
        }
      });
    })
  );
});
