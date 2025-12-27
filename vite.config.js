import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks: {
          vendorReact: ['react', 'react-dom'],
          motion: ['framer-motion'],
        }
      }
    }
  }
});
