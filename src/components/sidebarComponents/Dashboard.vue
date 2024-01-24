<template>
    <div class="container-fluid  p-0">
        <div class="row  my-4 mx-0  font">
            <div class="col  child border mx-0 border-primary bg-light h-100 rounded-pill  p-0"> Total Estudiantes</div>
            <div class="col  child border mx-0 border-primary bg-light h-100 rounded-pill p-0"> Total Profesores</div>
            <div class="col  child border mx-0 border-primary bg-light h-100 rounded-pill p-0"> Total Clases</div>
        </div>
        <div class="row  my-4 mx-0 justify-content-between" >
            <div class="col-2 child  bg-light h-100 p-0">% Estuduantes</div>
            <div class="col-2 child  border rounded-pill  bg-primary h-100 m-0 p-0">Varones </div>
            <div class="col-2 child  border rounded-pill  bg-secondary h-100 m-0 p-0">Hembras</div>
            <div class="col child  border rounded-pill  bg-primary h-100 m-0 p-0">info aquí</div>
        </div>
        <div class="row gx-4 d-flex justify-content-center  my-3 mx-0  p-0">
                <div class="col child bg-primary text-center rounded m-0 h-100 p-0">
                    <h1 class="text-white">Bienvenido a SimpleClass</h1>
                </div>
                <div class="col child bg-light  text-center    rounded m-0 h-100 p-0">
                    <h2>Manejador de Escuelas</h2>
                </div>
        </div>
        <div class="row d-flex justify-content-center  my-3  mx-0  p-0">
                <div class="col child bg-success text-center   rounded h-100 m-0 p-0">
                  <h3 class="text-white">Calendario</h3>  
                </div>
                <div class="col child bg-primary text-center   rounded h-100 m-0 p-0">
                    <h3 class="text-white">Noticias</h3>
                </div>

                <div class="jumbotron" style=" color: red">
                    <strong>
                        <strong>
                            Importante !!!
                        </strong>
                        <p>
                            Todas las funcionalidades estan parcialmente elaboradas.
                            NO se recomienda ingresar datos... por los momentos
                        </p>
                    </strong>
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
  
</style>