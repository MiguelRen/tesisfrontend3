            <script>
              import studentServices from '../../services/student.services';
              export default{
                  data(){
                      
                      return {
                          students: studentServices,
                          allStudents: "",
                        }
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

                <div class="col bg-secondary">
                    <h1 class="m-0 p-0">Estudiantes</h1>
                    <ul>
                        <li v-for="(item,index) in allStudents">
                            {{ index + 1 }} - {{item.stu_studenid}} 
                            - {{ item.stu_student1name}} - {{ item.stu_student2name }} 
                            - {{ item.stu_student1lastname }} - {{ item.stu_student2lastname }}
                            - {{ item.stu_studentadress }} - {{ item.stu_studentbirth }}
                            - {{ item.stu_studentemail }} - {{ item.stu_studentgender }}
                            - {{ item.stu_studentphone }}
                        </li>
                    </ul>
                </div>
               
            </div>
        </template>



 