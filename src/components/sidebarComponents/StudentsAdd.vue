<template>
    <div class="container-fluid m-0 p-0  h-100 w-100">
        <div class="row bg-light p-0 m-0 ">
            <div class="col-12 ">
                <h1>Agregar Estudiantes</h1>
            </div>
            <div class="d-flex  bg-light flex-wrap justify-content-around">
                <Form @submit="handleStudentEnrollment" :validation-schema="studentSchema" class="p-0">
                                <div class="form-group   d-flex flex-wrap justify-content-around ">
                                    
                                    <!-- Id -->
                                    <div class="d-flex flex-column m-2">
                                        <label for="studentId">Cédula</label>
                                            <Field class="rounded" name="studentId" type="text" />
                                            <ErrorMessage name="studentId" type="error-feedback"/>
                                    </div>
                                    <!-- First Name -->
                                    <div class="d-flex flex-column m-2 ">
                                        <label for="student1Name"> 1er Nombre</label>
                                        <Field class="rounded" name="student1Name" type="text"/>
                                        <ErrorMessage name="student1Name" type="error-feedback"/>
                                    </div>
                                        
                                    <!-- Second Name -->
                                    <div class="d-flex flex-column m-2">
                                        <label for="student2Name"> 2do Nombre</label>
                                        <Field class="rounded" name="student2Name" type="text"/>
                                        <ErrorMessage name="student2Name" type="error-feedback"/>
                                    </div>

                                        <!-- First last Name -->
                                    <div class="d-flex flex-column m-2">
                                        <label for="student1LastName"> 1er Apellido</label>
                                        <Field class="rounded" name="student1LastName" type="text"/>
                                        <ErrorMessage name="student1LastName" type="error-feedback"/>
                                    </div>

                                      <!-- Second last Name -->
                                    <div class="d-flex flex-column m-2">
                                        <label for="student2LastName"> 2do Apellido</label>
                                          <Field class="rounded" name="student2LastName" type="text"/>
                                          <ErrorMessage name="student2LastName" type="error-feedback"/>
                                    </div>


                                    <!-- Birth day Date -->
                                    <div class="d-flex flex-column m-2">
                                        <label for="studentBirthday">Nacimiento</label>
                                            <Field class="rounded" name="studentBirthday" type="date"/>
                                            <ErrorMessage name="studentBirthday" type="error-feedback"/>
                                    </div>

                                    <!--Student Address -->
                                    <div class="d-flex flex-column m-2">
                                        <label for="studentAddress">Dirección</label>
                                            <Field class="rounded" name="studentAddress" type="text"/>
                                            <ErrorMessage name="studentAddress" type="error-feedback"/>
                                    </div>

                                    <!-- Student Phone -->
                                    <div class="d-flex flex-column m-2">
                                        <label for="studentPhoneNumber">Teléfono</label>
                                            <Field class="rounded" name="studentPhoneNumber" type="text"/>
                                            <ErrorMessage name="studentPhoneNumber" type="error-feedback"/>
                                    </div >

                                     <!-- email -->
                                     <div class="d-flex flex-column m-2">
                                        <label for="studentEmail">Email</label>
                                            <Field class="rounded" name="studentEmail" type="text"/>
                                            <ErrorMessage name="studentEmail" type="error-feedback"/>
                                    </div >
                                  
                                    <!-- photo-->
                                    <!-- <div class="d-flex flex-column m-2">
                                        <label for="studenPhoto">Foto</label>
                                            <Field class="rounded" name="studenPhoto" type="text"/>
                                            <ErrorMessage name="studenPhoto" type="error-feedback"/>
                                    </div > -->

                                     <!-- Gender-->
                                     <div class="d-flex flex-column m-2">
                                        <label for="studentGender">Género</label>
                                            <Field class="rounded" name="studentGender" type="text"/>
                                            <ErrorMessage name="studentGender" type="error-feedback"/>
                                    </div >

                                    </div>

                                    
                                    <div class="form-group d-flex  flex-wrap p-2 rounded b-secodary ">
                                        <div>
                                            <h2>Representante</h2>
                                        </div>
                                        <!-- First Name -->
                                        <div class="d-flex flex-column m-2 ">
                                            <label for="repName"> 1er Nombre</label>
                                            <Field placeholder="No rellenar" class="rounded" name="rep1Name" type="text"/>
                                            <ErrorMessage name="rep1Name" type="error-feedback"/>
                                        </div>
                                            
                                        <!-- Second Name -->
                                        <div class="d-flex flex-column m-2">
                                            <label for="rep2Name"> 2do Nombre</label>
                                            <Field placeholder="No rellenar"  class="rounded" name="rep2Name" type="text"/>
                                            <ErrorMessage name="rep2Name" type="error-feedback"/>
                                        </div>
    
                                            <!-- First last Name -->
                                        <div class="d-flex flex-column m-2">
                                            <label for="rep1LastName"> 1er Apellido</label>
                                            <Field placeholder="No rellenar" class="rounded" name="rep1LastName" type="text"/>
                                            <ErrorMessage name="rep1LastName" type="error-feedback"/>
                                        </div>
    
                                          <!-- Second last Name -->
                                        <div class="d-flex flex-column m-2">
                                            <label for="rep2LastName"> 2do Apellido</label>
                                              <Field placeholder="No rellenar" class="rounded" name="rep2LastName" type="text"/>
                                              <ErrorMessage name="rep2LastName" type="error-feedback"/>
                                        </div>
    
                                        <!-- Id -->
                                        <div class="d-flex flex-column m-2">
                                            <label for="repId">Cédula</label>
                                                <Field placeholder="No rellenar" class="rounded" name="repId" type="text"/>
                                                <ErrorMessage name="repId" type="error-feedback"/>
                                        </div>
    
                                        <!-- Birth day Date -->
                                        <div class="d-flex flex-column m-2">
                                            <label for="repId">Nacimiento</label>
                                                <Field placeholder="No rellenar" class="rounded" name="repId" type="text"/>
                                                <ErrorMessage name="repId" type="error-feedback"/>
                                        </div>
    
                                        <!--rep Address -->
                                        <div class="d-flex flex-column m-2">
                                            <label for="repAddress">Dirección</label>
                                                <Field placeholder="No rellenar" class="rounded" name="repAddress" type="text"/>
                                                <ErrorMessage name="repAddress" type="error-feedback"/>
                                        </div>
    
                                        <!-- rep Phone -->
                                        <div class="d-flex flex-column m-2">
                                            <label for="repPhoneNumber">Teléfono</label>
                                                <Field placeholder="No rellenar" class="rounded" name="repPhoneNumber" type="text"/>
                                                <ErrorMessage name="repPhoneNumber" type="error-feedback"/>
                                        </div >
    
                                         <!-- email -->
                                         <div class="d-flex flex-column m-2">
                                            <label for="repEmail">Email</label>
                                                <Field placeholder="No rellenar" class="rounded" name="repEmail" type="text"/>
                                                <ErrorMessage name="repEmail" type="error-feedback"/>
                                        </div >
                                      
                                        <!-- photo-->
                                        <!-- <div class="d-flex flex-column m-2">
                                            <label for="studenPhoto">Foto</label>
                                                <Field placeholder="No rellenar" class="rounded" name="studenPhoto" type="text"/>
                                                <ErrorMessage name="studenPhoto" type="error-feedback"/>
                                        </div > -->
    
                                         <!-- Gender-->
                                         <div class="d-flex flex-column m-2">
                                            <label for="studenGender">Género</label>
                                                <Field placeholder="No rellenar" class="rounded" name="studenGender" type="text"/>
                                                <ErrorMessage name="studenGender" type="error-feedback"/>
                                        </div >
    
                                        </div>


                                    <div class=" d-inline-flex flex-column m-3">
                                        <button class="btn btn-primary btn-block"><span>Registrar</span></button>
                                    </div>
 
                                </Form>
            </div>

            <div>
                <h1>Update</h1>
            </div>
        
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
                studentId: yup.number(),
                student1Name: yup.string().required("Es necesario un nombre del estudiante"),
                student2Name: yup.string(),
                student1LastName: yup.string().required("Se necesita al menos un Apellido"),
                student2LastName: yup.string(),
                studentBirthday: yup.date(),
                studentAddress: yup.string().required("Es necesario indicar la Direción de vivienda"),
                studentPhoneNumber: yup.number(),
                studentEmail: yup.string(),
                studentGender: yup.string(),
                
             });
            return {
                    studentSchema,
                    student: studentServices
                
            };
        },
        created(){
            
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



<style scoped>
*{
    outline: 1px solid orange;
}
</style>