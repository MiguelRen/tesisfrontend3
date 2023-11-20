<template>
    <div class="container-fluid">
        <div class="row bg-light p-0 m-0">
            <div class="col rouded bg-light p-0 m-0">
                <Form @submit="handleStudentEnrollment" :validation-schema="studentSchema" class="p-0">
                                <div class="form-group">
                                        
                                    <!-- First Name -->
                                        <label for="student1Name"> 1er Nombre del Estudiante</label>
                                        <Field name="student1Name" type="text"/>
                                        <ErrorMessage name="student1Name" type="error-feedback"/>
                                        
                                    <!-- Second Name -->
                                        <label for="student2Name"> 2do Nombre del Estudiante</label>
                                        <Field name="student2Name" type="text"/>
                                        <ErrorMessage name="student2Name" type="error-feedback"/>

                                        <!-- First last Name -->
                                        <label for="student1LastName"> 1er Apellido del Estudiante</label>
                                        <Field name="student1LastName" type="text"/>
                                        <ErrorMessage name="student1LastName" type="error-feedback"/>

                                      <!-- Second last Name -->
                                      <label for="student2LastName"> 2do Apellido del Estudiante</label>
                                        <Field name="student2LastName" type="text"/>
                                        <ErrorMessage name="student2LastName" type="error-feedback"/>

                                    <!-- Birth day Date -->
                                    <label for="studentBirthday"> Fecha de Nacimiento</label>
                                        <Field name="studentBirthday" type="text"/>
                                        <ErrorMessage name="studentBirthday" type="error-feedback"/>

                                    <!--Student Address -->
                                    <label for="studentAddress"> Dirección</label>
                                        <Field name="studentAddress" type="text"/>
                                        <ErrorMessage name="studentAddress" type="error-feedback"/>

                                    <!-- Student Phone -->
                                    <label for="studentPhoneNumber"> Número de Teléfono</label>
                                        <Field name="studentPhoneNumber" type="text"/>
                                        <ErrorMessage name="studentPhoneNumber" type="error-feedback"/>

                                        <button class="btn btn-primary btn-block"><span>Registrar</span></button>
                                    </div>
                                </Form>
            </div>
        </div>

        <div class="row bg-light ">

        </div>
    </div>    
</template>
<script>
    import { Form, Field, ErrorMessage } from 'vee-validate'
    import * as yup from "yup";
    import studentServices from "../../services/student.services"

    export default {
        
                name: "Students",
                components:{
                    Form,
                    Field,
                    ErrorMessage
        },
        data(){
            const studentSchema = yup.object().shape({
                student1Name: yup.string().required("Es necesario un nombre del estudiante"),
                student2Name: yup.string(),
                student1LastName: yup.string().required("Se necesita al menos un Apellido"),
                student2LastName: yup.string(),
                studentAddress: yup.string().required("Es necesario indicar la Direción de vivienda"),
                studentPhoneNumber: yup.string()

             });
            return {
                    studentSchema,
                    student: studentServices
                
            };
        },
        created(){
            console.log("blaaa");
            console.log(this);
        },
        methods:{
            
           async handleStudentEnrollment(studentData){
                try {
                    const result =  this.student.createStudent(studentData);
                    console.log(result);
                    return result;
                } catch (error) {
                    console.log(error);
                    return error;
                }   
                
                
            }
        }
    }
</script>