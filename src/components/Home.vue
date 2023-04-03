<template>
    <div class="container-fluid">

        <!--First Section Navbar -->
        <div class="row">
          <Navbar ></Navbar>
        </div>


        <!-- Second Section content -->
        <div class="row">
             
          <!-- SideBar -->
              <div class="col-md-2">
                <Sidebar></Sidebar>
              </div>

              <!-- Content -->
              <div class="col parent">

                <keep-alive>
                  <components :is="component"></components>
                </keep-alive>
                <!-- <Dashboard></Dashboard> -->
              </div>
        </div>
        

        <!-- <h3>{{ content }}</h3> -->
       
        
      <!-- <Navbar/> -->
    </div>
  </template>
  
  

  <script>
  // Importing the whole important libraries
  import UserService from "../services/user.services";
  import Navbar from "./Navbar.vue";
  import Sidebar from "./Sidebar.vue";
  import Dashboard from "./Dashboard.vue";

  export default {
    name: "Home",
    components:{
      Navbar,
      Sidebar,
      Dashboard,
      
    },
    data() {
      return {
        content: "",
        componentName: "",

        

      };
    },
    methods:{
      componentChanger(()=>
      this.componentName=this.component.Dashboard)
    },
    created(){
      if(!localStorage.getItem("user")){
        this.$router.push("/login")
      }
    },
    mounted() {
      UserService.getPublicContent().then(
        (response) => {
          
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
 
 
 <style scoped>
  .parent{
    max-height: 35%;
  }
</style>