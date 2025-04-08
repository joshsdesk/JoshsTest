import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3003, // ✅ must be different from backend
    host: '127.0.0.1',
    open: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3001', // ✅ use 127.0.0.1, not localhost
        secure: false,
        changeOrigin: true,
      },
    },
  },
});
