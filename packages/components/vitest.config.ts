import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    // 指定 setup 文件，用于扩展 expect
    setupFiles: './vitest.setup.ts', 
  },
});