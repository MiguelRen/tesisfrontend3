<template>
  <div class="container-fluid p-0 m-0 vh-100 vw-100
  ">
    <div class="row h-25 m-0 p-0">
      <div class="col container-fluid m-0 p-0">
        <Navbar class="container-fluid"></Navbar>
      </div>
    </div>

    <div class="row h-75 m-0 p-0">
      <div class="col p-0 m-0">
        <Sidebar @componentChange="eventFromSidebar"></Sidebar>
      </div>

      <div class="col-10 p-0 m-0  container-fluid">
        <keep-alive class="container-fluid m-0 p-0">
          <div class=" p-0 m-0 container-fluid">
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
import Students from "./sidebarComponents/Students.vue";
import Employees from "./sidebarComponents/Employees.vue";
import Workers from "./sidebarComponents/Workers.vue";
import Calendar from "./sidebarComponents/Calendar.vue";
import Pensum from "./sidebarComponents/Pensum.vue";
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
    Students,
    Employees,
    Workers,
    Calendar,
    Pensum,
    Grades,
    Academics,
    EmployeesView,
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
.adjust {
  position: relative;
}
@media (max-with: 320px) {
  .positioning {
    position: relative;
    top: 100px;
  }
}
* {
  outline: 1px solid red;
}

</style>
