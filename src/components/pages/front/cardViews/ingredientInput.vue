<template>
    <div class="grid grid-cols-2 items-center">
        <div class="pr-7">
            <input @click="error.false" :value="ingredient.name" type="text" required name="name" placeholder="Name"  :id="'name'+ingredient.id" class="border border-gray-400 w-full rounded outline-none focus:border-primary py-1 px-3 text-base"/>
        </div>
        <div class="flex justify-start items-center space-x-3">
            <input :value="ingredient.amount" name="duration" type="number" :id="'amount'+ingredient.id" required placeholder="(gram)" class="border block border-gray-400 w-35 rounded outline-none focus:border-primary py-1 px-3 text-base"/>
            <button @click.prevent="updateIngredient(ingredient.id)" class="w-50 bg-green-500 p-3 rounded text-white hover:bg-green-700 transition duration-300">Update</button>       
            <button @click.prevent="deleteIngredient(ingredient.id)" class="w-50 bg-red-500 p-3 rounded text-white hover:bg-red-700 transition duration-300">Delete</button>
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
import UPDATE_INGREDIENT from "../../../graphql/UPDATE_INGREDIENT.js"
import DELETE_INGREDIENT from "../../../graphql/DELETE_INGREDIENT.js"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
    props:{
        ingredient: {
            type: Object,
            default: () => ({})
            }
    },
    data(){
        return {
            error:false
        }
    },
    components: {
        FontAwesomeIcon
    },
    methods:{
        updateIngredient(id){
            let ingredient_name = document.getElementById('name'+id).value;
            let ingredient_amount= document.getElementById('amount'+id).value;
            if(!(ingredient_amount === null || ingredient_amount.trim() === '') && !(ingredient_name == null || ingredient_name.trim() === '')){
                this.$apollo.mutate({
                        mutation: UPDATE_INGREDIENT,
                        variables: { 
                            id:id,
                            name:ingredient_name,
                            amount:ingredient_amount
                         },
                    });
                this.error=false
                console.log("Successfully changed")
            }
            else this.error=true
        },
        deleteIngredient(id){
            this.$apollo.mutate({
                mutation: DELETE_INGREDIENT,
                variables: { id: id },
            });
        }
    }
}
</script>