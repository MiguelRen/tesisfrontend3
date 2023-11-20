<template>
    <div class="container-fluid  h-100 m-0 p-0">
        <h1>Configuraciones Académicas</h1>
        <div class="row m-0 h-100 p-0">
            <div class="col-sm-12 col-md-6 col-lg-4 m-0 p-0 bg-light border rounded d-flex flex-direction-column">
                <Form @submit="handleCreatePeriod" :validation-schema="periodSchema">
                    <h2>Nuevo año Escolar</h2>
                    <div class="form-group">
                        <label for="yearIni" class=" center"> Año de inicio</label>
                        <Field name="yearIni" type="number" />
                        <ErrorMessage name="dateIni" class="error-feedback" />
                        <label for="yearEnd">Año de fin </label>
                        <Field name="yearEnd" type="number" />
                        <ErrorMessage name="yearEnd" class="error-feedback" />
<!-- 
                        <label for="">1er Trimestre</label>
                        <label for="trim1Ini"> Inicio </label>
                        <Field name="trim1Ini" type="date" />
                        <ErrorMessage name="trim1Ini" class="error-feedback" />

                        <label for="trim1End">Fin</label>
                        <Field name="trim1End" type="date" />
                        <ErrorMessage name="1er Trimestre" class="error-feedback" />


                        <label for="">2do Trimestre</label>
                        <label for="trim2Ini">Inicio</label>
                        <Field name="trim2Ini" type="date" />
                        <ErrorMessage name="trim2Ini" class="error-feedback" />
                        <label for="trim2End">Fin</label>
                        <Field name="trim2End" type="date" />
                        <ErrorMessage name="trim2End" class="error-feedback" />

                        <label for="">3er Trimestre</label>
                        <label for="trim3Ini">Inicio</label>
                        <Field name="trim3Ini" type="date" />
                        <ErrorMessage name="trim3Ini" class="error-feedback" />
                        <label for="trim3End">Fin</label>
                        <Field name="trim3End" type="date" />
                        <ErrorMessage name="trim3End" class="error-feedback" /> -->
                    </div>


                    <button class="btn btn-primary btn-block">Crear</button>
                    <label>Periodo 2000-2001</label>
                    <label for="">Periodos resgistrados</label>
                </Form>
            </div>


            <div class="col-sm-12 col-md-6 col-lg-4 m-0 p-0 bg-light border rounded d-flex flex-direction-column">
                <Form @submit="handleCreateQuarter" :validation-schema="quarterSchema">
                <h2>Crear Nuevo Trimestre</h2>
                    <div class="form-group">

                        <label for="quarterPeriod">Período </label>
                        <Field name="quarterPeriod" type="number" />
                        <ErrorMessage name="quarterPeriod" class="error-feedback" />
                        <label for="trimIni"> Inicio </label>
                        <Field name="trimIni" type="date" />
                        <ErrorMessage name="trim1Ini" class="error-feedback" />

                        <label for="trimEnd">Fin</label>
                        <Field name="trimEnd" type="date" />
                        <ErrorMessage name="Trimestre" class="error-feedback" />

                    </div>


                    <button class="btn btn-primary btn-block">Crear</button>
                    <label>Periodo 2000-2001</label>
                    <label for="">Periodos resgistrados</label>
                </Form>
            </div>

            <div class="col-sm-12 col-md-6 col-lg-4 m-0 p-0 bg-light border rounded">
                <Form @submit="handleCreateCourse" :validation-schema="courseSchema">
                    <div class="form-group">
                        <h1>Creación de Materia</h1>
                        <label for="courseName">Nombre de la Materia</label>
                        <Field name="courseName" type="text" />
                        <ErrorMessage name="courseName" class="error-feedback" />
                        <button class="btn btn-primary btn-block"> Crear</button>
                    </div>
                </Form>
            </div>
        </div>

        <div class="row m-0 h-100">
            <div class="col-sm-12 col-md-6 col-lg-4 m-0 p-0 bg-light border rounded">
                <Form @submit="handleCreateSection" :validation-schema="sectionSchema">
                    <div class="form-group">
                        <h1>Creación de Secciones</h1>
                        <label for="sectionName">Nombre de la Sección</label>
                        <Field name="sectionName" type="text" />
                        <ErrorMessage name="sectionName" class="error-feedback" />
                        <label for="courseFrom">Materia a la que pertence</label>
                        <Field name="courseFrom" type="text" />
                        <ErrorMessage name="courseFrom" class="error-feedback" />
                        <button class="btn btn-primary btn-block"> Crear</button>
                    </div>
                </Form>
            </div>
        </div>

    </div>
</template>
<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
import academicPeriods from '../../services/period.services.js'
import * as yup from "yup";
import courseService from '../../services/course.services.js'
import sectionService from '../../services/section.services.js'
import quarterService from '../../services/quarter.services.js'


export default {
    name: "Academics",
    components: {
        Form,
        Field,
        ErrorMessage
    },
    data() {
        const periodSchema = yup.object().shape({
            yearIni: yup.number().required("Es necesario indicar la fecha de Inicio"),
            yearEnd: yup.number().required("Es necesario indicar la fecha de finalización")
                .when("yearIni",
                    (yearIni, periodSchema) => yearIni && periodSchema.min(yearIni, "Fecha Inicial debe ser anterior a Fecha Final"),
                )


        });

        const quarterSchema = yup.object().shape({
            quarterPeriod: yup.number().required("Es necesario indicar el período"),
            trimIni: yup.date().required("Es necesario indicar la fecha de Inicio"),
            trimEnd: yup.date().required("Es necesario indicar la fecha de finalización")
                .when("dateIni",
                    (dateIni, quarterSchema) => dateIni && quarterSchema.min(dateIni, "Fecha Inicial debe ser anterior a Fecha Final"),
                )


        });

        const courseSchema = yup.object().shape({
            courseName: yup.string(45).required("Es necesario ingresar un nombre de materia si desea crearla")
        });
        const sectionSchema = yup.object().shape({
            sectionName: yup.string(45).required("Es necesario ingresar un nombre de Sección si desea crearla"),
            courseFrom: yup.number().required("Es importante indicar la Materia a la cual pertenece esta seccion")
        });

        return {
            period: academicPeriods,
            course: courseService,
            section: sectionService,
            quarter: quarterService,
            periodSchema,
            courseSchema,
            sectionSchema,
            quarterSchema
        };
    },
    // created(){
    //     let self = this;
    //     this.$validator.extend
    // },
    methods: {
        async handleCreatePeriod(userPeriodData) {
            console.log(this.userPerioddata);

            const result = this.period.createPeriod(userPeriodData)
            console.log(result);
            return result;
        },
        async handleCreateQuarter(userQuarterData){
            console.log(userQuarterData);
            const result = this.quarter.createQuarter(userQuarterData)
        },
        async handleCreateCourse(data) {
            console.log(data);
            const result = this.course.createCourse(data);
        },
        async handleCreateSection(data) {

            const result = this.section.createSection(data);

        }

    }

}
</script>