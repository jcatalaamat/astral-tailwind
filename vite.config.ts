import { defineConfig } from 'vite'
import { one } from 'one/vite'

// Get base URL based on environment
// Use empty path for local development, /astral-tailwind/ for production
const isDev = process.env.NODE_ENV !== 'production'
const base = isDev ? '/' : '/astral-tailwind/'

export default defineConfig({
  base,
  plugins: [
    one(),
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
    chunkSizeWarningLimit: 1000,
    // Ensure output assets are placed correctly
    outDir: 'dist',
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.svg', '**/*.gif']
})
