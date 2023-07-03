<template class="container-fluid ">
  <nav class="container-fluid  navbar navbar-expand navbar-dark bg-success d-flex ">

    <div class="container-fluid">

      <a href="/" class="navbar-brand">SimpleClass</a>
    </div>



    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4 text-white d-flex align-items-center">
          {{ todayDateFunction }}
        </div>
        <div class="col-sm-12 col-md-6 col-lg-4 text-white">
          {{quarter.getQuarter}}
        </div>
        <div class="col-sm-12 col-md-12 col-lg-4 ">
          Tipo Usuario
        </div>

      </div>
    </div>

    <div class="container-fluid p-0">
      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link px-0">
            <font-awesome-icon icon="user" />
            {{ currentUser }}
          </router-link>
        </li>
        <li class="nav-item ">

          <a style="cursor:pointer" class="nav-link px-0 " @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" />
          </a>
 
        </li>
      </div>

    </div>

  </nav>
</template>

<script>


import { get } from "lodash";
import { useAuthStore } from "../store"
import { usePeriodStore } from "../store";
import { useQuarterStore } from "../store";
import { date } from "yup";
import { ref ,reactive, watch, onMounted } from "vue";

export default{
  setup() {
    // const todayDate = watch("");
    // const currentPeriod = watch("");
    const computedPeriod= ref("");
   
    const quarter = useQuarterStore();
    const period = usePeriodStore();
    return {
      // loginElement: true,
      // todayDate,
      // currentPeriod,
        computedPeriod,
       auth: useAuthStore(),
       period,
       quarter

    }
  },
  
  computed: {
   
    todayDateFunction() {
      return this.todayDate = this.showTodayDate();
    },
   
    currentUser() {
      
      return localStorage.getItem("user");
      // return this.auth.user;

    },
    // showAdminBoard() {
    //   if (this.currentUser && this.currentUser['roles']) {
    //     return this.currentUser['roles'].includes('ROLE_ADMIN');
    //   }

    //   return false;
    // },
    // showModeratorBoard() {
    //   if (this.currentUser && this.currentUser['roles']) {
    //     return this.currentUser['roles'].includes('ROLE_MODERATOR');
    //   }
    
    //   return false;
    // }
  },
  methods: {
    logOut() {
      // this.$store.dispatch('auth/logout');
      this.auth.logout();
      this.$router.push('/Login');
    },
    showTodayDate() {
      return new Date().toLocaleDateString();
    },

    
  },
  mounted(){
    
    
    // alert("navbar")
    this.quarter.updQuarter();
    
  }

};

</script>

<style scoped>
/* .col2{
    justify-content:end;
  } */
</style>