<template >
  <div role="navbar" class="row  navbar navbar-expand-md navbar-dark principal-color gradient-custom  text-center px-4 m-0  h-100 ">
   
    <!-- Brand-->
        <a href="/" class="col-md-3  navbar-brand fs-1  d-flex justify-content-end justify-content-sm-center">SimpleClass</a>


          
          <!--Date and Period-->
     <div class="col-md-3 d-none d-md-block text-center">
       <div class="  text-white ">
         Hoy {{ todayDateFunction }}
       </div>
       <div class=" text-white  ">
         <div class=" m-0 p-0 ">Periodo</div>
         <div class=" m-0 p-0">
           del {{ period.yearStart }} al {{ period.yearEnd }}
         </div>
       </div>
     </div>
   
        <!--User and Role-->
    <div class="col-md-2  text-center d-none d-md-block align-items-center p-1  text-white " >
      <h3 class=" text-center m-0 p-0">
          
          
            {{ currentUser }}
         
        </h3>
        <div class="text-center m-0 p-0 ">
        {{ currentRole }}
      </div>

      <div>
        <a  href="#!" >
          <img @click="clickedTag" id="Profile" src="../assets/gear-fill.svg">
        </a>
      </div>
    </div>

      <!--Search Form-->
  
      <div class="col-md-4 nav-item d-none d-sm-block container ">
        <div class="row w-100 justify-content-center ">
          
          <form class="col-10 text-center d-flex  " role="search">
            <input
              class="form-control mx-1"
              type="search"
              placeholder="Inserta una palabra"
              aria-label="Buscar"
            />
            <button class="btn btn-outline-light text-white " type="submit">
              Buscar
            </button>
          </form>
      
          <!--Exit -->
          <a style="cursor: pointer" class=" col-2 btn btn-outline-light  d-none d-md-block p-1" @click.prevent="logOut">
            Salir
            <!-- <font-awesome-icon icon="sign-out-alt" />  -->
          </a>
        </div>
        </div>
      
      </div>
</template>

<script>
import { useAuthStore } from "../store";
import { usePeriodStore } from "../store";
// import { useQuarterStore } from "../store";
import { date } from "yup";
import { ref, reactive, watch, onMounted } from "vue";
// import { storeToRefs } from "pinia";

import Profile from "./navbarComponents/Profile.vue"

export default {
  
  emits: ["componentChange"],

  data() {
  
  const period = usePeriodStore();
  const auth = useAuthStore();
  return{
      auth,
      period,
  }
  },

  setup(props, { emit }) {
    


    const tagName = ref("");
    const clickedTag = (event) => {

      tagName.value = event.target.id;

      emit('componentChange', tagName.value);
    }
    
    return {
     
     
      clickedTag,
      tagName,
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
          month = "Ene";
          break;
        case 1:
          month = "Feb";
          break;
        case 2:
          month = "Mar";
          break;
        case 3:
          month = "Abr";
          break;
        case 4:
          month = "May";
          break;
        case 5:
          month = "Jun";
          break;
        case 6:
          month = "Jul";
          break;
        case 7:
          month = "Ago";
          break;
        case 8:
          month = "Sep";
          break;
        case 9:
          month = "Oct";
          break;
        case 10:
          month = "Nov";
          break;
        case 11:
          month = "Dic";
          break;
      }
      const year = today.getFullYear();
      return (this.todayDate = `${day} ${month}  ${year}`);
    },

    currentUser() {
      const stringUser = localStorage.getItem("user");
      // console.log(stringUser);
      const jsonUser = JSON.parse(stringUser);
           
      const user = jsonUser.username;
      const firstLetterCap = user.charAt(0).toUpperCase();
      const remindLetters = user.slice(1);
      



      return firstLetterCap+remindLetters;
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
    this.currentUser;
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

.gradient-custom {
  /* fallback for old browsers */
  background: #3e3d3f;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(
    to right,
    rgba(46, 45, 47, 0.902),
    rgba(186, 190, 197, 0.9)
  );

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(
    to right,
    #0e3c62,  #1F6EAF
  );

}



</style>
