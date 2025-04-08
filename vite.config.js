import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";
import viteImagemin from "vite-plugin-imagemin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
    viteImagemin({ // Image optimization 
      gifsicle: { optimizationLevel: 3 },
      mozjpeg: { quality: 80 },
      optipng: { optimizationLevel: 5 },
      webp: { quality: 80 },
      svgo: {
        plugins: [
          { name: "removeViewBox", active: false },
          { name: "removeEmptyAttrs", active: false }
        ]
      }
    })
  ],

  // Core Configuration
  base: "/",
  publicDir: "public",

  // Development Server
  server: {
    port: 3000,
    host: true, // Expose to network
    open: true, // Auto-open browser
    strictPort: true,
    historyApiFallback: true,
  },

  // Build Settings
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
          redux: ["@reduxjs/toolkit", "react-redux"],
          charts: ["recharts"],
          formik: ["formik", "yup"]
        }
      }
    }
  }
});


