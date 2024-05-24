import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginRequire from "vite-plugin-require";
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginRequire.default(),
    svgr(),
  ],
  assetsInclude: ['**/*.jpg'],
  base: '/Portfolio/'
})
