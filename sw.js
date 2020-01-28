    if ('serviceWorker' in navigator) {
  //navigator.serviceWorker.register('sw.js')
        navigator.serviceWorker.register('/PushToTelescope/sw.js')
  .then(function (registration) {
  console.log('ServiceWorker registration succeeded.');
  }).catch(function (err) {
   console.log('ServiceWorker registration failed: ', err);
  });
 }


const preCacheName = "pre-cache-hbp-2",

    preCacheFiles = [
  '/PushToTelescope/',
    '/PushToTelescope/index.html',
    '/PushToTelescope/astromath.js',
    '/PushToTelescope/celestialobjects.js',
    '/PushToTelescope/planets.js',
    '/PushToTelescope/launch3.png',
    '/PushToTelescope/manifest.json'
];

self.addEventListener('install', event => {

    caches.open(preCacheName).then(function (cache) {

        return cache.addAll(preCacheFiles);

    });

});

self.addEventListener('fetch', event => {

    event.respondWith(

        caches.match(event.request).then(response => {

            if (!response) {

                //fall back to the network fetch

                return fetch(event.request);

            }

            return response;

        })

    )

});
