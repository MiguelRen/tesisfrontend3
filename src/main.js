
import { createApp } from 'vue'
import App from './App.vue'

import { createPinia } from "pinia"


import router from './router/index.js'

 
//bootstrap import
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/js/bootstrap.js'


//font-Awesome
import { FontAwesomeIcon } from './plugins/font-awesome';

//axios
import axios from 'axios'
import VueAxios from 'vue-axios'

//.use(VueAxios, axigos) 

// axios.defaults.baseURL = 'http://localhost:4500'
axios.defaults.baseURL = 'https://despliegue-backend-tesis.onrender.com'


createApp(App)
.use(createPinia())
.use(router)
.component("font-awesome-icon" , FontAwesomeIcon )
.mount('#app')
