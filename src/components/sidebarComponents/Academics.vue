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
            class="list-group-item d-flex justify-content-between align-items-center justify-content-around btn"
            id="liPeriodValue"
            :class="isCurrentDate(item.peryearstart, item.peryearend).className"
            @click="periodItemClicked(event, item, index)"
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
          class="mb-3 text-center m-0 p-0"
          @submit="handleCreatePeriod"
          :validation-schema="periodSchema"
        >
          <h3 class="m-0">Nuevo Periodo Escolar</h3>
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
          <Form action="#">
            <!-- :validation-schema="periodSchema" -->

            <div class="row p-0 m-0">
              <h5 class="col-12">Indice {{ updateIndexData }}</h5>

              <label for="updateStartPeriod" class="col-12"
                >Inicio de Periodo</label
              >
              <Field
                name="updateStartPeriod"
                v-model="updatePeriodDataStart"
                class="col-12"
              />
              <ErrorMessage name="updateStartPeriod" class="error-feedback" />

              <label for="updateEndPeriod" class="col-12">Fin de Periodo</label>
              <Field
                name="updateEndPeriod"
                v-model="updatePeriodDataEnd"
                class="col-12"
              />
              <ErrorMessage name="updateEndPeriod" class="error-feedback" />

            </div>

            <button
              type="submit"
              @click="handleUpdatePeriod"
              class="btn butom btn-block"
            >
              Actualizar
            </button>
            <button
              type="submit"
              @click="handleDeletePeriod"
              class="btn butom btn-block"
            >
              Eliminar
            </button>

          </Form>
        </div>
      </div>
    </div>

    <!--Courses-->

    <div id="coursesSection" class="row h-100 p-0 m-0 w-100">
      <h2 class="greyColor d-inline">Materias</h2>

      <div id="searchCourse" class="col">
        <div class="col-2">
          <h3>Buscador</h3>

          <select name="" id="">
            <option
              value=""
              v-for="(item, index) in allCoursePeriodsObject"
              :key="index"
              @click="coursePeriodItemClicked(item)"
              :value="'${item.periodid}'"
            >
              {{ index + 1 }} - {{ item.peryearstart }} - {{ item.peryearend }}
            </option>
          </select>

          <textarea placeholder="materias del periodo aquí"> </textarea>
        </div>
      </div>
      <div id="createCourse" class="col">
        <h3>Crear materias</h3>

        <Form @submit="handleCreateCourse" class="form">
          <div class="col-2">
            <label for="coursePeriod">periodo</label>
            <Field as="select" name="coursePeriod" v-model="courseItemClicked">
              <option disabled selected value="">Seleccione una opción</option>
              <option
                v-for="(item, index) in allPeriodsObject"
                :key="index"
                :value="`${item.perperiodid}`"
              >
                {{ item.peryearstart }}-{{ item.peryearend }}
              </option>
            </Field>
            <ErrorMassage name="coursePeriod"></ErrorMassage>
          </div>

          <div class="col-2">
            <label for="courseName">Nombre</label>
            <Field  name="courseName">
             
            </Field>
            <ErrorMassage name="courseName"></ErrorMassage>
          </div>

          <div class="col-2">
            <label for="courseType">Tipo</label>
            <Field name="courseType" />
            <ErrorMessage name="courseType"></ErrorMessage>
          </div>

          <button class="btn btn-primary"> Crear Materia</button>
        </Form>
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
          <p style="color: red"></p>
        </div>
      </div>
    </div>

    <!--Sections-->

    <div class="row p-0 m-0 w-100">
      <h2 class="greyColor">Secciones</h2>

      <div class="col p-0 m-0 w-100">
        <Form 
        @submit="createSection"
        >
          <h4>Crear</h4>
          <label for="periodCreationSection"> Periodo</label>
          <Field
            as="select"
            name="periodCreationSection"
            @change="getPeriodCourses"
          >
            <option
              v-for="(item, index) in allPeriodsObject"
              :key="index"
              :value="`${item.perperiodid}`"
            
            >
              {{ item.peryearstart }} - {{ item.peryearend }}
            </option>
          </Field>


          <label for="courseCreationSection"> Materia</label>
          <Field 
          as="select"
          name="courseCreationSection" 
          
          
          >
          <option 
          v-for="item in particularCourses"
          :value="`${item.cou_courseid}`"
          >
          {{ item.cou_coursename }}
          </option>
        </Field >

        <label for="sectionCreationSection">Nombre de sección</label>
        <Field name="sectionCreationSection" />

          <button class="btn btn-primary">Crear</button>
        </Form>
      </div>

      <div class="col p-0 m-0 w-100">
        <h3>Registradas</h3>
        <textarea name="" id="" cols="30" rows="10">
                gestionar secciones
              </textarea
        >
      </div>

      <div class="col p-0 m-0 w-100">
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

import * as yup from "yup";
import courseService from "../../services/course.services.js";
import sectionService from "../../services/section.services.js";
// import quarterService from "../../services/quarter.services.js";
import periodServices from "../../services/period.services.js";
import { usePeriodStore } from "../../store/periodStore";

// components
// import CourseDropdown from '../academicComponents/CourseDropdown.vue'
import { ref } from "vue";

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

      //services function
      period: periodServices,
      course: courseService,
      section: sectionService,

      // quarter: quarterService,
      // allperiods : periodServices,
      periodSchema,
      message: "",
      succesfull: false,
      periodList: "",
      allPeriodsObject: "",

      //the STORE
      periodStore: usePeriodStore(),
      yearStartRef: "",
      yearEndRef: "",

      periodIdClicked: "",

      updatePeriodDataStart: "",
      updatePeriodDataEnd: "",
      updateIndexData: "",

      oldPeriodDataStart: "",
      oldPeriodDataEnd: "",

      courseIdClicked: ref(""),
      periodCourseIdClicked: "",

      allCoursePeriodsObject: "",

      sectionPeriodIdClicked: "",

      allPeriodCoursesObject: "",

      sectionPeriod:"",

      particularCourses:"",
    };
  },
  mounted() {
    this.getAllPeriods();
    this.getAllCoursePeriods();
    this.periodStore.updateCurrent();
  },

  methods: {
    periodItemClicked(event, item, index) {
      this.periodIdClicked = item.perperiodid;

      this.updatePeriodDataStart = item.peryearstart;
      this.updatePeriodDataEnd = item.peryearend;

      this.oldPeriodDataStart = this.updatePeriodDataStart;
      this.oldPeriodDataEnd = this.updatePeriodDataEnd;

      this.updateIndexData = index + 1;
    },

    async getAllPeriods() {
      this.allPeriodsObject = await this.period.findAllPeriod();
      // console.log(this.allPeriodsObject);
    },

    async getAllCoursePeriods() {
      this.allCoursePeriodsObject = await this.course.getCoursePeriods();
    },

    isCurrentDate(startDate, endDate) {
      const currentDate = new Date();

      const periodStartDate = new Date(startDate);

      const periodEndDate = new Date(endDate);
      const isActive =
        currentDate >= periodStartDate && currentDate <= periodEndDate;
      const className = isActive ? "active" : "";

      return {
        isActive,
        className,
      };
    },

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

    async handleCreateSection(data) {
      const result = this.section.createSection(data);
    },

    async handleUpdatePeriod(e) {
      e.preventDefault();
      console.log(this.updatePeriodDataStart, this.updatePeriodDataEnd);
      const oldPeriod = [this.oldPeriodDataStart, this.oldPeriodDataEnd];
      const newPeriod = [this.updatePeriodDataStart, this.updatePeriodDataEnd];

      const newData = {
        oldPeriod,
        newPeriod,
      };

      const result = await this.period.updatePeriod(newData);

      return result;
    },
    async handleDeletePeriod(e) {
      e.preventDefault();

      const periodToErase = this.periodIdClicked;
      const result = await this.period.deletePeriod(periodToErase);

      return false;
    },

    //course setting methods

    async courseItemClicked(event, item, index) {
      console.log(item);
    },
    async coursePeriodItemClicked(item) {
      console.log(item);
    },

    async handleCreateCourse(newCourse) {
      try {
        const result = await this.course.createCourse(newCourse);
      } catch (error) {
        console.log(error);
      }

      return;
    },
    //section setting methods

    async sectionPeriodItemClicked(e,value) {
      try {
        e.preventDefault();
        console.log(value);
        
        this.console.log(newSection);
      } catch (error) {
        console.log(error);
      }
    },
    async getPeriodCourses(variab){
      console.log(variab.target._value);
      const courses = await this.course.getParticularCourses(variab.target._value);
     this.particularCourses = courses;
     console.log(this.particularCourses);
     
    //  console.log(variab);
     return variab
     
      

    },
    async createSection (values){
      console.log(values);
      
    },

  },
};
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
