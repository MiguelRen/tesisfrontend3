<template>
  <div class=" container-fluid  p-0  vh-100 w-100 
  ">
    <div class="row m-0 p-0   viewportHeight20 fixed-top zdown" >
      <div class="col-12  m-0 p-0   w-100 ">
        <Navbar @componentChange="eventFromNavbar" ></Navbar>
      </div>
    </div>

    <div class="row  mr-0 ml-0 mb-0 p-0 position-relative viewportHeight80 stickySidebar marginTop ">
      <div class=" col-md-2  col-sm-3 col-5    p-0 m-0   positioning h-100 sticky marginTop ">
        <Sidebar @componentChange="eventFromSidebar"></Sidebar>
      </div>

      <div class="  col-md-10  col-sm-9 col-7 offset-sm-3  ms-md-auto p-0 m-0   positioning h-100  ">
        <keep-alive class="container-fluid h-100 w-100 m-0 p-0 zdown">
          <div >
            <component :is="componentName"></component>
          </div>
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
import Classes from "./sidebarComponents/Classes.vue";
import Documents from "./sidebarComponents/Documents.vue";
import StudentsAdd from "./sidebarComponents/StudentsAdd.vue";
import StudentsView from "./sidebarComponents/StudentsView.vue";
import EmployeesAdd from "./sidebarComponents/EmployeesAdd.vue";
import AttendancesView from "./sidebarComponents/AttendancesView.vue";
import AttendancesAdd from "./sidebarComponents/AttendancesAdd.vue";
import Calendar from "./sidebarComponents/Calendar.vue";
// import Pensum from "./sidebarComponents/Pensum.vue";
import Grades from "./sidebarComponents/Grades.vue";
import Academics from "./sidebarComponents/Academics.vue";
import Profile from "./navbarComponents/Profile.vue";


// sidebar sub components
import EmployeesView from "../components/sidebarComponents/EmployeesView.vue";

import { get } from "lodash";
import { boolean } from "yup";
import { usePeriodStore } from "../store";
import { useSessionStore } from "../store";
//for watch
import { useAuthStore } from "../store";
import {watch} from "vue";



export default {
  name: "Home",
  components: {
    Navbar,
    Sidebar,
    Dashboard,
    Classes,
    Documents,
    StudentsAdd,
    StudentsView,
    EmployeesAdd,
    EmployeesView,
    Calendar,
    AttendancesView,
    AttendancesAdd,
    Grades,
    Academics,
    Profile,
    //pinia,
  },
  data() {

    return {
      content: "",
      period: usePeriodStore(),

      // period : academicPeriods
    };
  },
  setup() {
    const session = useSessionStore();


    const store = useAuthStore();





    let componentName = ref("Dashboard");

    const eventFromSidebar = (tagName) => {
      componentName.value = tagName;
    };
    const eventFromNavbar = (tagName) => {

      componentName.value = tagName;
    };

    return {
      eventFromSidebar,
      eventFromNavbar,
      componentName,
    };
  },


  methods: {

  },
  created() {

    if (!localStorage.getItem("user")) {
      this.$router.push("/login");
    }

  },

  mounted() {
    this.period.updateCurrent();
  },
};


</script>

<style scoped>

.viewportHeight20{
  height: 20vh;
}
.viewportHeight80{
  height: 80vh;
}

.marginTop{
  margin-top: 20vh;
}
.sticky{
  position: fixed;
  top: 20vh;
  z-index:10;
  clear: both;
} 

@media (max-width:576px){
  .positioning{
    position: abosolute;
    top: 9%;
    /* z-index: 99999; */
  }
  .zdown{
    z-index:-3;
  }
  .viewportHeight20{
    height: 10vh;
    margin-right: 0;
    margin-left: 0;
  }
  .viewportHeight80{
    height: 90vh;
    margin-right: 0;
    margin-left: 0;
  }
}



</style>./sidebarComponents/AttendancesView.vue
