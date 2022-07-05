import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import liveReload from 'vite-plugin-live-reload';

export default defineConfig({
  server: {
    // required to load scripts from custom host
    cors: true,
    strictPort: true,
    port: 3000,
    hmr: {
      port: 3000,
      host: 'localhost',
      protocol: 'ws',
    },
  },
  resolve: {
    alias: {
        '@': './resources'
    }
  },
  plugins: [
    laravel([
      'resources/css/style.scss',
      'resources/js/site.js',
    ]),
    vue(),
      liveReload([
          `${__dirname}/**/*\.php`,
          `${__dirname}/**/*\.html`
      ])
  ],
});
