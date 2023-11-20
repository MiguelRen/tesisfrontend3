<template>
    <div>
        The other side
    </div>

    <div>
        <table >
  <thead>
    <tr>
      <th scope="col">Nombre</th>
      <th scope="col">Apellido</th>
      <th scope="col">Cédula</th>
      <th scope="col">Teléfono</th>
    </tr>
  </thead>

  <tbody>
     <tr v-for=" item in employeeRowData" :key="index" >
        <th scope="row"></th>
        
        <td>{{ item.empEmployeeId}}</td> 
        <td>{{ item.empEmployeeFirstName}}</td>
        <td>{{ item.empEmployeePhoneNumber}}</td>
         
    </tr> 
    
  </tbody>
</table>

</div> 
</template>
<script>
import employeeServices from '../../services/employee.services'

    export default{
        name : 'EmployeesView',
        data(){
            const employee = employeeServices; 
            return{
                employeeRowData : null,
                employee ,
            }
        },
         methods : {
            async  list() {
                try {
                    // console.log(await this.employee.fetchEmployee());
                    const data = await this.employee.fetchEmployee();
                    console.log(typeof(data.data));
                    console.log(data.data);
                    this.employeeRowData = data.data;
                    console.log(this.employeeRowData);

                    
                } catch (error) {
                    console.log(error);
                }
             }

        },
        async mounted(){
            
                this.list()
            
         
        },
    }
</script>