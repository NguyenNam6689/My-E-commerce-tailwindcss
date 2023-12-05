//* LIB
import { fileURLToPath } from 'node:url';

import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import viteCompression from 'vite-plugin-compression';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');

	return {
		define: {
			'process.env': env,
		},
		plugins: [
			react(),
			viteCompression({
				verbose: false,
				algorithm: 'gzip',
				ext: '.gz',
			}),
			viteCompression({
				verbose: true,
				algorithm: 'brotliCompress',
				ext: '.br',
			}),
			VitePWA({
				workbox: {
					globPatterns: ['**/*.{js,css,html}'],
				},
			}),
		],
		server: {
			// Frontend
			port: 9999,

			// Backend
			proxy: {
				// Proxy requests starting with /api/v1 to a different server
				'/api/admin/v1': 'http://localhost:5000',

				// Proxy requests starting with /api/v2 to a different server
				'/api/v2': 'http://localhost:5000/api/admin/v2',
			},
		},

		// Default
		base: '/',

		resolve: {
			alias: [
				{
					find: '@images',
					replacement: fileURLToPath(new URL('./src/assets', import.meta.url)),
				},
				{ find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
				{
					find: '@components', // Example alias for components directory
					replacement: fileURLToPath(new URL('./src/components', import.meta.url)),
				},
			],
		},

		optimizeDeps: {
			include: ['./src/*.tsx'], // Add commonly used dependencies here
		},
	};
});
