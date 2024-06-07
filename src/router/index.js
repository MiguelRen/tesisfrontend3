import { createWebHistory, createRouter } from "vue-router";
import Home from "../components/Home.vue";
import Login from "../components/Login.vue";
import Register from "../components/Register.vue";


//import BoardUser from "../components/BoardUser.vue"

import NotFound from "../components/NotFound.vue";

// const roles = {
//   ADMINISTRADOR: "ADMINISTRADOR",
//   MODERADOR: "MODERADOR",
//   USUARIO: 'USUARIO'
// }
const routes = [
  {
    path: "/",
    name: "home",
    component: Login,
  },
  {
    path: "/home",
    component: Home,
    // meta:{
    //   auth:[roles.USUARIO]
    // }
  },
  {
    path: "/login",
    component: Login,
  },
  {
    path: "/register",
    component: Register,
  },
 
 

  {
    path:"/:pathMatch(.*)*",
    name: "notFound",
    component : NotFound
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/home'];
  const authRequired = !publicPages.includes(to.path);
  
 
  const loggedIn = localStorage.getItem('user');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else{
    next();
  }
});

export default router;


/* 
import Login from  "./../views/Login.vue"
import Dashboard from "./../views/Dashboard.vue"
import { createRouter , createWebHistory } from "vue-router"


 const Login = {template: '<div> Login </div>'};


const routes = [
    {path: '/', component: Login},
    {path: '/Dashboard', component: Dashboard}

]

const router = createRouter({
    history : createWebHistory(),
    routes
});

export default router */



// import { storeToRefs } from "pinia"
// import authStore from "../store/authStore"
// const auth = authStore()
// const {usuarioLogeado} = storeToRefs(auth)


/**
 *
 * router.beforeEach((to, from, next) => {
 *  const {auth} = to.meta 
 *  if(auth 
 *  && auth.some((verifique)=> !usuarioLogeado.usuer.persmisos.includes(verifique) )){
 *  next("login")
 * }
 * next()
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */