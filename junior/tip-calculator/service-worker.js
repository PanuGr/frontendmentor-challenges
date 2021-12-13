const cacheName = 'v1';
//ASSETS TO CACHE. (it updates the assets ONLY if change the cachename!)
const urlsToCache = [
    './index.html','./style.css','./index.js'
];


/*The next block installs the service worker */
self.addEventListener('install', (e) => {
    self.skipWaiting();
    e.waitUntil((async () => {
        const cache = await caches.open(cacheName);
        console.log('Caching all');
        await cache.addAll(urlsToCache);
    })());
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        (async () => {
            try {
                // First, try to use the navigation preload response if it's supported.
                const preloadResponse = await event.preloadResponse;
                if (preloadResponse) {
                    return preloadResponse;
                }
                // Always try the network first.
                const networkResponse = await fetch(event.request);
                console.log(" returning online page instead.");
                return networkResponse;
            } catch (error) {
                console.log("Fetch failed; returning offline page instead.", error);
                const cache = await caches.open(cacheName);
                const cachedResponse = await cache.match(event.request);
                return cachedResponse;
            }
        })()
    );

});

/* CLEAR CACHE*/
self.addEventListener('activate', (e) => {
    e.waitUntil(caches.keys().then((keyList) => {
        Promise.all(keyList.map((key) => {
            if (key === cacheName) { return; }
            caches.delete(key);
        }))
    })());
});

