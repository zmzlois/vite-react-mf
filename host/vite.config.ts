import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { withZephyr } from 'vite-plugin-zephyr';
import { type VitePluginFederationOptions } from '@originjs/vite-plugin-federation';
import svgr from 'vite-plugin-svgr';
import { PluginOption } from 'vite';
// https://vitejs.dev/config/

const mfConfig: VitePluginFederationOptions = {
  name: 'vite-host',
  filename: 'remoteEntry.js',
  remotes: {
    'vite-remote': 'http://localhost:5173/assets/remoteEntry.js',
    vite_webpack: {
      external: 'http://localhost:8080/remoteEntry.js',
      from: 'webpack',
      format: 'var',
      externalType: 'url',
    },
    vite_rspack: {
      external: 'http://localhost:8081/remoteEntry.js',
      from: 'webpack',
      format: 'var',
      externalType: 'url',
    },
  },
  shared: {
    //@ts-expect-error -- Test
    react: { requiredVersion: '^18.3.1', singleton: true },
    'react-dom': { requiredVersion: '^18.3.1', singleton: true },
  },
};

export default defineConfig({
  plugins: [react(), svgr(), withZephyr({ ...mfConfig }) as PluginOption],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: 'esbuild',
    cssCodeSplit: false,
  },
});
