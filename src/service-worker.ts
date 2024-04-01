import { precacheAndRoute } from 'workbox-precaching'
import { registerRoute } from 'workbox-routing'
import { NetworkFirst } from 'workbox-strategies'
import { CacheableResponsePlugin } from 'workbox-cacheable-response'

declare let self: ServiceWorkerGlobalScope

precacheAndRoute(self.__WB_MANIFEST, {
  ignoreURLParametersMatching: [/.*/],
  directoryIndex: 'index.html',
  cleanURLs: true,

})

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
    ],
  })
)

self.addEventListener('message', (event) => {
  if (event.data?.type === 'SKIP_WAITING') {
    // @ts-ignore
    self.skipWaiting()
  }
})
