// Service worker minimo: serve solo perché il browser permetta di installare il gioco come app a schermo intero (non salva nulla in cache).
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
