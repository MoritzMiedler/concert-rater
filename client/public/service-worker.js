if (workbox) {
  console.log(`Workbox is loaded`);
  workbox.setConfig({ debug: true });
  workbox.precaching.precacheAndRoute(self.__precacheManifest);
  workbox.routing.registerRoute(
    "/concerts",
    new workbox.strategies.NetworkFirst({
      cacheName: "image-cache",
    })
  );
} else {
  console.log(`Workbox didn't load`);
}
