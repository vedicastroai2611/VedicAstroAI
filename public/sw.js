const CACHE_NAME = "vedic-astro-ai-v1"
const urlsToCache = [
  "/",
  "/dashboard",
  "/chat",
  "/forecast",
  "/settings",
  "/manifest.json",
  "/icon-192.jpg",
  "/icon-512.jpg",
]

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache)))
})

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response
      }
      return fetch(event.request)
    }),
  )
})
