import { defineConfig } from 'vite'
import { one } from 'one/vite'

export default defineConfig({
  base: '/astral-tailwind/',
  plugins: [
    one({
      web: {
        // Skip SSG, use client-side rendering instead
        defaultRenderMode: 'client-only',
      },
    }),
    // Simple plugin to handle image imports
    {
      name: 'handle-images',
      load(id) {
        if (id.endsWith('.png') || id.endsWith('.jpg') || id.endsWith('.svg')) {
          return 'export default "";'
        }
      }
    }
  ],
  build: {
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.svg', '**/*.gif']
})
