import { resolve } from "path"
import { defineConfig } from "vite"

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html'),
        services: resolve(__dirname, "services/index.html"),
        pricing: resolve(__dirname, "pricing/index.html"),
        retreats: resolve(__dirname, "gatherings/index.html")
      },
    },
  },
})
