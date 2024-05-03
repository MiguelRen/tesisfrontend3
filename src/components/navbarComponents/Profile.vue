<template>

    <div class="card" style="width: 80%;">
        <img class="card-img-top">
        <div class="card-body">
            <h1 class="card-title"> Datos</h1>
            <p class="card-text">
                <h4>Usuario: {{ userData.use_username }}</h4>
                <h4>Email: {{ userData.use_useremail }}</h4>
                <h4>Contraseña: *****************</h4>
                <h4>Permisos: {{  }}</h4>
            </p>
            <a href="" class="btn btn-primary">Actualizar Usuario</a>
            <a href="" class="btn btn-primary">Actualizar Email</a>
            <a href="" class="btn btn-primary">Actualizar Contraseña</a>
            <a href="" class="btn btn-primary">Eliminar Usuario</a>
        </div>

    </div>
    
</template>
<script>

import UserServices from '../../services/user.services.js';
import { useAuthStore } from "../../store";
import { useSessionStore } from '../../store';
import { onBeforeMount, ref } from 'vue';

export default {
    setup(){
        const session = useSessionStore();
        const store = useAuthStore();
        const userData = ref({});
        // const updateUser = async () = 


        onBeforeMount(
            async() =>{
                userData.value = await UserServices.getUser(session.user);
            }
        )
        
        return{
        userData,
        session,
        store,
        }
    }
}
</script>