<template>
  <div class="container-fluid h-100 w-100 m-0 p-0">
    <h1 class="text-center">Configuraciones Académicas</h1>

    <!--Periods-->
    <div class="row p-0 m-0 w-100">
      <h3 class="greyColor">Periodos</h3>

      <div class="col form-group w-100">
        <h3>Creados</h3>

        <div class="d-flex justify-content-around">
          <h5>Inicio</h5>
          <h5>Fin</h5>
        </div>

        <ul class="list-group list-group-dark overflowHidden">
          <li
            v-for="(item, index) in allPeriodsObject"
            class="list-group-item d-flex justify-content-between align-items-center justify-content-around btn "
            id="liPeriodValue"
            :class="isCurrentDate(item.peryearstart, item.peryearend).className"
            @click="periodItemClicked(event, item, index);"
          >
            <strong>{{ index + 1 }}</strong>
            <strong>{{ item.peryearstart }}</strong>
            <strong>{{ item.peryearend }}</strong>
          </li>
        </ul>
        >
        <div
          v-if="message"
          class="alert b-4 w-100"
          :class="succesfull ? 'alert-success' : 'alert-danger'"
          role="alert"
        >
          {{ message }}
        </div>
      </div>

      <div class="col p-0 m-0 bg-light border rounded d-inline-flex w-100">
        <Form
          class="m-3 text-center m-0 p-0"
          @submit="handleCreatePeriod"
          :validation-schema="periodSchema"
        >
          <h3 clsas="m-0 ">Nuevo Periodo Escolar</h3>
          <div class="form-group row m-4 py-3">
            <label for="dateStart" class="py-2">Fecha Inicio</label>
            <Field name="dateStart" type="date" class="" />
            <ErrorMessage name="dateStart" class="error-feedback" />
            <label for="dateEnd" class="py-2">Fecha fin </label>
            <Field name="dateEnd" type="date" />
            <ErrorMessage name="dateEnd" class="error-feedback" />

            <button class="btn butom btn-block">Crear</button>
          </div>
        </Form>
      </div>

      <div class="col p-0 m-0 bg-light border rounded">
        <h3>Actualizar datos</h3>
        <div>
          <Form>
            
            <div class="row p-0 m-0">
              <h5 class="col-12">Indice {{ updateIndexData }}</h5>
  
              <label for="updatePeriod" class="col-12">Inicio de Periodo</label>
              <Field name="updatePediod" v-model="updatePeriodDataStart" class="col-12"/>
              
              <label for="startPeriod" class="col-12">Fin de Periodo</label>
              <Field name="startPeriod" v-model="updatePeriodDataEnd" class="col-12"/>
              
            </div>

            <div class="row d-inline justify-content-between">
              <button type="button" class="btn butom btn-primary">Actualizar</button>
              <button type="button" class="btn butom btn-primary">Eliminar</button>

            </div>
            
          </Form>
        </div>
      </div>
    </div>

    <!--Courses-->

    <div id="coursesSection" class="row h-100 p-0 m-0 w-100">
      <h2 class="greyColor d-inline">Materias</h2>

      <div id="createCourse" class="col">
        <h3>Crear materias</h3>
        <Form class="">
          <div class="col-2">
            <label for="coursePeriod">periodo</label>
            <Field name="coursePeriod" />
            <ErrorMessage name="coursePeriod"></ErrorMessage>
          </div>

          <div class="col-2">
            <label for="courseName">Nombre</label>
            <Field name="courseName" type="text" />
            <ErrorMassage name="courseName"></ErrorMassage>
          </div>

          <div class="col-2">
            <label for="courseType">Tipo</label>
            <Field name="courseType" />
            <ErrorMessage name="courseType"></ErrorMessage>
          </div>

          <div class="col-2">
            <label for="courseReq">Pre-requisito</label>
            <Field name="courseReq" />
            <ErrorMessage name="courseReq"></ErrorMessage>
          </div>

          <div class="col-2">
            <label for="courseSchedule">horario</label>
            <Field name="courseType" />
            <ErrorMessage name="courseType"></ErrorMessage>
          </div>

          <Button class="btn btn-primary"> Crear Materia</Button>
        </Form>
      </div>

      <div id="searchCourse" class="col">
        <div class="col-2">
          <h3>Buscador</h3>
          <Form>
            <label for="">Periodo</label>
            <Field name="" />

            <label for="">Materia</label>
            <Field name="" />
          </Form>

          <textarea   placeholder="materias del periodo aquí">
            
          </textarea>
        </div>
      </div>

      <div id="updateCourse" class="col">
        <div class="col-2">
          <h3>Actualizar</h3>
          <Form>
            <label for="periodSearch">Periodo</label>
            <Field name="periodSearch" />

            <label for="periodSearch">Materia</label>
            <Field name="periodSearch" />
          </Form>
          <p style="color: red">
     
          </p>
        </div>
      </div>
    </div>

    <!--Sections-->

    <div class="row p-0 m-0 w-100">
      <h2 class="greyColor">Secciones</h2>

      <div class="col  p-0 m-0 w-100">
        <Form>
          <h4>Crear</h4>
          <label for="creationSection"> Periodo</label>
          <Field name="creationSection" />

          <label for="creationSection"> Materia</label>
          <Field name="creationSection" />

          <label for="creationSection"> Sección</label>
          <Field name="creationSection" />
        </Form>
      </div>

      <div class="col  p-0 m-0 w-100">
        <h3>Registradas</h3>
        <textarea name="" id="" cols="30" rows="10">
                gestionar secciones
              </textarea
        >
      </div>

      <div class="col  p-0 m-0 w-100">
        <h3>Actualizar secciones</h3>
        
        <Form>
          <label for="updateSection">Perido</label>
        <Field name="updateSection" />

        <label for="updateSection">Materia</label>
        <Field name="updateSection" />

        <label for="updateSection">Sección</label>
        <Field name="updateSection" />
        <button class="btn butom btn-primary">Actualizar</button>
                <button class="btn butom btn-primary">Eliminar</button>
        </Form>
      </div>
    </div>
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
// components
// import CourseDropdown from '../academicComponents/CourseDropdown.vue'
import {ref} from "vue"

export default {
  name: "Academics",
  components: {
    Form,
    Field,
    ErrorMessage,
    // CourseDropdown,
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

    // const yearStartRef =ref("");
    // const yearEndRef =ref("");



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
      yearStartRef : "",
      yearEndRef : "",

      updatePeriodDataStart: "",
      updatePeriodDataEnd: "",
      updateIndexData:"",
    };
  },
   mounted(){

     this.getAllPeriods();
     this.periodStore.updateCurrent();



  },

  methods: {
  
    periodItemClicked(event, item, index){
      this.updatePeriodDataStart = item.peryearstart;
      this.updatePeriodDataEnd = item.peryearend;
      console.log(item.peryearstart);
       console.log(item.peryearend);
       console.log(index);
       this.updateIndexData = index + 1;
  },

    async getAllPeriods(){

      this.allPeriodsObject = await this.period.findAllPeriod();
      // console.log(this.allPeriodsObject);
    },

      isCurrentDate(startDate,endDate){
        const currentDate = new Date();
        
        const periodStartDate = new Date(startDate);
  
        const periodEndDate = new Date(endDate);
        const isActive = currentDate >= periodStartDate && currentDate <= periodEndDate;
        const className =  isActive ? 'active' : "";
       
        return {
          isActive,
          className,

        }
      }

    ,
    async handleCreatePeriod(userPeriodData) {
 //  console.log(userPeriodData);
      const result = this.period.createPeriod(userPeriodData);
      if (result) {
        this.message = "Creado";
        this.succesfull = true;
        this.periodStore.updateCurrent();
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
      // console.log(data);
      const result = this.course.createCourse(data);
    },
    async handleCreateSection(data) {
      const result = this.section.createSection(data);
    },
  },
}

</script>
<style scoped>
.butom {
  background-color: #adb5bd;
}
.greyColor {
  background-color: rgb(233, 229, 236);
}

.overflowHidden {
  height: 15em;
  line-height: 1em;
  overflow-x: hidden;
  overflow-y: scroll;
}

* {
  outline: 1px solid rgb(233, 229, 236);
}
</style>
