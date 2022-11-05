
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

 


//bootstrap import
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
//.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
//.use(IconsPlugin)
 



//axios
import axios from 'axios'
import VueAxios from 'vue-axios'

//.use(VueAxios, axigos) 




createApp(App).mount('#app')
