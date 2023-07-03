<template>
  <nav class="navbar navbar-expand-sm  ">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#opciones" name="button">
      <span class="navbar-toggler-icon">
      </span>
    </button>
    <div class="collapse navbar-collapse" id="opciones">
      <div class="  border-end bg-white " id="sidebar-wrapper">
        <div class=" container-fluid d-flex h-100" id="wrapper">
          <div class=" list-group list-group-flush ">
            <a class="list-group-item list-group-item-action list-group-item-light p-2" href="#!" id="Dashboard"
              @click="clickedTag">Principal</a>
            <template v-if="quarter.currentQuarter">
              <a class="list-group-item list-group-item-action list-group-item-light p-2" href="#!" id="Students"
                @click="clickedTag">Estudiantes</a>
              <a class="list-group-item list-group-item-action list-group-item-light p-2" href="#!" id="Employees"
                @click="clickedTag">Personal</a>
              <!-- <a class="list-group-item list-group-item-action list-group-item-light p-2" href="#!" id="Workers"
                @click="clickedTag">Obreros</a> -->
              <a class="list-group-item list-group-item-action list-group-item-light p-2" href="#!" id="Documents"
                @click="clickedTag">Documentos</a>
              <!-- <a class="list-group-item list-group-item-action list-group-item-light p-2" href="#!" id="Classes"
                @click="clickedTag">Clases</a> -->
              <a class="list-group-item list-group-item-action list-group-item-light p-2" href="#!" id="Calendar"
                @click="clickedTag">Calendario</a>
              <!-- <a class="list-group-item list-group-item-action list-group-item-light p-2" href="#!" id="Pensum"
                @click="clickedTag">Pensum</a> -->
              <a class="list-group-item list-group-item-action list-group-item-light p-2" href="#!" id="Grades"
                @click="clickedTag">Asistencias y Notas</a>
              <a class="list-group-item list-group-item-action list-group-item-light p-2" href="#!" id="Curses"
                @click="clickedTag">Cursos</a>
            </template>
            <a class="list-group-item list-group-item-action list-group-item-light p-2" href="#!" id="Academics"
              @click="clickedTag">Académicos</a>
            <a href="">{{ quarter.currentQuarter }}</a>
          </div>
        </div>

      </div>
    </div>
  </nav>
</template>
<script>
import { useQuarterStore } from '../store';
import { ref } from 'vue';

export default {

  emits: ["componentChange"],
  setup(props, { emit }) {
    const showSidebar = ref(false);

    const toggleSidebar = () => {
      showSidebar.value = !showSidebar.value;
    };


    const tagName = ref("");
    const clickedTag = (event) => {

      tagName.value = event.target.id;

      emit('componentChange', tagName.value);
    }
    const quarter = useQuarterStore();
    return {
      quarter,
      showSidebar,
      toggleSidebar,
      tagName,
      clickedTag

    };
  }
}
</script>
