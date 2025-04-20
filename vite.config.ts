import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import type { UserConfigExport } from 'vitest/config';

const config: UserConfigExport = {
  base: '', // 🔥 Esto debe estar aquí
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/vitest.setup.ts',
  },
};

export default defineConfig(config);
