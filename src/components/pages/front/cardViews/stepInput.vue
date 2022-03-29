<template>
    <div class="grid grid-cols-2 items-center">
        <div class="pr-7">
            <!-- <label for="name" class="block mb-2 font-bold text-base capitalize">{{step.description}}</label> -->
            <input :value="step.description" type="text" required name="title" placeholder="Step Description"  :id="'step'+step.id" class="border border-gray-400 w-full rounded outline-none focus:border-primary py-1 px-3 text-base"/>
        </div>
        <div class="flex justify-start items-center space-x-3">
            <button @click.prevent="updateStep(step.id)" class="w-50 bg-green-500 p-3 rounded text-white hover:bg-green-700 transition duration-300">Update</button>    
            <button @click.prevent="deleteStep(step.id)" class="w-50 bg-red-500 p-3 rounded text-white hover:bg-red-700 transition duration-300">Delete</button>
        </div>
        <div class="grid grid-cols-2 items-center">
            <div v-if="error" class="flex justify-start items-center">
                <font-awesome-icon icon="exclamation-circle" class="text-red-900 text-base ml-5 mr-3"></font-awesome-icon>
                <p class="text-red-900 text-base font-bold">error</p>
            </div>
        </div>
    </div>
</template>
<script>
import UPDATE_STEP from "../../../graphql/UPDATE_STEP.js"
import DELETE_STEP from "../../../graphql/DELETE_STEP.js"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
    props:{
        step: {
            type: Object,
            default: () => ({})
            }
    },
    components: {
        FontAwesomeIcon
    },
    data(){
        return {
            error:false
        }
    },
    methods:{
        updateStep(id){
            let step = document.getElementById('step'+id).value;
            if(!(step === null || step.trim() === '')){
                this.$apollo.mutate({
                    mutation: UPDATE_STEP,
                    variables: { 
                        id:id,
                        description:step
                         },
                });

                this.error=false
                console.log("Successfully changed")
            }
            else this.error=true
        },
        deleteStep(id){
            // confirmation will be requested
            this.$apollo.mutate({
                mutation: DELETE_STEP,
                variables: { id:id },
            });
        }
    }
}
</script>