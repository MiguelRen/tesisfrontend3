<template>
  <nav class="navbar  navbar-expand-sm   m-0 p-0  position-relative  ">
    <button class="navbar-toggler nav-link relative border-light mx-1 " type="button" data-bs-toggle="collapse" data-bs-target="#opciones"
      name="button">
      <span class="navbar-toggler-icon " >
      </span>
    </button>


    <div class="collapse navbar-collapse h-100 w-100 m-0 p-0  position-absolute " id="opciones">
      <div class="  border-end bg-white responsiveHeight h-100 w-100 m-0 p-0" id="sidebar-wrapper">
        <div class=" container-fluid d-flex h-100 w-100 p-0" id="wrapper">
          <div class=" list-group list-group-flush w-100 h-100 text-center  bgcolorgray600">
            
            <a class="list-group-item list-group-item-action  p-2" href="#!" id="Dashboard"
              @click="clickedTag">Principal</a>
            <template v-if="period.yearStart">

              <a class="list-group-item list-group-item-action   p-2" href="#!">

                <Dropdown>
                  Estudiantes
                  <template slot="toggler">
                    <button>Toggler</button>
                  </template>

                  <DropdownContent>
                    <ul>
                      <li> <a href="#!" class="text-decoration-none" id="StudentsView" @click="clickedTag">Ver Estudiantes</a> </li>
                      <li> <a href="#!" class="text-decoration-none" id="StudentsAdd" @click="clickedTag">Gestionar Estudiantes</a> </li>
                    </ul>
                  </DropdownContent>
                </Dropdown>


              </a>
              <a class="list-group-item list-group-item-action  p-2 componentWrapper" href="#!"
                id="Employees">

                <Dropdown>
                  Personal
                  <template slot="toggler">
                    <button>Toggler</button>
                  </template>

                  <DropdownContent>
                    <ul>
                      <li> <a href="#!" class="text-decoration-none" id="EmployeesView" @click="clickedTag">Ver Empleados</a> </li>
                      <li> <a href="#!" class="text-decoration-none" id="EmployeesAdd" @click="clickedTag">Gestionar Empleados</a> </li>
                    </ul>
                  </DropdownContent>
                </Dropdown>

                <!-- <div name="personalWrapper" class="menuWrapper">
                </div> -->


              </a>
              <!-- <a class="list-group-item list-group-item-action text-light p-2" href="#!" id="Workers"
                  @click="clickedTag">Obreros</a> -->
              <a class="list-group-item list-group-item-action  p-2" href="#!" id="Documents"
                @click="clickedTag">Documentos</a>
              <!-- <a class="list-group-item list-group-item-action text-light p-2" href="#!" id="Classes"
                @click="clickedTag">Clases</a> -->
              <a class="list-group-item list-group-item-action  p-2" href="#!" id="Calendar"
                @click="clickedTag">Calendario</a>
              <!-- <a class="list-group-item list-group-item-action text-light p-2" href="#!" id="Pensum"
                @click="clickedTag">Pensum</a> -->
              <a class="list-group-item list-group-item-action  p-2" href="#!" id="Attendances"
                @click="clickedTag">
                <Dropdown>
                  Asistencias
                  <template slot="toggler">
                    <button>Toggler</button>
                  </template>

                  <DropdownContent>
                    <ul>
                      <li> <a href="#!" class="text-decoration-none" id="AttendancesView" @click="clickedTag">Ver Asistencias</a> </li>
                      <li> <a href="#!" class="text-decoration-none" id="AttendancesAdd" @click="clickedTag">Gestionar Asistencias</a> </li>
                    </ul>
                  </DropdownContent>
                </Dropdown>
              </a>
                <a class="list-group-item list-group-item-action  p-2" href="#!" id="Grades"
                @click="clickedTag">Notas</a>
              <a class="list-group-item list-group-item-action  p-2" href="#!" id="Curses"
                @click="clickedTag">Cursos</a>
            </template>
            <a class="list-group-item list-group-item-action  p-2" href="#!" id="Academics"
              @click="clickedTag">Académicos{{ auth.getRole }}</a>
            <a v-if="currentRole == 'ADMINISTRADOR'"
              class="list-group-item list-group-item-action  p-2" href="#!" id="Records"
              @click="clickedTag">Registros </a>

              <a class="list-group-item list-group-item-action  p-2 customText   d-md-none " href="#!">
              <div class="">

                {{ todayDateFunction }}

              </div>
              <div class="">
                <div>
                  Periodo
                </div>
                <div>
                  Del{{ period.yearStart}} Al {{ period.yearEnd }}
                </div>
              </div>
              <div class="">
                {{ currentUser }}
              </div>
              <div class="">
                {{ currentRole }}
              </div>


            </a>

            <a style="cursor:pointer" class="nav-link p-2 m-0 list-group-item list-group-item-action text-light 
              customText   d-md-none " @click.prevent="logOut">
            Salir 
          </a>
          </div>
        </div>

      </div>
    </div>
  </nav>
</template>

<script>
import { useQuarterStore } from '../store';
import { onMounted, ref } from 'vue';
import { useAuthStore } from '../store';

import Dropdown from '../components/sidebarComponents/Dropdown.vue' 
import DropdownContent from '../components/sidebarComponents/DropdownContent.vue'
import { usePeriodStore } from '../store';


export default {

  components: {
    Dropdown,
    DropdownContent,
  },

  emits: ["componentChange"],

  setup(props, { emit }) {
    const showSidebar = ref(false);

    const toggleSidebar = () => {
      showSidebar.value = !showSidebar.value;
    };


    const tagName = ref("");
    const clickedTag = (event) => {

      tagName.value = event.target.id;

      emit('componentChange', tagName.value);
    }
    const quarter = useQuarterStore();
    const auth = useAuthStore();
    const showList = ref(false);
    const period = usePeriodStore();
    // console.log(period.yearStart);
    // const currentRole =  () => {
    //   try {
    //     const role =  auth.getRole();
    //     return role;

    //   } catch (error) {
    //     console.log(error);
    //     return error
    //   }
    // }
    return {
      quarter,
      showSidebar,
      toggleSidebar,
      tagName,
      clickedTag,
      auth,
      showList,
      period ,
      // currentRole

    };
  },
  computed: {
    currentUser() {

      const stringUser = localStorage.getItem("user");

      const jsonUser = JSON.parse(stringUser);

      const user = jsonUser.username;

      return user;
      // return user.replace(/["]+/g,'');
      // return this.auth.user;

    },



    todayDateFunction() {
      return this.todayDate = this.showTodayDate();
    },
    currentRole() {

      const stringUserRole = localStorage.getItem("user");
      const jsonUserRole = JSON.parse(stringUserRole);
      const userRole = jsonUserRole.roles;
      //  console.log(userRole[2]);
      if (userRole) {
        for (let i = userRole.length - 1; i >= 0; i--) {
          if (userRole[i] === "ADMINISTRADOR") {
            return userRole[i];
          }
        }
        for (let i = userRole.length - 1; i >= 0; i--) {
          if (userRole[i] === "MODERADOR") {
            return userRole[i];
          } else {
            return userRole[i];
          }


        }
      }
    }
  },
  methods: {
    showTodayDate() {
      return new Date().toLocaleDateString();
    },
    //   personalList() {
    //     console.log(this);
    //     this.showList = !this.showList;
    //   }
    logOut() {
      // this.$store.dispatch('auth/logout');
      this.auth.logout();
      this.$router.push('/Login');
    },

  }
}

</script>

<style scoped>
/* .componentWrapper {
  position: relative;
} */

/* .menuWrapper {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 9999;
  background: white;
} */

.relative {
  position: relative;
  bottom: 58px;
  left:25px
  
}


.customText {
  font-size: 12px;
}
/* .bgcolorgray600{
  background-color:#6c747c !important;

} */

a{
  background: #424143;
  color:white;
}
/* a::active{
  background-color:white !important;
  color:black  !important;
} */

/* @media (min-width:768px){
  .responsiveHeight{
    margin-top: 50px;
    
  }
} */
/* *{
  outline : 1px solid greenyellow;
} */

</style>