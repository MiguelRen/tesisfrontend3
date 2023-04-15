<template>
    <div class="container-fluid d-flex h-100">
        <div class="row m-2 h-100">
            <h2>Nuevo año Escolar</h2>
            <div class="col-6 m-4 bg-light border rounded">
                <Form @submit="handleCreatePeriod" :validation-schema="periodSchema">
                    <div class="form-group">
                        <label for="dateIni"> Fecha de inicio</label>
                        <Field name="dateIni" type="date" />
                        <ErrorMessage name="dateIni" class="error-feedback" />
                        <label for="dateEnd">Fecha de fin </label>
                        <Field name="dateEnd" type="date" />
                        <ErrorMessage name="dateEnd" class="error-feedback" />
                    </div>

                    <button class="btn btn-primary btn-block">Crear</button>
                    <label>Periodo 2000-2001</label>
                    <label for="">Periodos resgistrados</label>
                </Form>
            </div>
        </div>
        <div class="row m-2 h-100">
            <div class="col-6 m-4 bg-light border rounded">
                <Form @submit="handleCreateTrimesters" :validation-schema="periodSchema">
                    <div class="form-group">
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
                        <ErrorMessage name="trim3End" class="error-feedback" />
                    </div>

                    <button class="btn btn-primary btn-block">Crear</button>

                </Form>
            </div>
        </div>
    </div>
</template>
<script>
import { Form, Field, ErrorMessage } from 'vee-validate'
import academicPeriods from '../../services/period.services.js'
import * as yup from "yup";

export default {
    name: "Academics",
    components: {
        Form,
        Field,
        ErrorMessage
    },
    data() {
        const periodSchema= yup.object().shape({
            dateIni: yup.date().required("Es necesario indicar la fecha de Inicio"),
            dateEnd: yup.date().required("Es necesario indicar la fecha de finalización")
                .when("dateIni",
                (dateIni,periodSchema)=> dateIni && periodSchema.min(dateIni,"Fecha Inicial debe ser anterior a Fecha Final"),   
                    )

                    
    });
    return{
        period: academicPeriods,
        periodSchema,
    };
},
// created(){
//     let self = this;
//     this.$validator.extend
// },
methods: {
       async handleCreatePeriod(userData){

        const result = this.period.createPeriod(userData)

    },
        async handleCreateTrimesters(){
        console.log("ñañañaña");
    }
}

}
</script>