import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Ensure production bundles do not include source maps
    sourcemap: false,
    // Minify and drop console/debugger to make reverse-engineering harder
    minify: 'esbuild',
    esbuild: {
      drop: ['console', 'debugger']
    }
  }
});