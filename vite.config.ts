import { defineConfig } from 'vite'
import { one } from 'one/vite'

// Use root path for production with custom domain
const base = '/'

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
    // Force assets to be placed in the assets directory
    assetsDir: 'assets'
  },
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.svg', '**/*.gif']
})
