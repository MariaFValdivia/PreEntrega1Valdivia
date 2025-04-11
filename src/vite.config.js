import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: {
    jsx: 'automatic', // Habilita el soporte para JSX
  },
});