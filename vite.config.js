import { defineConfig } from 'vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    base: 'api',
    resolve: {
        alias: {
            '@' : path.resolve(__dirname, './src'),
            '@assets' : path.resolve(__dirname, './src/assets'),
            '@core' : path.resolve(__dirname, './src/core'),
            '@img' : path.resolve(__dirname, './public/img'),
        },
    },
});