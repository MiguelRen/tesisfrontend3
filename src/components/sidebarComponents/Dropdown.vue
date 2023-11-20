<template>
    <div @click="toggler">
        <slot name="toggler">
            <!-- <button>toggler</button>                 -->
        </slot>
        
        <slot/>
    </div>



</template>
<script>
    export default{
        name : 'Dropdown',
        provide () {
            return{
                sharedState : this.sharedState    
            }
        },
        data(){
            return{
                sharedState : {
                    active : false
                }
            }
        },
        methods : {
            toggler(){
                this.sharedState.active = !this.sharedState.active
            }
        }
    }
</script>