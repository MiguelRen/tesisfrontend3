<template>
    <div class=" row  m-0 p-0 ">
        <div class="row m-0 p-0  ">
            <div class="col-3  child border mx-0   gray500 h-100 rounded-pill p-0 text-center text-white"> Total Estudiantes : 859</div>
            <div class="col-3     child border mx-0   gray500 rounded-pill p-0 text-center text-white"> Total Profesores : 69</div>
            <div class="col-6  child border mx-0   gray500 bg-gradient  rounded-pill p-0 text-center text-white"> Total Clases : 97</div>
        </div>
        <div class="row  m-0 p-0" >
            <div class="col-3 child  gray400 h-100 p-0">% Estuduantes</div>
            <div class="col-3 child  border rounded-pill  gray500 h-100 m-0 p-0 text-center">Varones </div>
            <div class="col-3 child  border rounded-pill  gray300 h-100 m-0 p-0 text-center">Hembras</div>
            <div class="col-3 child  border rounded-pill  gray400 h-100 m-0 p-0 text-center">info aquí</div>
        </div>
        <div class="row  m-0 p-0">
                <div class="col-4 child gray900 d-flex justify-content-center align-items-center text-center rounded m-0 h-100 p-0">
                    <h1 class="text-white  display-3">Bienvenido <br>a <br>SimpleClass</h1>
                </div>
                <div class="col-8 child gray500  text-center d-flex align-items-center  justify-content-center  rounded m-0 h-100 p-0">
                    <h1>Manejador de Escuelas</h1>
                </div>
        </div>
        <div class="row m-0 p-0">
                <div class="col-6 child  gray400  d-flex align-items-center justify-content-center text-center rounded h-100 m-0 p-0">
                  <h1 class="text-white">Calendario</h1>  
                </div>
                <div class="col-6 child gray600 text-center   rounded h-100 m-0 p-0">
                    <h3 class="text-white">Noticias</h3>
                </div>

                
                
        </div>
    </div>
</template>

<script>

export default{

}
</script>

<style scoped>
.newborder{
    border-radius: 50% 10% 50% 10%;
}
.font{
    font-size: 14px;
}
@media (max-with:720px){
    .font{
        font-size: 10px ;
    }
}

.gray100{

    background-color:#f9f9fb !important
}
.gray200{

       background-color: #e8edef !important
    }
.gray300{

   background-color :#dfe2e7 !important
}
.gray400{

    background-color:#ced4da !important;
    background-image: var(--bs-gradient) !important;
}
.gray500{

    background-color:#adb4bc !important;
    background-image: var(--bs-gradient) !important;
}
.gray600{

    background-color:#6c747c !important;
    background-image: var(--bs-gradient) !important;
}
.gray700{

    background-color:#495156 !important
}
.gray800{

    background:#343a40 !important
}
.gray900{

    background-color:#343a40 !important
}
</style>