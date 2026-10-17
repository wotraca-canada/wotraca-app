// Service Worker neutre WOTRACA - Évite les blocages de cache
self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(clients.claim());
});

self.addEventListener('fetch', (event) => {
    // Laisse passer toutes les requêtes réseau normalement sans bloquer les mises à jour
    event.respondWith(fetch(event.request));
});
