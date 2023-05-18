'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f25fabc68a6e16dc275fa8cd57541acc",
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
"index.html": "331508bdc9b9ebc9a25e14e7040bc19c",
"/": "331508bdc9b9ebc9a25e14e7040bc19c",
"main.dart.js": "c25178b987633c69f230610c80223a95",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"icons/apple-touch-icon.png": "7fa8a2516c5bdc38a19da8d192adffa1",
"icons/icon-192.png": "580c965609fa9171e9ff4eb076927b3e",
"icons/icon-192-maskable.png": "fd7af26b74fcaad3a952ad3b6f062ec2",
"icons/icon-512-maskable.png": "76ba23a991c8b51608f95f2f53501511",
"icons/icon-512.png": "e2a1df7df186d233bde689c726d73dce",
"manifest.json": "5a05baf9c836ed70347a785c7cd92773",
"assets/AssetManifest.json": "056bf12d067b1f8074a0a2ae9660c7f6",
"assets/NOTICES": "6af2542173f9900fdc7abcc6b6f47f6a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "34b71ff741f3d77bf7edbc0a43fade41",
"assets/fonts/MaterialIcons-Regular.otf": "4b5b4720f0481d2409fbf2654dcabeb5",
"assets/assets/images/1080x1920_1.jpg": "736a38f46bea8eb39372d8530e659969",
"assets/assets/images/1080x1920_3.jpg": "a7b450065b230e8edb55fc78927b6bf8",
"assets/assets/images/1080x1920_2.jpg": "97403791f458b7e6321c89be57455f7b",
"assets/assets/images/1080x1920_6.jpg": "a8fba20d7480dc9b456fde5101d72ec4",
"assets/assets/images/1080x1920_7.jpg": "a90421d2ccf046855864fb7c672ba787",
"assets/assets/images/1080x1920_5.jpg": "966360743b17b241753f1e8d954a4b11",
"assets/assets/images/1080x1920_4.jpg": "aafd9a8418f22db563d89675417a01b2",
"assets/assets/images/1080x1920_20.jpg": "42d6dc9d1facccf343991bc80cd7de68",
"assets/assets/images/1080x1920_19.jpg": "79362c0b62a1793f4ff8838029fcc6ab",
"assets/assets/images/1080x1920_18.jpg": "bf2eebd8f930cc1b6bfc9ee7bf31313b",
"assets/assets/images/1080x1920_16.jpg": "625da5b40656c701b54d96a5d7cd128f",
"assets/assets/images/1080x1920_17.jpg": "1e8b8b7b90b8e88063eea9a44ab4b376",
"assets/assets/images/1080x1920_15.jpg": "cc7310aafa1f72afb4334fc8418ece52",
"assets/assets/images/1080x1920_14.jpg": "65d4cfad1b6247bac01b8cc0d108af54",
"assets/assets/images/1080x1920_10.jpg": "581cd18ac7b468c82f7e662d8fe64919",
"assets/assets/images/1080x1920_11.jpg": "9d8f6195f41c05afc1e07dba70b58508",
"assets/assets/images/1080x1920_13.jpg": "f42f738d88c5627e6af0fbaec9f7f740",
"assets/assets/images/1080x1920_12.jpg": "aa342a386eaee3c896ce6ef08783e6cb",
"assets/assets/images/1080x1920_9.jpg": "4cd2035c1f36fb9791f4c858d6831039",
"assets/assets/images/1080x1920_8.jpg": "36722ef6e08574af769565099bfb3638",
"assets/assets/sounds/Crickets_Foreground.mp3": "150a5e43c51edf0c6c53dd84de30f6d9",
"assets/assets/sounds/Wonders.mp3": "24fca854a8a416fbd597541e17358f7d",
"assets/assets/sounds/Heavy_Rain.mp3": "8e5f208764a35fb6a035286e4a8553a3",
"assets/assets/sounds/Raindrops_on_window.mp3": "8e6cf30b157caa53468a921ec63def24",
"assets/assets/sounds/Birds_in_City.mp3": "4f675aeeee5b1f5407dcd75843017c11",
"assets/assets/sounds/Sunset_Landscape.mp3": "d033019b50f103db3047de9ebdb2e188",
"assets/assets/sounds/Thunder_and_rainfall.mp3": "572bfdc1e0dd2251715b8842782384c4",
"assets/assets/sounds/Piano_Beautiful.mp3": "54a0a8afc46af741fd5b80646368b4af",
"assets/assets/sounds/Big_rain_drops.mp3": "70b239f2051366943c584b61b4d429cf",
"assets/assets/sounds/Vacuum.mp3": "7f027c803cba099301b155f35ff676d3",
"assets/assets/sounds/Birds_Morning_Park.mp3": "78e9093a29406dd9a12e0d28553c2251",
"assets/assets/sounds/Robin_Bird_Calls.mp3": "cd7af832872cd46287da7d955e1cbad3",
"assets/assets/sounds/Wind_in_space.mp3": "f878c6988ef2ef92f849b9fcfb511d5e",
"assets/assets/sounds/Clock_Ticking.mp3": "6a5710d1c76a17921354195d489e3a5c",
"assets/assets/sounds/Train_Railclick.mp3": "7e4c155085c71579ed116a6dd3b66e5f",
"assets/assets/sounds/Ocean_waves.mp3": "81799db42639d12be1fda972d6375368",
"assets/assets/sounds/Solemn_Choral.mp3": "733e26cd8fc574ee9dff81eacf5806c5",
"assets/assets/sounds/Waves.mp3": "39ac96c6cde5709363009e72979af3ab",
"assets/assets/sounds/Heartbeat.mp3": "77bf2088aff08e440d93cb3f7748d37a",
"assets/assets/sounds/Frogs_and_birds.mp3": "b77b23d5a385b788382917d586b63dac",
"assets/assets/sounds/Lake_Frog.mp3": "5b2c5ec81907037cb1b6b63d26ba2f3c",
"assets/assets/sounds/Songbird.mp3": "c7d163bc7c98fd3ad06ae7d897dd2135",
"assets/assets/sounds/Shower.mp3": "fcab0a32a6d6b7289e862778dca755d4",
"assets/assets/sounds/Helicopter.mp3": "436d6993cf18240ce8831f1821d7d524",
"assets/assets/sounds/Small_Frog.mp3": "2cde4462c64f2f0abd0c0d4ae2bb544b",
"assets/assets/sounds/Auto_Tires_Gravel.mp3": "f5fd4702055825b8a9a690c8b464c8e4",
"assets/assets/sounds/Birds_singing.mp3": "a97fc663d9f08c16921582d43600159c",
"assets/assets/sounds/Door_Scrape.mp3": "73d185272570ff1c14b04b99d884f1c7",
"assets/assets/sounds/Heartbreaking.mp3": "b37535ba2eed79800b7e378a68ff1988",
"assets/assets/sounds/Gregorian_Chant.mp3": "b11c8f6c4f627130f2180b8a277145de",
"assets/assets/sounds/Water_Trickling.mp3": "493c2d04c7640969f619198df2590a57",
"assets/assets/sounds/Fire_crackles.mp3": "a7fe08e83a7309ab876a3b3f52102923",
"assets/assets/sounds/Bird_Pipe_Chirp.mp3": "ed8d634eeec0ac5a6eecc73ec489e755",
"assets/assets/sounds/Baby_Singing.mp3": "694dc8bb5450b82c96dd7930c822bc13",
"assets/assets/sounds/Illumination.mp3": "ca418290f2c7d3f82acf377c0a25eb29",
"assets/assets/sounds/Piano_Warm_Memories.mp3": "ee51c887902c63cdc673e6ae7bb67711",
"assets/assets/sounds/Hope_Soundtrack.mp3": "549cd4b8f4faea3adb39e75d741c974e",
"assets/assets/sounds/Close_Drawer.mp3": "ca3e5ee7c86a7f7fdcdab2c9c2ba4a06",
"assets/assets/sounds/Ice_Cream_Truck.mp3": "34beaffe805e0be863108e4887bfe085",
"assets/assets/sounds/Calm_and_Peaceful.mp3": "eac034e9dfceabeff4384460d6c76117",
"assets/assets/sounds/Big_Fire_crackles.mp3": "536dbb72182b29b0b4b0b574a9d3ef13",
"assets/assets/sounds/Beach_Waves.mp3": "254de59b989ea760b441c1270f20dd80",
"assets/assets/sounds/Piano_Morning_Light.mp3": "ce50f30fef6b6a89ddb1867d408c37a0",
"assets/assets/sounds/Plane_Jet.mp3": "60f39aa6c5106a2ad9375c1c5c25746a",
"assets/assets/sounds/Cricket_sound.mp3": "f5010ded85ca239d68cb0a2201df9c72",
"assets/assets/sounds/Old_Train_Railclick.mp3": "625817edbd0b034b63414fcc001459f2",
"assets/assets/sounds/Big_Plane_Jet.mp3": "5bc4a9ff2bb265d2ea04d8979600a54e",
"assets/assets/icons/icon.png": "76ba23a991c8b51608f95f2f53501511",
"assets/assets/icons/ic_background.png": "01ecf730749fbc6c04981ddeafaf3b94",
"assets/assets/icons/splash.png": "edb1f23d805fee68c4c850161297497c",
"assets/assets/icons/ic_foreground.png": "2a45d403c95ad02aeb9917d16c2d40c1",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
