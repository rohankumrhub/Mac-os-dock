export default {
  build: {
    rollupOptions: {
      external: ['/src/main.tsx'] // Add the module that needs to be externalized here
    }
  }
}
