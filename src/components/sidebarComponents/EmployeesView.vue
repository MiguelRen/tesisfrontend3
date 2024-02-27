<template>
   

    <div class="row h-100 w-100 p-0 m-0">

<div class="col bg-secondary">
    <h1 class="m-0 p-0">Personal Agregado</h1>
    <ul>
        <li v-for="(item,index) in allEmployee">
            {{ index + 1 }} - {{item.emp_employeeid}} 
            - {{ item.emp_employee1name}} - {{ item.emp_employee2name }} 
            - {{ item.emp_employee1lastname }} - {{ item.emp_employee2lastname }}
            - {{ item.emp_employeeadress }} - {{ item.emp_employeebirth }}
            - {{ item.emp_employeephone }} - {{ item.emp_employeestatus }}
            - {{ item.emp_employeetype }}
        </li>
    </ul>
</div>

</div>
</template>
<script>
import employeeServices from '../../services/employee.services.js'

    export default{
        name : 'EmployeesView',
        data(){
            const employee = employeeServices; 
            return{
                employee :employeeServices,
                allEmployee: "",
            }
        },
   
         methods : {
            async  getAllEmployee() {
                try {
                    this.allEmployee = await this.employee.getEmployee();
                    // console.log(this.allEmployee);
                    
                } catch (error) {
                    console.log(error);
                }
             }

        },
        async mounted(){
            
                this.getAllEmployee();
            
         
        },
    }
</script>