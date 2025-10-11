import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const config: any = {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  };

  // Add proxy only in development mode
  if (mode === 'development') {
    config.server = {
      proxy: {
        '/api/chatbase': {
          target: 'https://api.chatbase.co',
          changeOrigin: true,
          rewrite: (path: string) => path.replace(/^\/api\/chatbase/, ''),
        },
      },
    };
  }

  return config;
})
