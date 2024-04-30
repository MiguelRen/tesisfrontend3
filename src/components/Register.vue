<template >
  <div class=" fondo container-fluid d-flex justify-content-center align-items-center text-center">

    <div class="row d-flex container-fluid ">

      <div class="col-md-6 col-sm-12  ">
        <h1 class="text-light display-1 font-weight-bold deepshd">SimpleClass</h1>
        <h2 class="text-light display-2 font-weight-bold cursive">Registro de Usuario</h2>
      </div>

    

   
      <div class="col-md-6 col-sm-12">
        <div class="card card-container opa bg-opacity-25 d-flex justify-content-center align-items-center">


          <Form @submit="handleRegister" :validation-schema="schema" class="container-fluid px-4 text-center mt-2 ">
            <div v-if="!successful">
              <div class="form-group">
                <label for="username" class="h6">Nombre de Usuario</label>
                <Field name="username" type="text" class="form-control opa" />
                <ErrorMessage name="username" class="error-feedback text-danger" />
              </div>
              <div class="form-group">
                <label for="email" class="h6">Email</label>
                <Field name="email" type="email" class="form-control opa" />
                <ErrorMessage name="email" class="error-feedback text-danger" />
              </div>
              <div class="form-group">
                <label for="password" class="h6">Contraseña</label>
                <Field name="password" type="password" class="form-control opa" />
                <ErrorMessage name="password" class="error-feedback text-danger" />
              </div>

              <div class="form-group my-3">
                <button class="btn btn-primary btn-block" :disabled="loading">
                  <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                  Registrarse
                </button>
                <div class="mt-2 ">
              <router-link to="/Home" class="" style="text-decoration:none">
                Iniciar Sesión
              </router-link>
            </div>
              </div>
            </div>
          </Form>

          <div v-if="message" class="alert" :class="successful ? 'alert-success' : 'alert-danger'">
            {{ message }}
          </div>
        </div>

      </div>
    </div>

  </div>
</template>
  
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import { useAuthStore } from "../store";
import * as yup from "yup";
import UserService from "../services/user.services.js"

export default {
  name: "Register",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object().shape({
      username: yup
        .string()
        .required("Usuario requerido!")
        .min(3, "Minimo 3 caracteres!")
        .max(20, "Máximo 20 caracteres!"),
      email: yup
        .string()
        .required("Email Requerido!")
        .email("Email inválido!")
        .max(50, "Máximo 50 caracteres!"),
      password: yup
        .string()
        .required("Contraseña requerida!")
        .min(6, "Mínimo 6 caracteres!")
        .max(40, "Máximo 40 caracteres!"),
    });

    return {
      successful: false,
      loading: false,
      message: "",
      schema,
   
    };
  },

  methods: {
    async handleRegister(user) {

      try {

        this.message = "";
        this.successful = false;
        this.loading = true;
        console.log(user);

        const result = await UserService.register(user);
        
        this.message = result;
        this.successful = true;
        this.loading = false;
        setTimeout(() => {
          this.$router.push("login");

        }, 2000);

      } catch (error) {

        console.log(error);
        this.message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        this.successful = false;
        this.loading = false;

      }
    }



  }
};
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
}

.opa {
  background-color: rgba(245, 245, 245, 0.8) !important;
}

.deepshd {
  color: #e0dfdc;
  /* background-color: #333; */
  letter-spacing: .1em;
  text-shadow: 0 -1px 0 #fff, 0 1px 0 #2e2e2e, 0 2px 0#2c2c2c, 0 3px 0 #2a2a2a, 0 4px 0 #282828, 0 5px 0 #262626, 0 6px 0 #242424, 0 7px 0 #222, 0 8px 0 #202020, 0 9px 0 #1e1e1e, 0 10px 0 #1c1c1c, 0 22px 30px rgba(0, 0, 0, 0.9);
}

.cursive {
  text-shadow: 1px 1px 0 #1c1c1c, 0 22px 30px rgba(0, 0, 0, 0.9);
}
</style>