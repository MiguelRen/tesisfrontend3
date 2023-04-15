<template>

  <nav class=" mx-0 px-4 justify-content-between navbar navbar-expand navbar-dark bg-success">

    <div class=" d-flex ">
      <a href="/" class="navbar-brand">Romberg</a>
    </div>
    <div class="bg-primary">
      Fecha Actual
    </div>
    <div class="bg-secondary">
      Periodo Actual
    </div>
    <div class="bg-danger">
      Tipo Usuario
    </div>

    <div v-if="currentUser" class="navbar-nav ml-auto">
      <li class="nav-item">
        <router-link to="/profile" class="nav-link">
          <font-awesome-icon icon="user" />
          {{ currentUser}}
        </router-link>
      </li> 
      <li class="nav-item ">
        
        <a style="cursor:pointer;" class="nav-link " @click.prevent="logOut">
          <font-awesome-icon icon="sign-out-alt" /> Salir
        </a>
        
      </li>
    </div>

  </nav>    

</template>

<script>


import { useAuthStore } from "../store"

export default {
  data() {
    return {
      // loginElement: true,
      
      auth : useAuthStore()
    }
  },
  
  computed: {

    currentUser() {

      return localStorage.getItem("user");
      // return this.auth.user;
     
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_ADMIN');
      }

      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser['roles']) {
        return this.currentUser['roles'].includes('ROLE_MODERATOR');
      }

      return false;
    }
  },
  methods: {
    logOut() {
      // this.$store.dispatch('auth/logout');
      this.auth.logout();
      this.$router.push('/Login');
    }
  }
};

</script>

<style>
  /* .col2{
    justify-content:end;
  } */
</style>