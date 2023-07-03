<template class="container-fluid m-0 p-0">
  <div class="container-fluid m-0 p-0">

    <div class=" row  container-fluid m-0 p-0 ">
      <Navbar class="container-fluid "></Navbar>
    </div>


    <div class="row container-fluid p-0 m-0">
      <div class="col-2 p-0">
        <Sidebar @componentChange="eventFromSidebar"></Sidebar>
      </div>

      <!-- content -->
      <div class="col-10 p-0 m-0">
        <keep-alive class="container-fluid p-0">
          <component :is="componentName" class="container-fluid"></component>
        </keep-alive>

      </div>
    </div>


  </div>
</template>
  
  

<script>
// Importing the whole important libraries
// import UserService from "../services/user.services";
import { ref } from "vue";
// import  periodServices  from "../services/period.services.js"
//main components
import Navbar from "./Navbar.vue";
import Sidebar from "./Sidebar.vue";
 
//secondary components
import Dashboard from "./sidebarComponents/Dashboard.vue";
import Classes from "./sidebarComponents/Classes.vue"
import Documents from "./sidebarComponents/Documents.vue"
import Students from "./sidebarComponents/Students.vue"
import Employees from "./sidebarComponents/Employees.vue"
import Workers from "./sidebarComponents/Workers.vue"
import Calendar from "./sidebarComponents/Calendar.vue"
import Pensum from "./sidebarComponents/Pensum.vue"
import Grades from "./sidebarComponents/Grades.vue"
import Academics from "./sidebarComponents/Academics.vue";
import { get } from "lodash";
import { boolean } from "yup";

export default {
  name: "Home",
  components: {
    Navbar,
    Sidebar,
    Dashboard,
    Classes,
    Documents,
    Students,
    Employees,
    Workers,
    Calendar,
    Pensum,
    Grades,
    Academics

  }, 
  data() {
    return {
      content: "",
      // period : academicPeriods

    };
  },
  setup() {
    let componentName = ref("Dashboard");

    const eventFromSidebar = (tagName) => {
      componentName.value = tagName;

    }
    return {
      eventFromSidebar,
      componentName

    }
  },
  //  computed:{

  //  },
  methods:{
  //  async getPeriod(){
     
  //    const result = await periodServices.findPeriod();
  //    console.log(result);
  //    return result;
  //  }
},
  created() {
    if (!localStorage.getItem("user")) {
      this.$router.push("/login")
    }
    // else if(!this.getPeriod()){
    //   console.log("theres is a problem");
    // }
    
  },


}
  // mounted() {

  //   UserService.getPublicContent().then(
  //     (response) => {

  //       this.content = response.data;
  //     },
  //     (error) => {

  //       this.content =
  //         (error.response &&
  //           error.response.data &&
  //           error.response.data.message) ||
  //         error.message ||
  //         error.toString();
  //     }
  //   );
  // },

</script>
 
 
<style scoped>
/* *{

 margin:0;
  padding: 0; 
} */
</style>