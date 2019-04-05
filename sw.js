var APP_PREFIX = 'PushToTelescope_'
var VERSION = 'version_03' 
var CACHE_NAME = APP_PREFIX + VERSION
var URLS = [
  '../PushToTelescope/',
  '../PushToTelescope/index.html',
  '../PushToTelescope/astromath.js',
  '../PushToTelescope/celestialObjects.js',
  '../PushToTelescope/planets.js'

]

// Respond with cached resources
self.addEventListener('fetch', function (e) {
  console.log('fetch request : ' + e.request.url)
  e.respondWith(
    caches.match(e.request).then(function (request) {
      if (request) { // if cache is available, respond with cache
        console.log('responding with cache : ' + e.request.url)
        return request
      } else {       // if there are no cache, try fetching request
        console.log('file is not cached, fetching : ' + e.request.url)
        return fetch(e.request)
      }

      // You can omit if/else for console.log & put one line below here too.
      // return request || fetch(e.request)
    })
  )
})

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log('installing cache : ' + CACHE_NAME)
      return cache.addAll(URLS)
    })
  )
})

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function(keyList) {
      var cacheWhitelist = keyList.filter(function (key) {
        return key.indexOf(APP_PREFIX)
      })
      cacheWhitelist.push(CACHE_NAME)
      return Promise.all(keyList.map(function (key, i) {
        if (cacheWhitelist.indexOf(key) === -1) {
          console.log('deleting cache : ' + keyList[i] )
          return caches.delete(keyList[i])
        }
      }))
    })
  )
})




/*
//console.log("service worker available?  " + ('serviceWorker' in navigator));
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

let cache_name = 'mysite-v2'

let urls_to_cache = [
    '/',
    '/index.html',
    '/celestialObjects.js',
    '/astromath.js',
    '/planets.js',
    '/sw.js',
    '/launch3.png',
    '/manifest.json'
    
    ]



self.addEventListener('install', (e) => {
 e.waitUntil(caches.open(cache_name).then((cache) => {
  return cache.addAll(urls_to_cache)
 }) )
})

self.addEventListener('fetch', (e) => {
    e.respondWith(caches.match(e.request).then((response) => {
     if(response) {
         console.log("caches made ");
      return response
     }
     else {
      return fetch(e.request)
     }
    }) )
})
*/
