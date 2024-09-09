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

            >
                <option 
                v-for="(item,index) in allSectionObject"
                value="">
                   {{ item.sec_sectionname }}
                </option>
            </Field>

        </Form>
        <h1>Etudiantes</h1>
        <h1>Profesores</h1>
    </div>
</template>

<script>

import {Field, ErrorMessage,Form} from "vee-validate"
import periodServices from "../../services/period.services"
import courseServices from "../../services/course.services"
import sectionServices from "../../services/section.services"

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
        
    return{
        allPeriodObject,
        allCourseObject,
        allSectionObject,

        course : courseServices ,
        period : periodServices,
        section  : sectionServices,


    }
    },
     mounted(){
       this.getPeriod();
        
    },
    methods:{
        async getPeriod (){
            try{
                this.allPeriodObject = await this.period.findAllPeriod();
                console.log(this.allPeriodObject);

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
            } catch (error) {
                console.log(error);
                
            }
        },
    },

}
</script>