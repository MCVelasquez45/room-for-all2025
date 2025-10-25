import { defineConfig } from 'vite';
import { resolve } from 'path';

// Configure Vite so the CI build always locates the HTML entry
export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  }
});
