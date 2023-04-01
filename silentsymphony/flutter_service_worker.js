'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "5326f9e90ed8490a7022c8c4a9d0b58a",
"index.html": "c2307b11b7eb5832476ff4a549609bd1",
"/": "c2307b11b7eb5832476ff4a549609bd1",
"main.dart.js": "25beb885e6709d2cd5add9e1ed9a3ca7",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5a05baf9c836ed70347a785c7cd92773",
"assets/AssetManifest.json": "9dd6b809c9581a4c3ed42fb2ef504aaf",
"assets/NOTICES": "a8e0a323c5463901fc7a25845daa7d90",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/images/300x300p4.jpg": "737522f586e1116a26d2905506e9dba1",
"assets/assets/images/600x800g8.jpg": "a92e7c5c55d9d49388abddd8c1768c57",
"assets/assets/images/600x800g9.jpg": "776f0a1e7f21029158f92fb928d4c905",
"assets/assets/images/splash_background.jpg": "f10165a2c90dffd2ed9ca623f5fb2e47",
"assets/assets/images/800x600g11.jpg": "d0c0ab2cea5170dd49b739d3e74dc107",
"assets/assets/images/800x600g10.jpg": "4d7d7cef92701bfd9441e475709c0d1d",
"assets/assets/images/600x800g3.jpg": "5b44e677a0ff3816100d08bee2994078",
"assets/assets/images/600x800g4.jpg": "350c133d562537774ad4d4c6e656d2ec",
"assets/assets/images/600x800g7.jpg": "8a807eac1be66503e6db3f700155e154",
"assets/assets/images/800x600g6.jpg": "b7ab5b523406f1eefc2365283da54858",
"assets/assets/images/600x800g12.jpg": "3f6e917ca8768d0d770a41ac99b04c38",
"assets/assets/images/800x600g1.jpg": "de54a9d003cb81f8fac046f3b31f1192",
"assets/assets/sounds/Wonders.mp3": "e8db56c27b223c06e039b213a5f55878",
"assets/assets/sounds/Rain-and-Thunder.mp3": "4e3654e597a02c3e9337419cf721f57c",
"assets/assets/sounds/Rain.mp3": "8a83c2109d39c5401da23f7e252ba9f9",
"assets/assets/sounds/signal_noise_10s.mp3": "7fbf073112469120b6f67c74729dc703",
"assets/assets/sounds/Rain-Drips.mp3": "bb9a8a58014bcf0ab0f91b8d43840d2d",
"assets/assets/sounds/Bonfire-Being-Lit.mp3": "5801719b1ac2e87e9246c43f2a3f94ab",
"assets/assets/sounds/happy-bird-singing.mp3": "c1d203a667537d55b40067dfdb241cb8",
"assets/assets/sounds/ocean-waves-sounds.mp3": "bb2ff877408dc7d66166dc5770f1bfcd",
"assets/assets/sounds/birds-singing-03.mp3": "66efa1b97ef33ff55753ebfcb37217ac",
"assets/assets/sounds/birds-singing-forest-scotland.mp3": "20d1be196c9e0abfe15174af0a40da66",
"assets/assets/sounds/Big-rain-drops.mp3": "69374f0922891844765039df70dcb545",
"assets/assets/sounds/loop-by-the-sea.mp3": "823c7b7194e209cbb1a3b371a65fee60",
"assets/assets/sounds/thunder-and-beginning-of-rainfall.mp3": "0d4a08e35e237e117e8b5c09a095f06e",
"assets/assets/sounds/Heavy-Rain.mp3": "129846bf4832c3c33ca6b0ff449dfd56",
"assets/assets/sounds/Fire-Crackle-and-Flames-1.mp3": "4b6130a79b540327dca72cfd42c9035b",
"assets/assets/sounds/Uplifting-Piano.mp3": "50014206eccdf0b46029e3f4ef153567",
"assets/assets/sounds/Cave-Fire.mp3": "4f602ab3290d1fa44c7c43b7b2ca7f49",
"assets/assets/sounds/pink_noise_10s.mp3": "08948ac4c3559a85daca272b0ef46524",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
