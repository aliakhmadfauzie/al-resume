import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: process.env.DEPLOY_TARGET === "github" ? "/altechsolution_33/" : "/",
  build: {
    outDir: "dist",
    sourcemap: false,
    cssMinify: "esbuild",
    minify: "esbuild",
    target: "es2020",
    reportCompressedSize: false,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
        },
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});
