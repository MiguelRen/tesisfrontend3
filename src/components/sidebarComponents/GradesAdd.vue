<template>
    <div class="container-fluid m-0 p-0  h-100 w-100">
        <Form>
            <label for="gradesCreateSection">Agregar</label>
            
            <Field as="select" name="gradesCreateSection">
                <option value="">
                    la casa
                </option>
                <option value="">
                    la silla
                </option>
                <option value="">
                    la stufa
                </option>
            </Field>
        </Form>
    </div>
</template>

<script>
import {Form, Field, ErrorMessage} from "vee-validate";


export default{
    name:"GradesAdd",
    components:{
        Form,
        Field,
        ErrorMessage,
    }

    }

</script>

<style>
</style>