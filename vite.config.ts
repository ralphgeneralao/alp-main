/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';
import fs from 'node:fs';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: 'main.alearningplace.local',
    port: 443,
    https: {
      key: fs.readFileSync('./server.key'),
      cert: fs.readFileSync('./server.crt'),
    },
  },
  plugins: [react(), svgrPlugin()],
  build: {
    sourcemap: true,
    outDir: 'build',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      reporter: ['text', 'html'],
      exclude: ['node_modules/', 'src/setupTests.ts'],
      provider: 'v8',
    },
  },
});
