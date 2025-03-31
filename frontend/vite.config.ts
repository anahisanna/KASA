import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { configDefaults } from 'vitest/config'; // ✅ Importa los tipos
import type { UserConfigExport } from 'vitest/config'; // ✅ Asegura tipos válidos

const config: UserConfigExport = {
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/vitest.setup.ts'

  },
};

export default defineConfig(config);
