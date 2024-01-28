<template>
  <div class="container-fluid h-100 m-0 p-0">
    <h1>Configuraciones Académicas</h1>
    <!-- <div>{{ periodStore.yearStart }} -- {{ periodStore.yearEnd }}</div> -->

    <div class="row m-0 h-100 p-0">
      <div
        class="col-sm-12 col-md-6 col-lg-4 m-3 p-0 bg-light border rounded d-flex flex-direction-column"
      >
        <Form
          class="m-3 text-center"
          @submit="handleCreatePeriod"
          
          :validation-schema="periodSchema"
        >
          <h2 clsas="m-0 ">Nuevo año Escolar</h2>
          <div class="form-group row m-4 py-3">
            <label for="dateStart" class="py-2">Fecha Inicio</label>
            <Field name="dateStart" type="date" class="" />
            <ErrorMessage name="dateStart" class="error-feedback" />
            <label for="dateEnd" class="py-2">Fecha fin </label>
            <Field name="dateEnd" type="date" />
            <ErrorMessage name="dateEnd" class="error-feedback" />
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

          <button class="btn butom btn-block">Crear</button>
          <!-- <label>Periodo 2000-2001</label>
                                <label for="">Periodos resgistrados</label> -->
          <div class="form-group">
            <div
              v-if="message"
              class="alert b-4"
              :class="succesfull ? 'alert-success' : 'alert-danger'"
              role="alert"
            >
              {{ message }}
            </div>
          </div>
        </Form>
      </div>
      <div
        class="col-sm-12 col-md-6 col-lg-4 m-3 p-0 bg-light border rounded d-flex flex-direction-column"
      >
      <ul>
        <li v-for="items in allPeriodsObject">
          <strong>{{ items.perperiodid}} - {{ items.peryearstart}} - {{ items.peryearend}}</strong>
        </li>
      </ul>>

      </div>

      <!-- 
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
                        </div> -->

      <!-- <div class="col-sm-12 col-md-6 col-lg-4 m-0 p-0 bg-light border rounded">
                            <Form @submit="handleCreateCourse" :validation-schema="courseSchema">
                                <div class="form-group">
                                    <h1>Creación de Materia</h1>
                                    <label for="courseName">Nombre de la Materia</label>
                                    <Field name="courseName" type="text" />
                                    <ErrorMessage name="courseName" class="error-feedback" />
                                    <button class="btn btn-primary btn-block"> Crear</button>
                                </div>
                            </Form>
                        </div> -->
    </div>

    <!-- <div class="row m-0 h-100">
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
                    </div> -->
  </div>
</template>
<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import academicPeriods from "../../services/period.services.js";
import * as yup from "yup";
import courseService from "../../services/course.services.js";
import sectionService from "../../services/section.services.js";
// import quarterService from "../../services/quarter.services.js";
import periodServices from "../../services/period.services.js";
import { usePeriodStore } from "../../store/periodStore";

export default {
  name: "Academics",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const periodSchema = yup.object().shape({
      dateStart: yup.date().required("Es necesario indicar la fecha de Inicio"),
      dateEnd: yup
        .date()
        .required("Es necesario indicar la fecha de finalización")
        .when(
          "dateStart",
          (dateStart, periodSchema) =>
            dateStart &&
            periodSchema.min(
              dateStart,
              "Fecha Inicial debe ser anterior a Fecha Final"
            )
        ),
    });


    return {
      period: periodServices,
      course: courseService,
      section: sectionService,
      // quarter: quarterService,
      // allperiods : periodServices,
      periodSchema,
      message: "",
      succesfull: false,
      periodList: "",
      allPeriodsObject : "",
      periodStore : usePeriodStore(),
  
    };
  },
   mounted(){

     this.getAllPeriods();
     this.periodStore.updateCurrent();
    
  },

  methods: {
    
    async getAllPeriods(){

      this.allPeriodsObject = await this.period.findAllPeriod();
      console.log(this.allPeriodsObject);
    

    }
    ,
    async handleCreatePeriod(userPeriodData) {
  
      const result = this.period.createPeriod(userPeriodData);
      if (result) {
        this.message = "Creado";
        this.succesfull = true;
        setTimeout(() => {
          this.message = "";
          this.getAllPeriods();
        }, 1000);
      }
      return result;
    },
    // async handleCreateQuarter(userQuarterData) {
    //   console.log(userQuarterData);
    //   const result = this.quarter.createQuarter(userQuarterData);
    // },
    async handleCreateCourse(data) {
      console.log(data);
      const result = this.course.createCourse(data);
    },
    async handleCreateSection(data) {
      const result = this.section.createSection(data);
    },
  },
};
</script>
<style scoped>
.butom {
  background-color: #adb5bd;
}
</style>
