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
  '/app-ingles.html'
   
   
];


self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log("Cache aberto");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      if (response) {
        console.log("Retornando do cache: ", event.request.url);
        return response;
      }

      console.log("Buscando da rede: ", event.request.url);
      return fetch(event.request);
    })
  );
});
