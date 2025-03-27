/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    globals: true,
    mockReset: true,
  },
  resolve: {
    alias: {
      // Optionnel : pour t’assurer que les imports relatifs marchent
      '@': '/src',
    },
  },
});
