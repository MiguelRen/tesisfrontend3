import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vue from 'https://unpkg.com/vue@next'npm install




// https://vitejs.dev/config/
export default defineConfig({
  // build: {
  //   rollupOptions: {
  //     output: {
  //       format: 'es',
  //       plugins: [
  //         commonjs({
  //           include: []
  //         })
  //       ]
  //     }
  //   }
  // }
  // ,
  
  plugins: [vue(
    // {
    //   template: {
    //     compilerOptions: {
    //       // treat all tags with a dash as custom elements
    //       isCustomElement: (tag) => tag.includes('-Navbar')
    //     }
    //   }
    // }

  )],
  base: '/tesisfrontend3/'


 
})




