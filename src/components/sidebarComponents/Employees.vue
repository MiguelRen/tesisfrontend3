<template>
    <div class="container-fluid">
        <h1>Personal</h1>
        <Form @submit="handleCreateEmploy" :validation-schema="employeeSchema" >
            <div class="form-group bg-light border ">

                <label for="employee1Name"> 1er Nombre del Empleado</label>
                <Field name="employee1Name"/>
                <ErrorMessage name="employee1Name" class="error-feedback"/>
    
                <label for="employee2Name"> 2do Nombre del Empleado</label>
                <Field name="employee2Name"/>
                <ErrorMessage name="employee2Name" class="error-feedback"/>
    
                <label for="employee1LastName"> 1er Apellido del Empleado</label>
                <Field name="employee1LastName"/>
                <ErrorMessage name="employee1LastName" class="error-feedback"/>
    
                <label for="employee2LastName"> 2do Apellido del Empleado</label>
                <Field name="employee2LastName"/>
                <ErrorMessage name="employee2LastName" class="error-feedback"/>
                 
                <label for="employeeBirthday"> Fecha de Nacimiento</label>
                <Field name="employeeBirthday"/>
                <ErrorMessage name="employeeBirthday" class="error-feedback"/>
            
                <label for="employeeDirection"> Dirección</label>
                <Field name="employeeDirection"/>
                <ErrorMessage name="employeeDirection" class="error-feedback"/>
    
                <label for="employeePhone"> Teléfono</label>
                <Field name="employeePhone"/>
                <ErrorMessage name="employeePhone" class="error-feedback"/>
    
                <label for="employeeType"> Tipo  de Empleado</label>
                <Field name="employeeType"/>
                <ErrorMessage name="employeeType" class="error-feedback"/>
    
                <label for="employeeStatus"> Estatus del Empleado</label>
                <Field name="employeeStatus"/>
                <ErrorMessage name="employeeStatus" class="error-feedback"/>

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