<template>
    <div class="container-fluid">
        <h1>Personal</h1>
        <Form class="d-flex bg-light flex-wrap  justify-content-around " @submit="handleCreateEmploy" :validation-schema="employeeSchema" >
            <div class="form-group   d-flex flex-wrap justify-content-around ">
                <div class="d-flex flex-column">
                    <label for="employeeid"> Cédula</label>
                    <Field class="rounded" name="employeeid"/>
                    <ErrorMessage name="employeeid" class="error-feedback"/>
                </div>
                <div class="d-flex flex-column">
                    <label for="employee1Name"> 1er Nombre</label>
                    <Field class="rounded" name="employee1Name"/>
                    <ErrorMessage name="employee1Name" class="error-feedback"/>
                </div>
                <div class="d-flex flex-column">
                    <label for="employee2Name"> 2do Nombre</label>
                    <Field class="rouded" name="employee2Name"/>
                    <ErrorMessage name="employee2Name" class="error-feedback"/>
                </div>
                
                <div class="d-flex flex-column">
                    <label for="employee1LastName"> 1er Apellido</label>
                    <Field class="rounded" name="employee1LastName" />
                    <ErrorMessage name="employee1LastName" class="error-feedback"/>
                </div>
    
                <div class="d-flex flex-column">
                    <label for="employee2LastName"> 2do Apellido</label>
                    <Field class="rounded" name="employee2LastName"/>
                    <ErrorMessage name="employee2LastName" class="error-feedback"/>
                </div>
                 
                <div class="d-flex flex-column">
                    <label for="employeeBirthday" >Nacimiento</label>
                    <Field class="rounded" name="employeeBirthday" type="date"/>
                    <ErrorMessage name="employeeBirthday" class="error-feedback"/>
                </div>
            
                <div class="d-flex flex-column">
                    <label for="employeeDirection"> Dirección</label>
                    <Field class="rounded" name="employeeDirection"/>
                    <ErrorMessage name="employeeDirection" class="error-feedback"/>
                </div>
            
                <div class="d-flex flex-column">
                    <label for="employeePhone"> Teléfono</label>
                    <Field class="rounded" name="employeePhone"/>
                    <ErrorMessage name="employeePhone" class="error-feedback"/>
                </div>
    
                <div class="d-flex flex-column">
                    <label for="employeeType"> Tipo Empleado</label>
                    <Field class="rounded" name="employeeType"/>
                    <ErrorMessage name="employeeType" class="error-feedback"/>
                </div>
    
                <div class="d-flex flex-column">
                    <label for="employeeStatus"> Estatus Empleado</label>
                    <Field class="rounded" name="employeeStatus"/>
                    <ErrorMessage name="employeeStatus" class="error-feedback"/>
                </div>

            </div>
            <div class="d-inline-flex flex-column m-3">
                <button class="btn btn-primary btn-block"> <span>Registrar</span></button>
            </div>
        </Form>

    </div>

</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import employeeServices from "../../services/employee.services.js"
export default{
    name : "Employees",
    components :{
        Form,
        Field,
        ErrorMessage
    },
    data(){
        const employeeSchema =  yup.object().shape({
            employeeid : yup.number().required("Se necesita la cédula"),
            employee1Name: yup.string().required("Se Necesita el Nombre"),
            employee2Name: yup.string(),
            employee1LastName: yup.string().required("Se Debe ingresar  un apellido"),
            employee2LastName: yup.string(),
            employeeBirthday : yup.date(),
            employeeDirection: yup.string(),
            employeePhone    : yup.number(),
            employeeType     : yup.string(),
            employeeStatus   : yup.string()
        });
        const employee = employeeServices;
        return{
            employeeSchema,
            employee,
            allEmployee: "",
        }
    },
   
    methods:{
        async handleCreateEmploy(employeeData){
            try{
                const employeeResult = await this.employee.createEmployee(employeeData);
                console.log(employeeResult);
                return employeeResult;
            }catch(error){
                console.table(error);
                return error;
            }
        }
    }
}

</script>

<style scoped>
*{
    outline: 1px solid orange;
}
</style>