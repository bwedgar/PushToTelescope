console.log("service worker available?  " + ('serviceWorker' in navigator));
if ('serviceWorker' in navigator) {
    console.log("before add listener");
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js').then((registration) => {
            console.log("Service Worker registration successful: ", registration)
        },
      (err) => {
            console.log("Registration failed", err)
        })
    })
}
    else { console.log("service worker not available") }

console.log("after service worker registration attempt");

let cache_name = 'mysite-v4'

let urls_to_cache = [
'/PushToTelescope/',
    '/PushToTelescope/index.html',
    '/PushToTelescope/astromath.js',
    '/PushToTelescope/celestialobjects.js',
    '/PushToTelescope/planets.js',
    '/PushToTelescope/launch3.png'
    ]

self.addEventListener('install', (e) => {
 e.waitUntil(caches.open(cache_name).then((cache) => {
  return cache.addAll(urls_to_cache)
 }) )
})

self.addEventListener('fetch', (e) => {
    e.respondWith(caches.match(e.request).then((response) => {
     if(response)
      return response
     else
      return fetch(e.request)
    }) )
})
