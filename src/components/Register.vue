<template>
  <div class=" fondo col-md-12 d-flex justify-contentn-center align-items-center text-center">
    <div class="col-md-4 d-flex align-items-center mx-auto text-center justify-content-center">


      <div class="card card-container opa bg-opacity-25 d-flex justify-content-center align-items-center">
        <img id="profile-img" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" class="profile-img-card" />
        <Form @submit="handleRegister" :validation-schema="schema">
          <div v-if="!successful">
            <div class="form-group">
              <label for="username">Nombre de Usuario</label>
              <Field name="username" type="text" class="form-control" />
              <ErrorMessage name="username" class="error-feedback" />
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <Field name="email" type="email" class="form-control" />
              <ErrorMessage name="email" class="error-feedback" />
            </div>
            <div class="form-group">
              <label for="password">Contraseña</label>
              <Field name="password" type="password" class="form-control" />
              <ErrorMessage name="password" class="error-feedback" />
            </div>

            <div class="form-group">
              <button class="btn btn-primary btn-block" :disabled="loading">
                <span v-show="loading" class="spinner-border spinner-border-sm"></span>
                Registrarse
              </button>
            </div>
          </div>
        </Form>

        <div v-if="message" class="alert" :class="successful ? 'alert-success' : 'alert-danger'">
          {{ message }}
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import { useAuthStore } from "../store";
import * as yup from "yup";

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
        .required("Username is required!")
        .min(3, "Must be at least 3 characters!")
        .max(20, "Must be maximum 20 characters!"),
      email: yup
        .string()
        .required("Email is required!")
        .email("Email is invalid!")
        .max(50, "Must be maximum 50 characters!"),
      password: yup
        .string()
        .required("Password is required!")
        .min(6, "Must be at least 6 characters!")
        .max(40, "Must be maximum 40 characters!"),
    });

    return {
      successful: false,
      loading: false,
      message: "",
      schema,
      auth: useAuthStore()
    };
  },
  // computed: {
  //     loggedIn() {
  //       const auth = useAuthStore();

  //       return auth.status.loggedIn;
  //     },
  // },
  // mounted() {

  //   if (this.loggedIn) {
  //     this.$router.push("/profile");
  //   }
  // },
  methods: {
    async handleRegister(user) {





      try {

        this.message = "";
        this.successful = false;
        this.loading = true;

        const result = await this.auth.register(user)

        console.log(result);
        this.message = result.message;
        this.successful = true;
        this.loading = false;
        setTimeout(() => {
          this.$router.push("login");

        }, 500);

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
  background-image: url(../assets/fondo.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 0;
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
}

.opa {
  background-color: rgba(245, 245, 245, 0.5) !important;
}
</style>