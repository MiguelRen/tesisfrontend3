    <template>
      <div class="faceIn first">
        <img src="../assets/logoMusical.png" id="icon" height="200" width="200" alt="Logo Musical">
      </div>
      
    
      
    
    
       <form v-on:submit.prevent="login">
      <!-- Email input -->
      <div class="form-outline mb-4">
        <input type="text" id="form2Example1" class="form-control" v-model="usuario"/>
        <label class="form-label" for="form2Example1">Usuario</label>
      </div>
    
      <!-- Password input -->
      <div class="form-outline mb-4">
        <input type="password" id="form2Example2" class="form-control" v-model="password" />
        <label class="form-label" for="form2Example2">Password</label>
      </div>
    
      <!-- 2 column grid layout for inline styling -->
    <!--   <div class="row mb-4">
        <div class="col d-flex justify-content-center">
      
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
            <label class="form-check-label" for="form2Example31"> Remember me </label>
          </div>
        </div>
    </div> -->
        
    
      <!-- Submit button -->
      <button type="submit" class="btn btn-primary btn-block mb-4">Ingresar</button>
    
      <div class="alert alert-danger" role="alert" v-if="error">
        <p> {{ error_msg }} </p>
      Te has Equivocado en los datos ingresados !
    </div>
    <div class="alert alert-success" role="alert" v-if="success">
      Listo, nos vamos pal dashboard!
    </div>
    </form>
    </template>

    <script >
    import axios from 'axios'   
    export default{
      name:'Login',
      
      components:{
    
      },
      data:function(){
        return{
          usuario:"",
          password: "",
          error: false,
          error_msg: "",
          success: false
         
        }
      },
      methods:{
        login(){
          let json = {

            "usuario": this.usuario,
            "password":this.password
          } ;
          console.log(json);
          axios.get('http://localhost:4500/api/users',{
            nombre : "freddy",
            clave : "ds3d2s32s"
          } ) 
          .then(data => {
            console.log(data);
            
          })
          .catch((error) => {
            console.log(error);
          });
        }        
      }
    }
    </script>    

<style scoped>

</style>