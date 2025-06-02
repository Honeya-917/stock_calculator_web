import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/stock_calculator_web/',
  plugins: [react()],
});
