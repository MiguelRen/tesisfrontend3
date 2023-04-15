<template>
  <div class="container-fluid">

    <div class="row  ">
      <Navbar></Navbar>
    </div>


    <div class="row  ">
      <div class="col-2">
        <Sidebar @componentChange="eventFromSidebar"></Sidebar>
      </div>

      <!-- content -->
      <div class="col-10 ">
        <keep-alive>
          <component :is="componentName"></component>
        </keep-alive>

      </div>
    </div>


  </div>
</template>
  
  

<script>
// Importing the whole important libraries
// import UserService from "../services/user.services";
import { ref } from "vue";
import  academicPeriods  from "../services/period.services.js"
//main components
import Navbar from "./Navbar.vue";
import Sidebar from "./Sidebar.vue";
 
//secondary components
import Dashboard from "./sidebarComponents/Dashboard.vue";
import Classes from "./sidebarComponents/Classes.vue"
import Documents from "./sidebarComponents/Documents.vue"
import Students from "./sidebarComponents/Students.vue"
import Teachers from "./sidebarComponents/Teachers.vue"
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
    Teachers,
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
    async getPeriod(){
      const result = await academicPeriods.findPeriod();
      console.log(result);
      return result;
    },
 
  created() {
    if (!localStorage.getItem("user")) {
      this.$router.push("/login")
    }
    // if(!getPeriod()){
    //   // console.log("theres is a problem");
    // }
  }
}
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
/* .parent {
  max-height: 35%;
} */
</style>