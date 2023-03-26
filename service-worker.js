const CACHE_NAME = "meu-pwa-cache-v1";
const urlsToCache = [
  "/",
  '/index.html',
  '/index1.html',
  '/numeros.html',
  '/cores.html',
  '/estilo.css',
  '/css.css',
  '/funcao.js',
  '/funcaos1.js',
  'img/ingles.png',
   "https://johnstonpc.github.io/app-ingles/"
   
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }

        return fetch(event.request);
      })
  );
});
