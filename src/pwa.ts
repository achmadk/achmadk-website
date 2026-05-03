if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', async () => {
    try {
      const { Workbox } = await import('workbox-window')
      const workbox = new Workbox('/service-worker.js', { scope: '/' })

      const showSkipWaitingPrompt = () => {
        workbox.messageSkipWaiting()
      }

      workbox.addEventListener('waiting', showSkipWaitingPrompt)

      workbox.addEventListener('controlling', () => {
        location.reload()
      })

      // workbox.addEventListener('externalerror', (event) => {
      //   console.error('[PWA] Service worker registration failed:', event.error)
      // })

      const registration = await workbox.register()

      if (registration) {
        console.log('[PWA] Service worker registered:', registration.scope)
      }
    } catch (error) {
      console.error('[PWA] Failed to load Workbox:', error)
    }
  })
}