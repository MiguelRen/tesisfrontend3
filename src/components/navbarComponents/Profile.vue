<template>

    <div class="card" style="width: 80%;">
        <img class="card-img-top">
        <div class="card-body">
            <h1 class="card-title"> Datos</h1>
            <p class="card-text ">


                <div class="d-flex justify-content-between">
                    <h4>Usuario: {{ userData.use_username }} </h4>
                    <button class="btn btn-primary" v-if="!updateClicked" @click="updateClickedFunction">
                        Actualizar
                    </button>
                </div>

                <Form v-if="updateClicked"  :validation-schema="userUpdateSchema" @submit="userUpdate">
                    <div>
                        <Field name="username"e/>
                        <p>Nuevo Nombre</p>
                        <Field name="usernameRepeat"e/>
                        <p> Repita el Nombre</p>
                        
                    
                    <button>Actualizar</button>
                        {{ updateMessage }}
                    </div>

                </Form>



                <div class="d-flex justify-content-between">
                    <h4>Email: {{ userData.use_useremail }}</h4>
                    <a href="" class="btn btn-primary">Actualizar Email</a>
                </div>
                <div class="d-flex justify-content-between">
                    <h4>Contraseña: *****************</h4>
                    <a href="" class="btn btn-primary">Actualizar Contraseña</a>
                </div>
                <div class="d-flex justify-content-between">
                    <h4>Permisos: {{  }}</h4>
                </div>
            </p>
            <a href="" class="btn btn-primary">Eliminar Usuario</a>
        </div>

    </div>
    
</template>


<script>

import UserServices from '../../services/user.services.js';
import { useAuthStore } from "../../store";
import { useSessionStore } from '../../store';
import { onBeforeMount, ref } from 'vue';
//vee-validate
import { Form, Field } from 'vee-validate';
//yup
import * as yup from "yup";
import authHeader from '../../services/auth-header.js';

export default {
    components:{
        Form,
        Field,
    },
    setup(){
        const session = useSessionStore();
        const store = useAuthStore();
        const userData = ref({});
        const updateClicked = ref(false);
        const updateMessage = ref(false);
        //yup schema
        const userUpdateSchema = yup.object({
            username : yup.string().required(),
            usernameRepeat : yup.string().required().matches("username"),
            // usernameconfirm : yup.matches(username),
        })

        //functions
        const updateClickedFunction = (event)=>{
            event.preventDefault();
            console.log(updateClicked.value);
            updateClicked.value = !updateClicked.value;
            console.log(updateClicked.value);
        }
       const userUpdate = (values) =>{
            if (values.username === values.usernameRepeat) {
                try {
                    const lastUsername = userData.value.use_username;
                    const newUsername = values.username;
                    console.log(lastUsername,newUsername );
                    const serviceResponse = UserServices.updateUsername(lastUsername, newUsername );
                    updateMessage.value = serviceResponse;
                    store.logout();
                    this.$router.push("/Login");
                        
                    
                } catch (error) {
                    console.log(error);
                }
            }else{
                updateMessage.value = "No coinciden"
            }
        };

        //hooks
        onBeforeMount(
            async() =>{
                userData.value = await UserServices.getUser(session.user);
            }
        )
        
        return{
        userData,
        session,
        store,
        userUpdate,
        updateClicked,
        updateClickedFunction,
        updateMessage,
        }
    }
}
</script>