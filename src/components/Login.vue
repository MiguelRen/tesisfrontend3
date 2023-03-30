<template >
  
  <div class="fondo col-md-12 d-flex justify-content-center align-items-center">

          <div class="col-md-4 d-flex align-items-center mx-auto text-center justify-content-center">
            <div class=" card card-container opa bg-opacity-25 d-flex justify-content-center align-items-center " >
              <img
                id="profile-img"
                src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                class="profile-img-card opa"
              />
              <Form @submit="handleLogin"  :validation-schema="schema" >
                <div class="form-group">
                  <label for="username" class="">Usuario</label>
                  <Field name="username" type="text" class="form-control opa " />
                  <ErrorMessage name="username" class="error-feedback" />
                </div>
                <div class="form-group ">
                  <label for="password">Contraseña</label>
                  <Field name="password" type="password" class="form-control opa" />
                  <ErrorMessage name="password" class="error-feedback" />
                </div>

              
                <div class="form-group">
                  <button class="btn btn-primary btn-block" :disabled="loading">
                    <span
                      v-show="loading"
                      class="spinner-border spinner-border-sm"
                    ></span>
                    <span>Ingresar</span>
                  </button>
                </div>
        
            <div class="form-group">
              <div v-if="message" class="alert alert-danger" role="alert">
                {{ message }}
              </div>
            </div>
          </Form>
        </div>
      </div>

    </div>
  </template>
  
  <script>
  import { useAuthStore } from "../store";
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
        username: yup.string().required("Nombre de Usuario es requerido!"),
        password: yup.string().required("La Contraseña es requerida!"),
      });
  
      return {
        loading: false,
        message: "",
        schema,
        auth : useAuthStore()

      };
    },
    computed: {
      loggedIn() {
        const auth = useAuthStore();
        
        return auth.status.loggedIn;
      },
    },
    beforeCreate(){
      document.body.className  = 'login';
    },
    created() {
      if (this.loggedIn) {
        this.$router.push("/profile");
      }
    },
    methods: {
      handleLogin(user){
        
        this.loading = true;
        this.auth.login(user)
        .then((resolve) => {
          
     
              this.$router.push("/Home");
             
            })
         .catch((error) => {
          
          this.loading = false;
          this.message =
                (error.response &&
                error.response.data &&
                error.response.data.message) ||
                (error.message )||
                (error.toString());
                
            }
            )
       
       
    }
  }
}
  </script>

  <style scoped>

.fondo{
  margin: 0;
  padding: 0;
  position:absolute;
  object-fit: cover;
    background-image: url(../assets/fondo.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 0 0;
    box-sizing: border-box;
    height: 100vh;
    width: 100%;
  }
  .opa { background-color: rgba(245, 245, 245, 0.5) !important; }
    
  </style>

  