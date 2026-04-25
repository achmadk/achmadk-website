import { precacheAndRoute, cleanupOutdatedCaches } from 'workbox-precaching'
import { NavigationRoute, registerRoute } from 'workbox-routing'
import { NetworkFirst } from 'workbox-strategies'
import { CacheableResponsePlugin } from 'workbox-cacheable-response'
import { ExpirationPlugin } from 'workbox-expiration'

declare let self: ServiceWorkerGlobalScope

cleanupOutdatedCaches()

precacheAndRoute(self.__WB_MANIFEST)

const navigationRoute = new NavigationRoute(new NetworkFirst({
  cacheName: 'pages-cache',
  plugins: [
    new CacheableResponsePlugin({ statuses: [200] })
  ]
}));
registerRoute(navigationRoute);

registerRoute(
  new RegExp('https://cdn.hashnode.com'),
  new NetworkFirst({
    cacheName: 'hashnode-images',
    matchOptions: {
      ignoreVary: true,
    },
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Hari
      }),
    ],
  })
)

self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') {
    // @ts-ignore
    self.skipWaiting()
  }
})
