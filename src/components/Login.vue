<template >
  <div class="fondo " >

    <div class="container-fluid w-100 p-0 m-p h-100 d-flex justify-content-center align-items-center">

      <div class=" row h-75  m-0  px-12 d-flex justify-content-center align-items-center ">

        <div class=" col-sm h-auto text-center ">
          <h1 class="text-light display-1 font-weight-bold deepshd">SimpleClass</h1>
          <q class="text-light cursive"><i>Las naciones marchan hacia el término de su grandeza, con el mismo paso en que camina
              la
              educación</i></q>
        </div>

        <div class=" col-sm  h-75 card card-container w-75 p-0 opa bg-opacity-50  ">

          <Form @submit="handleLogin" :validation-schema="schema" class=" container-fluid px-4 text-center mt-2 ">
            <div class="form-row mt-4 ">
              <label for="username" class="h5">Usuario</label>
              <Field name="username" type="text" class="form-control opa mt-2-sm" />
              <ErrorMessage name="username" class="error-feedback  m-0 p-0 text-danger" />
            </div>
            <div class="form-group mt-3">
              <label for="password" class="h5">Contraseña</label>
              <Field name="password" type="password"  id="theField" class="form-control opa mt-2-sm"/>
              <!-- <span @click="showPassword" class="fa fa-fw fa-eye password-icon show-password eye "></span> -->

              <ErrorMessage name="password" class="error-feedback m-0 p-0 text-danger" />
            </div>


            <div class="form-group mt-3 mt-lg-5">
              <button class="btn btn-primary btn-block" :disabled="loading">
                <span v-show="loading" class="spinner-border spinner-border-sm "></span>
                <span>Ingresar</span>
              </button>
            </div>
            <div class="mt-2 ">
              <router-link to="/register" class="" style="text-decoration:none">
                Registrarse
              </router-link>
            </div>


            <div class="form-group ">
              <div v-if="message" class="alert b-4" :class="succesfull ? 'alert-success' : 'alert-danger' " role="alert">
                {{ message }}
              </div>
            </div>
          </Form>
        </div>

      </div>
    </div>
  </div>
</template>
  
<script>
import { useAuthStore } from "../store";
import {useSessionStore} from "../store"
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";


export default {
  name: "Login",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup.string().required("Usuario requerido!"),
      password: yup.string().required("Contraseña requerida!"),
    });

    return {
      loading: false,
      succesfull: false,
      message: "",
      schema,
      auth: useAuthStore(),
      session: useSessionStore(),

    };
  },


  methods: {
    showPassword(){
      const type = document.getElementById('theField').type; 
      
      if( type == 'text'){
        
        console.log(type.value);
        document.getElementById('theField').type =  'password';
      }
      else{
        document.getElementById('theField').type = 'text';
      }
    }
    ,
    handleLogin(user) {

      this.loading = true;
      this.session.login(user)
        .then((resolve)=>{
          console.log(resolve)
        });
      this.auth.login(user)
        .then((resolve) => {   
          
          this.message= "Autenticado!";
          this.succesfull = true;
          //  console.log(typeof(resolve));
          setTimeout(() =>{
            this.$router.push("/Home");
          }, 500);

        })
        .catch((error) => {

          this.loading = false;
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            (error.message) ||
            (error.toString());

        }
        )


    }
  }
}
</script>

<style scoped>
.fondo {
  margin: 0;
  padding: 0;
  position: absolute;
  object-fit: cover;
  background-image: url(../assets/keyboardBackground.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 0;
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
  overflow:hiden;
}
 
.opa {
  background-color: rgba(245, 245, 245, 0.8) !important;
}
.deepshd{
  color: #e0dfdc;
  /* background-color: #333; */
  letter-spacing:  .1em;
  text-shadow: 0 -1px 0 #fff, 0 1px 0 #2e2e2e, 0 2px 0#2c2c2c, 0 3px 0 #2a2a2a, 0 4px 0 #282828, 0 5px 0 #262626,0 6px 0 #242424, 0 7px 0 #222, 0 8px 0 #202020, 0 9px 0 #1e1e1e, 0 10px 0 #1c1c1c,0 22px 30px rgba(0,0,0,0.9);
}
.cursive{
  text-shadow :  1px 1px 0 #1c1c1c,0 22px 30px rgba(0,0,0,0.9);
}
.eye{
  float: right;
  position: relative;
  margin: -25px 10px 0 0;
  cursor: pointer;
  color: #B0B1B1;
}
</style>

  