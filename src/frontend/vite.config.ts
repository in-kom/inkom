import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
		port: 5173,
		host: '0.0.0.0',
		hmr: {
			protocol: 'ws', // Use WebSocket
			host: '192.168.1.86', // IP address of the host machine
			port: 5173, // Port for HMR, should match the server port
		},
	  },
})
