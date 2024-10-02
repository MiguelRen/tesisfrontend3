<template>
    <div>
        <Form>
            <label for="period">Periodo</label>
            <Field 
            as="select" 
            name="period"
            @change="getCourse">
                <option 
                v-for="(item,index) in allPeriodObject"
                :key="index"
                :value="`${item.perperiodid}`">
                {{ item.peryearstart }} {{ item.peryearend }}
                </option>
            </Field>

            <label for="course">Materia</label>
            <Field
            as="select"
            name="course"
           @change="getSection"
            >
                <option
                v-for="(item,index) in allCourseObject"
                :key="index"
                :value="`${item.cou_courseid}`">
                    {{ item.cou_coursename }}
                </option>
            </Field>

            <label for="section">Sección</label>
            <Field
            as="select"
            name="section"
            @change="getStudentList"
            >
                <option 
                v-for="(item,index) in allSectionObject"
                :key="index"
                :value="`${ item.sec_sectionid}`">
                {{ item.sec_sectionid }}
                   {{ item.sec_sectionname }}
                   {{ item.sec_sectioncourseid_fk }}
                </option>
            </Field>

        </Form>
    </div>
    
    <div>
        <div>
            <h1>Profesores</h1>
        </div>

        <div >
            <h1>Etudiantes</h1>
            <div>

                <Form  >
                    <div class="row">

                        <label  for="studentId">Cédula</label>
                        <Field  
                        name="studentId"
                        @keyup="getStudentId"
                        >
        
                        </Field>
                    </div>
    
                    <label  for="studentName">Nombre:  </label>
                   <div class="row">

                       <Field 
                     
                        name="studentName"
                        >
                        {{ this.studentInf.stu_student1name }}
                        </Field>
                   </div> 
                    
                    <label  for="StudentLastname" >Apellido:  </label>
                    <Field 
                    
                    name="studentLastname"
                    v-model="studentInf"
                    >
                    {{ this.studentInf.stu_student1lastname}}
                    </Field>
                    
                    <div class="row">

                        <button>Registrar</button>
                    </div>
                </Form>
            </div>

            <table class="table table-striped">
                <thead>
                    <tr>
                        <th class="col-1">#</th>
                        <th class="col-1">Cédula</th>
                        <th class="col-1">Nombre</th>
                        <th class="col-1">Apellido</th>
                    </tr>
                </thead>
                <tbody v-for="(item,index) in allStudentListObject ">
                    <tr>
                        <th>{{index + 1}}</th>
                        <th>{{item.stu_studentid}}</th>
                        <th>{{ item.stu_student1name}}{{ item.stu_student2name}}</th>
                        <th>{{ item.stu_student1lastname}}{{ item.stu_student2lastname }}</th>

                    </tr>
                </tbody>
            </table>

        </div>                                                
    </div>
</template>

<script>

import {Field, ErrorMessage,Form} from "vee-validate"
import periodServices from "../../services/period.services"
import courseServices from "../../services/course.services"
import sectionServices from "../../services/section.services"
import studentServices from "../../services/student.services"

export default{
    name:"Course",
    components:{
        Form,
        Field,
        ErrorMessage,

    },
    data (){

        const allPeriodObject = ""; 
        const allCourseObject = "";
        const allSectionObject ="";
        
        const studentData= "";

        const allStudentListObject = "";
        const studentInf = "";
    return{
        allPeriodObject,
        allCourseObject,
        allSectionObject,

        course : courseServices ,
        period : periodServices,
        section  : sectionServices,

        student : studentServices,

        allStudentListObject,
        studentInf,
    }
    },
     mounted(){
       this.getPeriod();
        
    },
    methods:{
        async getPeriod (){
            try{
                this.allPeriodObject = await this.period.findAllPeriod();
                

            }catch(error){
                console.log(error);
                
            }
        },
        async getCourse (data) {
            try {
                
                const periodId = data.target.value;
               
                this.allCourseObject = await this.course.getParticularCourses(periodId);
                console.log(this.allCourseObject);
                    
            } catch (error) {
                console.log(error);
            }

        } ,
        async getSection (data){
            try {
                const courseId = data.target.value;
                
                this.allSectionObject = await this.section.findParticularSection(courseId);
                console.log(this.allSectionObject);
                
            } catch (error) {
                console.log(error);
                
            }
        },
        async getStudentId(data){
            try{
                const studentId = data;
                
               const result  = await this.student.getParticularStudent(studentId);
               this.studentInf = result;
                console.log(result);
                
                
            }catch(error){
                console.log(error);
            }
        },
        async getStudentList(data){
            try {
               
                const sectionId = data.target._value;
                
                
                this.allStudentListObject = this.student.getStudentBySection(sectionId);
                console.log(this.allStudentListObject);
            } catch (error) {
                console.log(error);
            }
        },

    },

}
</script>