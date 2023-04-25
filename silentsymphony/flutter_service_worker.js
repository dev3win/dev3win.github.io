'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "5326f9e90ed8490a7022c8c4a9d0b58a",
"splash/img/light-2x.png": "610fb61394589abcf0e094983a4db60b",
"splash/img/dark-4x.png": "c56e2e7e5bf276b4dc78e82473929417",
"splash/img/light-3x.png": "fb5edfadbb860aa1477044ffc771fffe",
"splash/img/dark-3x.png": "fb5edfadbb860aa1477044ffc771fffe",
"splash/img/light-4x.png": "c56e2e7e5bf276b4dc78e82473929417",
"splash/img/dark-2x.png": "610fb61394589abcf0e094983a4db60b",
"splash/img/dark-1x.png": "455ddf1c57257fe0cbb4b16f165ed2f5",
"splash/img/light-1x.png": "455ddf1c57257fe0cbb4b16f165ed2f5",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "065e000f58cbce961822ae70c7fb0947",
"favicon.ico": "a9a5e82fc78d63197e7d2f0060198c3b",
"index.html": "48ba9aca4abd819b036c064f875e0122",
"/": "48ba9aca4abd819b036c064f875e0122",
"main.dart.js": "64ef302db0a6d09ac25a1c94f9f9861f",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/apple-touch-icon.png": "7fa8a2516c5bdc38a19da8d192adffa1",
"icons/icon-192.png": "580c965609fa9171e9ff4eb076927b3e",
"icons/icon-192-maskable.png": "fd7af26b74fcaad3a952ad3b6f062ec2",
"icons/icon-512-maskable.png": "76ba23a991c8b51608f95f2f53501511",
"icons/icon-512.png": "e2a1df7df186d233bde689c726d73dce",
"manifest.json": "5a05baf9c836ed70347a785c7cd92773",
"assets/AssetManifest.json": "8d1e7decd4bdf85a93c5701dabfab4e5",
"assets/NOTICES": "08adb198432e1d52be7808d370b234ed",
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
"assets/assets/icons/icon.png": "76ba23a991c8b51608f95f2f53501511",
"assets/assets/icons/ic_background.png": "01ecf730749fbc6c04981ddeafaf3b94",
"assets/assets/icons/splash.png": "edb1f23d805fee68c4c850161297497c",
"assets/assets/icons/ic_foreground.png": "2a45d403c95ad02aeb9917d16c2d40c1",
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
