<template>
    <div class="container">
      <header class="jumbotron">
      
        <h3>{{ content }}</h3>
      </header>
    </div>
  </template>
  
  <script>
  import UserService from "../services/user.services.js";
  
  export default {
    name: "User",
    data() {
      return {
        content: "",
      };
    },
    mounted() {
      UserService.getUserBoard().then(
        (response) => {
          console.log(response.data);
          this.content = response.data;
        },
        (error) => {
         
          this.content =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
        }
      );
    },
  };

  </script> 