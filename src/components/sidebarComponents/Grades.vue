<template>
    <div class="container-fluid p-0 m-0">
        <div class="row p-0 m-0">
            <div class="col rounded bg-light p-0 ">
                <h1>Notas</h1>
                <div class="form-group p-0">
                    <Form @submit="handleInsertGrade" :validation-schema="gradeSchema" class="p-0">
                        <label for="courseGrade">Materia</label>
                        <Field name="courseGrade"/>
                        <ErrorMessage name="courseGrade" class="error-feedback"/>

                        <label for="sectionGrade">Sección</label>
                        <Field name="sectionGrade"/>
                        <ErrorMessage name="sectionGrade" class="error-feedback"/>
                    </Form>
                </div>
            </div>
        </div>
        <div class="row p-0 m-0">
            <div class="col rounded bg-light p-0 m-0">
                <h1>Ingreso de Asistencias</h1>
            </div>
        </div>
    </div>
</template>
<script>
import {Form,Field,ErrorMessage} from "vee-validate"
import * as yup from "yup"
export default{
    name:"Grades",
    components:{
        Form,
        Field,
        ErrorMessage
    },
    data(){
        const gradeSchema = yup.object().shape({
            courseGrade: yup.string().required("Se necesita Indicar la Materia"),
            sectionGrade: yup.string().required("Debe ingresar la sección")
        });
        return {
            gradeSchema,

        }
    }
}
</script>