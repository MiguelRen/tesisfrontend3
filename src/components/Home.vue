<template>
  <div class=" container-fluid  p-0 m-0 vh-100 w-100
  ">
    <div class="row m-0 p-0   viewportHeight20" >
      <div class="col-12  m-0 p-0   w-100 ">
        <Navbar ></Navbar>
      </div>
    </div>

    <div class="row  m-0 p-0 position-relative viewportHeight80">
      <div class=" col-md-2  col-sm-3 col-5   p-0 m-0   positioning h-100  z-1">
        <Sidebar @componentChange="eventFromSidebar"></Sidebar>
      </div>

      <div class=" col-md-10  col-sm-9 p-0 m-0  positioning h-100 ">
        <keep-alive class="container-fluid h-100 w-100 m-0 p-0">
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


// sidebar sub components
import EmployeesView from "../components/sidebarComponents/EmployeesView.vue";

import { get } from "lodash";
import { boolean } from "yup";
import { usePeriodStore } from "../store";

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
  },
  data() {
    return {
      content: "",
      period: usePeriodStore(),
      // period : academicPeriods
    };
  },
  setup() {
    let componentName = ref("Dashboard");

    const eventFromSidebar = (tagName) => {
      componentName.value = tagName;
    };
    return {
      eventFromSidebar,
      componentName,
    };
  },
  //  computed:{

  //  },
  methods: {
    //  async getPeriod(){
    //    const result = await periodServices.findPeriod();
    //    console.log(result);
    //    return result;
    //  }
  },
  created() {
    if (!localStorage.getItem("user")) {
      this.$router.push("/login");
    }
    // else if(!this.getPeriod()){
    //   console.log("theres is a problem");
    // }
  },

  mounted() {
    this.period.updateCurrent();
  },
};

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

.viewportHeight20{
  height: 20vh;
}
.viewportHeight80{
  height: 80vh;
}

@media (max-width:576px){
  .positioning{
    position: absolute;
  }
  .viewportHeight20{
    height: 10vh
  }
  .viewportHeight80{
    height: 90vh
  }
}


 /** {
  border : 1px solid red;
  }
  */
 

</style>./sidebarComponents/AttendancesView.vue
