<template>
  <!-- <div class="container"> -->

  <!-- <div v-if="loginElement"> -->


  <nav class=" mx-0 px-4 justify-content-between navbar navbar-expand navbar-dark bg-success">

    <div class=" d-flex ">
      <a href="/" class="navbar-brand">Romberg</a>
    </div>


    <div class=" d-flex  ">
      <div class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/home" class="nav-link">
                <font-awesome-icon icon="home" /> Home
              </router-link>
            </li>
            <li v-if="showAdminBoard" class="nav-item">
              <router-link to="/admin" class="nav-link">Admin Board</router-link>
            </li>
            <li v-if="showModeratorBoard" class="nav-item">
              <router-link to="/mod" class="nav-link">Moderator Board</router-link>
            </li>
            <li class="nav-item">
              <router-link v-if="currentUser" to="/user" class="nav-link">User</router-link>
            </li>

            <div v-if="!currentUser" class="navbar-nav  ml-auto">
              <li class="nav-item">
                <router-link to="/register" class="nav-link">
                  <font-awesome-icon icon="user-plus" /> Sign Up
                </router-link>
              </li>
              <li class="nav-item">
                <router-link to="/login" class="nav-link">
                  <font-awesome-icon icon="sign-in-alt" /> Login
                </router-link>
              </li>
            </div>

      </div>

      
      <div v-if="currentUser" class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link to="/profile" class="nav-link">
            <font-awesome-icon icon="user" />
            {{ currentUser.username }}
          </router-link>
        </li>
        <li class="nav-item ">
          
          <a style="cursor:pointer;" class="nav-link " @click.prevent="logOut">
            <font-awesome-icon icon="sign-out-alt" /> LogOut
          </a>
          
        </li>
      </div>
      
    </div>
    </nav>
    
  <!-- </div> -->


  <!-- </div> -->
</template>

<script>


import { useAuthStore } from "../store"

export default {
  data() {
    return {
      loginElement: false,
      auth : useAuthStore()
    }
  },

  computed: {

    currentUser() {


      //return this.useAuthStore.state.user;
      return useAuthStore();
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