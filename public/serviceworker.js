const CACHE_NAME = "version-1";
const urlsToCache = ["index.html", "offline.html"];

const self = this;

// Install SW
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");

      return cache.addAll(urlsToCache);
    })
  );
});

// Listen for requests
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(() => {
      return fetch(event.request).catch(() => caches.match("offline.html"));
    })
  );
});

// Activate the SW
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});

// // TO create the cache

// const CACHE_NAME = "version-1";
// // when the sysyem is Offline this make Reference of it
// const urlsToCache = ["index.html", "offline.html"];

// // to represent the self by this

// const self = this;

// // 1. install Service Worker

// self.addEventListener("install", (event) => {
//   console.log("Open cache my");

//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       console.log(cache);
//       return cache.addAll(urlsToCache);
//     })
//   );
// });

// // 2. Listen for Requests
// self.addEventListener("fetch", (event) => {
//   console.log("Fetch");
//   event.respondWith(
//     caches.match(event.request).then(() => {
//       return fetch(event.request).catch(() => caches.match("offline.html"));
//     })
//   );
// });

// // 3. Activate Service Workers
// self.addEventListener("activate", (event) => {
//   console.log("activate");

//   // to remove all the old caches

//   const cacheWhiteList = [];
//   cacheWhiteList.push(CACHE_NAME);

//   event.waitUntil(
//     caches.keys().then((cacheNames) =>
//       Promise.all(
//         cacheNames.map((cacheName) => {
//           if (!cacheWhiteList.includes(cacheName)) {
//             return caches.delete(cacheName);
//           }
//         })
//       )
//     )
//   );
// });
