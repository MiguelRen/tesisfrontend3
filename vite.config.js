import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  
  plugins: [vue()],
// <<<<<<< HEAD
  // base:'/tesisfrontend3/',
  base:'',  
// =======
  // build:{
  //   rollupOptions:{
  //     output:{
  //       entryFileNames:`[name].${"3.2.2"}.js`,
  //       chunkFileNames:`[name].${"3.2.2"}.js`,
  //       assetFileNames:`[name].${"3.2.2"}.exit`,
  //     }
    // }
  // }
// >>>>>>> main
 
})