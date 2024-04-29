<template>

    <div class="card" style="width: 80%;">
        <img class="card-img-top">
        <div class="card-body">
            <h1 class="card-title"> Datos</h1>
            <p class="card-text">
                <!-- <h1>Usuario: {{ userData.email }}</h1> -->
            </p>
            <a href="" class="btn btn-primary">Actualizar Usuario</a>
            <a href="" class="btn btn-primary">Actualizar Email</a>
            <a href="" class="btn btn-primary">Actualizar Contraseña</a>
            <a href="" class="btn btn-primary">Eliminar Usuario</a>
        </div>

    </div>
    <div>
        <h1>Actualizar Usuario</h1>
    </div>
    <div>
        <h1>Actualizar Email</h1>

    </div>
    <div>
        <h1>Actualizar Contraseña</h1>

    </div>

    <div>
        <h1>Eliminar Usuario</h1>
    </div>

</template>
<script>

import UserServices from '../../services/user.services.js';
import {useAuthStore} from "../../store";

export default {
     data(){
        const userData = "";
        return{
            userData,
            
        }
    },
    async beforeMount(){
      
        const currentUser = useAuthStore().user.username;
        this.userData = await UserServices.getUser(currentUser);
        console.log(this.userData);
    
    }
    
}
</script>