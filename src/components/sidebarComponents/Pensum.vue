<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col  bg-secondary">
                <h1>creacion de Pensum</h1>
                <Form>
                    <label for=""> Numero de Niveles</label>
                    <Field name="year" placeholder="nombre"/>
                    <h2>La cantidad de niveles que se vayya ajustando con la cantidad incluida Arriba</h2>
                    <Field name="nivel1" placeholder="Nivel 1"/>
                    <Field name="nivel2"  placeholder="nivel 2"/>
                    <Field name="nivel3" placeholder="nivel 3"/>
                    <Field name="nivel4" placeholder="nivel 4"/>
                    <Field name="nivel5" placeholder="nivel 5"/>
                    <Field name="nivel6" placeholder="nivel 6"/>

                </Form>
                
            </div>
            <div class="col bg-secondary">
                <h1>Revisión de Pensum</h1>
            </div>

        </div>
        <!-- <div class="row">
            <label for=""> Actualización de Pensum</label>
        </div> -->

     
        <!-- <div class="row">
            <label for=""> Eliminación de Pensum (Debería ir al la)</label>
        </div> -->
    </div>
</template>

<script>
    import  { Form, ErrorMessage, Field} from "vee-validate";
    import * as yup from "yup"

    export default{
        components:{
            Form,
            ErrorMessage,
            Field
        }
        }
    
</script>