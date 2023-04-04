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
                <Sidebar @componentChange="eventFromSidebar"></Sidebar>
              </div>

              <!-- Content -->
              <div class="col parent">

                <keep-alive>
                  <component :is="componentName" ></component>
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
  import { ref } from "vue";
  //main components
  import Navbar from "./Navbar.vue";
  import Sidebar from "./Sidebar.vue";
  
  //secondary components
import Dashboard from "./sidebarComponents/Dashboard.vue";
import Classes  from "./sidebarComponents/Classes.vue"
import Documents  from "./sidebarComponents/Documents.vue"
import Students  from "./sidebarComponents/Students.vue"
import Teachers  from "./sidebarComponents/Teachers.vue"
import Workers  from "./sidebarComponents/Workers.vue"
import Calendar from "./sidebarComponents/Calendar.vue"
import Pensum  from "./sidebarComponents/Pensum.vue"
import Grades  from "./sidebarComponents/Grades.vue"

  export default {
    name: "Home",
    components:{
      Navbar,
      Sidebar,
      Dashboard,
      Classes,
      Documents,
      Students,
      Teachers,
      Workers,
      Calendar,
      Pensum,
      Grades
      
    },
    data() {
      return {
        content: "",
        // componentName: "Clases",

        

      };
    },
   setup(){
    let componentName  = ref("");

    const eventFromSidebar = (tagName)=>{
       componentName.value = tagName;
      
    }
    return {
      eventFromSidebar,
      componentName
      
    }
   },
  //  computed:{
     
  //  },
    // methods:{
    //   componentChanger(tagName){
    //     console.log(typeof(tagName));
    //     console.log(this.componentName);
    //     console.log(tagName);
    //     this.componentName = tagName;
    //     console.log(this.componentName);
    //   }
    // },
    created(){
      if(!localStorage.getItem("user")){
        this.$router.push("/login")
      }
    },
    mounted() { 
      
      console.log(this);
      console.log("blabla");
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