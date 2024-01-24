<template class="container-fluid col-md-12">
  <nav
    class="container-fluid navbar navbar-expand navbar-dark principal-color d-flex"
  >
    <div class="container-fluid d-flex justify-content-center col-md-3">
      <h1>
        <a href="/" class="navbar-brand fs-1">SimpleClass</a>
      </h1>
    </div>

    <div
      class="container-fluid d-flex justify-content-between d-none d-md-block m-0 p-0 col-md-3"
    >
      <div class="row d-flex justify-content-between align-items-center">
        <div class="text-white d-flex align-items-center">
          {{ todayDateFunction }}
        </div>
        <div
          
          class="col-sm-12 col-md-6 col-lg-4 text-white"
        >
          <div class="text-center m-0 p-0">Periodo</div>
        <div class="text-center m-0 p-0">{{ period.yearStart }}- {{ period.yearEnd  }}</div> 
        <!-- <div class="text-center m-0 p-0">{{ period.yearEnd }}</div>  -->
        </div>
        <!-- <div v-else>No Hay Periodos Registrados</div> -->
      </div>
    </div>

    <div class="container-fluid d-none d-md-block col-md-3">
      <div
        class="container-fluid navbar-nav ml-auto d-flex justify-content-around m-0 p-0"
      >
        <li class="nav-item m-0 p-0">
          <router-link to="" class="nav-link px-0">
            <!-- <font-awesome-icon icon="user" /> -->
            {{ currentUser }}
          </router-link>
        </li>

        <li class="container-fluid m-0">
          <form class="d-flex col-3" role="search">
            <input
              class="form-control"
              type="search"
              placeholder="Buscar"
              aria-label="Buscar"
            />
            <button class="btn btn-outline-success text-white" type="submit">
              Buscar
            </button>
          </form>
        </li>

        <li class="nav-item">
          <a style="cursor: pointer" class="nav-link" @click.prevent="logOut">
            Salir
            <!-- <font-awesome-icon icon="sign-out-alt" />  -->
          </a>
        </li>
        <div
          class="col-sm-12 col-md-12 col-lg-4 text-white d-flex align-items-center"
        >
          {{ currentRole }}
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { useAuthStore } from "../store";
import { usePeriodStore } from "../store";
// import { useQuarterStore } from "../store";
import { date } from "yup";
import { ref, reactive, watch, onMounted } from "vue";
// import { storeToRefs } from "pinia";

export default {
  data() {
    // const todayDate = watch("");
    // const currentPeriod = watch("");
    // const computedPeriod = ref("");

    // const quarter = useQuarterStore();
    const period = usePeriodStore();
    const auth = useAuthStore();

    return {
      // loginElement: true,
      // todayDate,
      // currentPeriod,
      // computedPeriod,
      auth,
      period,
      // quarter,
    };
  },

  computed: {
    todayDateFunction() {
      const today = new Date();

      const day = today.getDate();
      let month = today.getMonth();
      switch (month) {
        case 0:
          month = "Enero";
          break;
        case 1:
          month = "Febrero";
          break;
        case 2:
          month = "Marzo";
          break;
        case 3:
          month = "Abril";
          break;
        case 4:
          month = "Mayo";
          break;
        case 5:
          month = "Junio";
          break;
        case 6:
          month = "Julio";
          break;
        case 7:
          month = "Agosto";
          break;
        case 8:
          month = "Septiembre";
          break;
        case 9:
          month = "Octubre";
          break;
        case 10:
          month = "Noviembre";
          break;
        case 11:
          month = "Diciembre";
          break;
      }
      const year = today.getFullYear();
      return (this.todayDate = `${day} de ${month} de ${year}`);
    },

    currentUser() {
      const stringUser = localStorage.getItem("user");
      //console.log(stringUser);
      const jsonUser = JSON.parse(stringUser);

      const user = jsonUser.username;

      return user;
      // return user.replace(/["]+/g,'');
      // return this.auth.user;
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
    },
  },
  // showAdminBoard() {
  //   if (this.currentUser && this.currentUser['roles']) {
  //     return this.currentUser['roles'].includes('ROLE_ADMIN');
  //   }

  //   return false;
  // },
  // showModeratorBoard() {
  //   if (this.currentUser && this.currentUser['roles']) {
  //     return this.currentUser['roles'].includes('ROLE_MODERATOR');
  //   }

  //   return false;
  // }

  methods: {
    logOut() {
      // this.$store.dispatch('auth/logout');
      this.auth.logout();
      this.$router.push("/Login");
    },
    showTodayDate() {
      return new Date().toLocaleDateString();
    },
  },
  mounted() {
    // console.log(this);
    this.currentRole;
    // this.currentRole();
    // alert("navbar")
    // this.quarter.updQuarter();
  },
};
</script>

<style scoped>
.principal-color {
  background-color: #666f88;
}
/* .col2{
    justify-content:end;
  } */
</style>
