// Service Worker for Jiayue Yang Portfolio PWA
const CACHE_NAME = 'jy-portfolio-v1.0.0';
const STATIC_CACHE_NAME = 'jy-portfolio-static-v1.0.0';
const DYNAMIC_CACHE_NAME = 'jy-portfolio-dynamic-v1.0.0';

// Resources to cache immediately
const STATIC_ASSETS = [
  '/',
  '/css/critical.css',
  '/css/main.css',
  '/js/lazyload.js',
  '/js/navigation.js',
  '/js/theme.js',
  '/pwa/manifest.json',
  '/images/avatar.jpg',
  '/images/icon-192.png',
  '/images/icon-512.png'
];

// Install event - cache static assets
self.addEventListener('install', event => {
  console.log('[SW] Install event');
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then(cache => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .then(() => self.skipWaiting())
      .catch(error => console.error('[SW] Cache failed:', error))
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('[SW] Activate event');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== STATIC_CACHE_NAME && cacheName !== DYNAMIC_CACHE_NAME) {
            console.log('[SW] Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip cross-origin requests
  if (url.origin !== location.origin) return;

  // Handle different request types
  if (request.destination === 'document') {
    // HTML pages - Network first, then cache
    event.respondWith(
      fetch(request)
        .then(response => {
          // Cache successful responses
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(DYNAMIC_CACHE_NAME)
              .then(cache => cache.put(request, responseClone));
          }
          return response;
        })
        .catch(() => {
          // Fallback to cache
          return caches.match(request)
            .then(cachedResponse => {
              if (cachedResponse) return cachedResponse;

              // Fallback to offline page if available
              return caches.match('/offline.html') || new Response('Offline', { status: 503 });
            });
        })
    );
  } else if (request.destination === 'image') {
    // Images - Cache first, then network
    event.respondWith(
      caches.match(request)
        .then(cachedResponse => {
          if (cachedResponse) return cachedResponse;

          return fetch(request)
            .then(response => {
              // Cache successful image responses
              if (response.status === 200) {
                const responseClone = response.clone();
                caches.open(DYNAMIC_CACHE_NAME)
                  .then(cache => cache.put(request, responseClone));
              }
              return response;
            });
        })
    );
  } else if (request.destination === 'script' || request.destination === 'style') {
    // JS/CSS - Cache first, then network
    event.respondWith(
      caches.match(request)
        .then(cachedResponse => {
          if (cachedResponse) return cachedResponse;

          return fetch(request)
            .then(response => {
              // Cache successful responses
              if (response.status === 200) {
                const responseClone = response.clone();
                caches.open(STATIC_CACHE_NAME)
                  .then(cache => cache.put(request, responseClone));
              }
              return response;
            });
        })
    );
  } else {
    // Other resources - Network first
    event.respondWith(
      fetch(request)
        .catch(() => caches.match(request))
    );
  }
});

// Background sync for offline actions
self.addEventListener('sync', event => {
  console.log('[SW] Background sync:', event.tag);

  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

// Push notifications (future enhancement)
self.addEventListener('push', event => {
  console.log('[SW] Push received');

  if (event.data) {
    const data = event.data.json();
    const options = {
      body: data.body,
      icon: '/images/icon-192.png',
      badge: '/images/icon-96.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: 1
      }
    };

    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click handler
self.addEventListener('notificationclick', event => {
  console.log('[SW] Notification click');

  event.notification.close();

  event.waitUntil(
    clients.openWindow(event.notification.data.url || '/')
  );
});

// Helper function for background sync
async function doBackgroundSync() {
  try {
    // Implement any background sync logic here
    // For example: retry failed form submissions, sync offline data, etc.
    console.log('[SW] Performing background sync');
  } catch (error) {
    console.error('[SW] Background sync failed:', error);
  }
}

// Performance monitoring
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME });
  }
});

// Update notification
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});