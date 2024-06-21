<template >
 
      <div class="row m-0 p-0 container-fluid  heightData15 w-100">
        <div class="col m-0 p-0 h-100  m-0">
          <div class="row p-0 m-0 h-50  m-0 ">
            <div
              class=" col-4 border gray500  rounded-pill text-center text-white "
            >
              Total Estudiantes : 859
            </div>
            <div
              class=" col-4 border gray500 rounded-pill text-center text-white"
            >
              Total Profesores : 69
            </div>
            <div
              class=" col-4 border gray500 bg-gradient rounded-pill text-center text-white "
            >
              Total Clases : 97
            </div>
          </div>
          <div class="row p-0 h-50 w-100 m-1">
            <div class="col-3 gray400  text center rounded">
              % Estudiantes
            </div>
            <div class="col-3 border rounded-pill gray500  text-center">
              Varones
            </div>
            <div class="col-3 border rounded-pill gray300  text-center">
              Hembras
            </div>
            <div class="col-3 border rounded-pill gray400  text-center">
              info aquí
            </div>
          </div>
        </div>
      </div>

      <div class="row container-fluid  m-0 p-4 heightData85  w-100">
        <div
          class="col-sm-4 m-2 gray900 d-flex align-items-center justify-content-center text-center rounded   "
        >
            <h1 class="text-white display-4 ">
              Bienvenido<br />
              a <br />SimpleClass
            </h1>
         
        </div>
        <div
          class="col-sm-7 m-2 gray500 text-center d-flex align-items-center rounded  "
        >
          <div class=" w-100">
            <h2>Manejador de Escuelas</h2>
          </div>
        </div>

        <div
          class="col-sm-5 m-2 gray400 d-flex align-items-center justify-content-center text-center rounded    "
        >
          <h1 class="text-black">Calendario</h1>
        </div>
        <div class="col-sm-6 m-2 gray600 d-flex align-items-center justify-content-center text-center rounded   ">
          <h3 class="text-white">Noticias</h3>
        </div>
      </div>
   
</template>

<script>
export default {};
</script>

<style scoped>
.newborder {
  border-radius: 50% 10% 50% 10%;
}
.font {
  font-size: 14px;
}
.heightData15{
  height:15%
}
.heightData85{
  height:85%;
}
@media (max-with: 720px) {
  .font {
    font-size: 10px;
  }
}

.gray100 {
  background-color: #f9f9fb !important;
}
.gray200 {
  background-color: #e8edef !important;
}
.gray300 {
  background-color: #dfe2e7 !important;
}
.gray400 {
  background-color: #ced4da !important;
  background-image: var(--bs-gradient) !important;
}
.gray500 {
  background-color: #adb4bc !important;
  background-image: var(--bs-gradient) !important;
}
.gray600 {
  background-color: #6c747c !important;
  background-image: var(--bs-gradient) !important;
}
.gray700 {
  background-color: #495156 !important;
}
.gray800 {
  background: #343a40 !important;
}
.gray900 {
  background-color: #343a40 !important;
}


</style>
