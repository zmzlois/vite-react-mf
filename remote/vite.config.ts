import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { withZephyr } from 'vite-plugin-zephyr';
import { PluginOption } from 'vite';
const mfConfig = {
  name: 'vite-remote',
  filename: 'remoteEntry.js',
  exposes: {
    './Button': './src/Button',
  },
  shared: {
    react: { requiredVersion: '^18.3.1' },
    'react-dom': { requiredVersion: '^18.3.1' },
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), withZephyr({ ...mfConfig }) as PluginOption],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
});
