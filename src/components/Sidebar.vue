<template>
  <div class=" container-fluid d-flex h-100" id="wrapper">

    <div class="  border-end bg-white " id="sidebar-wrapper">
      <div class=" list-group list-group-flush ">
        <a class="list-group-item list-group-item-action list-group-item-light p-2" href="#!" id="Dashboard"
          @click="clickedTag">Principal</a>
        <a class="list-group-item list-group-item-action list-group-item-light p-2" href="#!" id="Students"
          @click="clickedTag">Estudiantes</a>
        <a class="list-group-item list-group-item-action list-group-item-light p-2" href="#!" id="Teachers"
          @click="clickedTag">Profesores</a>
        <a class="list-group-item list-group-item-action list-group-item-light p-2" href="#!" id="Workers"
          @click="clickedTag">Obreros</a>
        <a class="list-group-item list-group-item-action list-group-item-light p-2" href="#!" id="Documents"
          @click="clickedTag">Documentos</a>
        <a class="list-group-item list-group-item-action list-group-item-light p-2" href="#!" id="Classes"
          @click="clickedTag">Clases</a>
        <a class="list-group-item list-group-item-action list-group-item-light p-2" href="#!" id="Calendar"
          @click="clickedTag">Calendario</a>
        <a class="list-group-item list-group-item-action list-group-item-light p-2" href="#!" id="Pensum"
          @click="clickedTag">Pensum</a>
        <a class="list-group-item list-group-item-action list-group-item-light p-2" href="#!" id="Grades"
          @click="clickedTag">Notas</a>
          <a class="list-group-item list-group-item-action list-group-item-light p-2" href="#!" id="Academics"
          @click="clickedTag">Académicos</a>
          <a class="list-group-item list-group-item-action list-group-item-light p-2" href="#!" id="Curses"
          @click="clickedTag">Cursos</a>
      </div>
    </div>
   
  </div>
</template>
<script>
import { ref } from 'vue';

export default {
  
  emits: ["componentChange"],
  setup(props, { emit } ) {
    const showSidebar = ref(false);

    const toggleSidebar = () => {
      showSidebar.value = !showSidebar.value;
    };


    const tagName = ref("");
    const clickedTag = (event) => {
      
      tagName.value = event.target.id;
      
      emit('componentChange',tagName.value);
    }

    return {
      showSidebar,
      toggleSidebar,
      tagName,
      clickedTag
 
    };
  }

}

</script>

<style scoped>

</style>