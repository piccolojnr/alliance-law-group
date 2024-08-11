import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteFaviconsPlugin } from 'vite-plugin-favicon';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
  ViteFaviconsPlugin({
    logo: './src/assets/logo.png',
    favicons: {
      appName: 'Alliance Law Firm',
      appDescription: 'Alliance Law Firm',
      developerName: 'piccolo',
      developerURL: null, // prevent retrieving from the nearest package.json
      background: '#ddd',
      theme_color: '#333',
      icons: {
        coast: false,
        yandex: false
      }
    }
  })
  ],

})
