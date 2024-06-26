            <script>
              import studentServices from '../../services/student.services';
              import {Form,ErrorMessage,Field} from "vee-validate"
import { validate } from 'vee-validate';
              export default{
                  data(){
                      
                      return {
                          students: studentServices,
                          allStudents: "",
                        }
                    },
                    components:{
                        Form,
                        ErrorMessage,
                        Field,
                        
                    },
                    
                    mounted(){
                        this.getAllStudents();
                        
                    },

                    methods:{
                        async getAllStudents (){
                            this.allStudents = await this.students.getStudents();
                            console.log(this.allStudents);
                    
                   }
                }
            }
            </script>



        <template>
            <div class="row h-100 w-100 p-0 m-0">

                <div class="col p-0 m-0">
                    <h1 class="m-0 p-0 text-center">Estudiantes</h1>
                    <div>
                        <Form>
                            <label for="studentSearch"> Buscar</label>
                            <Field name="studentSearch"/>
                        </Form>
                    </div>


 
                    <table class="table table-striped ">
                        <thead>
                            <tr>
                                <th class="col">#</th>
                                <th class="col">Nombre</th>
                                <th class="col">Apellido</th>
                                <th class="col">Dirección</th>
                                <th class="col">E-mail</th>
                                <th class="col">Género</th>
                                <th class="col">Teléf.</th>
                            </tr>
                        </thead>

                        <tbody v-for="(item,index) in allStudents">
                            <th class="">{{ index + 1 }}</th>
                            <td>{{ item.stu_student1name}} {{ item.stu_student2name }}</td>
                            <td>{{ item.stu_student1lastname }} {{ item.stu_student2lastname }}</td>
                            <td>{{ item.stu_studentadress }} {{ item.stu_studentbirth }}</td>
                            <td>{{ item.stu_studentemail }}</td>
                            <td>{{ item.stu_studentgender }}</td>
                            <td>{{ item.stu_studentphone }}</td>
                        </tbody>
                    </table>

                    

                   
                </div>
               
            </div>
        </template>



 <style scoped>
 .flex-list{
      display: flex;
  flex-wrap: wrap; /* Permite que los elementos se envuelvan a la siguiente línea */
  gap: 10px; /* Espacio entre elementos */
 }
 .flex-list li span{
      display: flex;
  /* justify-content: space-between; Distribuye el espacio restante igualmente entre los elementos hijos */
  /* align-items: center; Alinea los elementos hijos verticalmente en el centro */
  /* padding: 10px; */
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0,0,0,.1); /* Sombra suave */
 }
.flex-list li{
      display: flex;
  /* justify-content: space-between; Distribuye el espacio restante igualmente entre los elementos hijos */
  /* align-items: center; Alinea los elementos hijos verticalmente en el centro */
  /* padding: 10px; */
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0,0,0,.1); /* Sombra suave */
 } 
</style>