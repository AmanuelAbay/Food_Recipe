<template>
<div>
    <div v-if="$apollo.loading" class="items-center"> Loading... </div>
    <div v-else class="flex flex-col items-start px-14">
        <div class="flex flex-col items-center">
            <h2 class="text-black text-3xl font-bold mt-7 mb-4 capitalize" @click="display">Edit Food</h2>
        </div>
        <div class="px-7 pt-5 border-t w-full  border-gray-400">
            <vee-form action="" class="space-y-6" :validation-schema="schema">
                <div class="grid grid-cols-2 items-center">
                    <div class="pr-7">
                        <label for="name" class="block mb-2 font-bold text-base capitalize">Title</label>
                        <vee-field :value="foods[0].title" type="text" required name="title" placeholder="Name" id="title" class="border border-gray-400 w-full rounded outline-none focus:border-primary py-1 px-3 text-base"/>
                        <ErrorMessage class="text-red-600" name="title"/>
                    </div>
                </div>
                <!-- image upload section -->
                <div class="pr-7">
                        <label for="name" class="block mb-2 font-bold text-base capitalize">Cover Image</label>
                        <input type="file" name="myImage" accept="image/x-png,image/gif,image/jpeg,image/jpg" @change="fileUpload"/>
                </div>
                <div class="">
                    <div class="mb-3 xl:w-110">
                        <label for="description" class="block mb-2 font-bold text-base capitalize">Description</label>
                        <textarea
                        class="
                            form-control
                            block
                            w-full
                            px-3
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            
                            focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none
                        "
                        :value="foods[0].description"
                        rows="5"
                        required
                        placeholder="Description"
                        id="description"
                        ></textarea>
                    </div>
                    <div class="grid grid-cols-2 items-center">
                        <div v-if="error" class="flex justify-start items-center">
                            <font-awesome-icon icon="exclamation-circle" class="text-red-700 text-base ml-5 mr-3"></font-awesome-icon>
                            <p class="text-red-700 text-base font-bold">can't be empty!</p>
                        </div>
                    </div>
                </div>
                <div class="grid grid-cols-2 items-center">
                    <div class="pr-7">
                        <label for="name" class="block mb-2 font-bold text-base capitalize">Category</label>
                        <vee-field as="select" :value="foods[0].category" required class="w-full capitalize border border-gray-400 py-1 rounded focus:border-primary active:border-primary" name="category" id="category">
                            <option value="" disabled selected>Category</option>
                            <option value="fruits">Fruits</option>
                            <option value="vegetables">Vegetables</option>
                            <option value="grains">Grains</option>
                            <option value="proteins">Protein</option>
                            <option value="meats">meats</option>
                            <option value="dairys">Dairy</option>
                            <option value="poultrys">Poultry</option>
                            <option value="seafoods">Fish and seafood</option>
                            <option value="eggs">Eggs</option>
                            <option value="seeds">Nuts and seeds</option>
                            <option value="beans">Legumes/beans</option>
                        </vee-field>
                        <ErrorMessage class="text-red-600" name="category" />
                    </div>
                    <div class="block">
                        <label for="duration" class="block mb-2 font-bold text-base capitalize">time it takes (min)</label>
                        <vee-field name="duration" min="0" :value="foods[0].duration" type="number" id="duration" required placeholder="(min)" class="border block border-gray-400 w-35 rounded outline-none focus:border-primary py-1 px-3 text-base"/>
                        <ErrorMessage class="text-red-600 block" name="duration" />
                    </div>
                </div>
                <div class="grid grid-cols-2">
                    <div class="mb-3 xl:w-96">
                        <label for="ingredients" class="block mb-2 font-bold text-xl capitalize">ingredients</label>
                            <div class="pl-10 font-semibold">
                                <ol class="space-y-3 mb-5 list-decimal">
                                    <li v-for="ingredient in foods[0].ingredients" :key="ingredient.id" class="capitalize pl-2">
                                        <ingredientInput :ingredient="ingredient"/>
                                    </li>
                                </ol>
                            </div>
                    </div>
                </div>
                    <div>
                        <label for="steps" class="block mb-2 font-bold text-xl capitalize">Necessary Steps</label>
                        <div class="pl-10 font-semibold">
                            <ol class="space-y-3 mb-5 list-decimal">
                                <li v-for="step in steps" :key="step.id" class="capitalize pl-2">
                                <stepInput :step="step"/>
                                </li>
                            </ol>
                        </div>
                </div>
                <button type="submit" @click.prevent="update_food" class="w-50 bg-primary p-3 rounded text-white hover:bg-orange-700 transition duration-300">Done</button>
            </vee-form>
        </div>
    </div>    
</div>
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import EDIT_FOOD from "../../../../graphql/EDIT_FOOD.js";
import FILTER_FOOD from "../../../../graphql/FILTER_FOODS.js";
import STEP from "../../../../graphql/STEPS.js";
import stepInput from "../../../front/cardViews/stepInput.vue";
import ingredientInput from "../../../front/cardViews/ingredientInput.vue";
export default {
    components:{
        FontAwesomeIcon,
        stepInput,
        ingredientInput
    },
    data(){
        return {
            error:false,
            foods:[],
            steps: [],
            schema: {
                title: 'required|alpha_spaces',
                duration:   'required',
                category:   'required'
        },
        }
    },
    methods:{
        update_food(){
            let description = document.getElementById("description").value;
            let category = document.getElementById("category").value;
            let title = document.getElementById("title").value;
            let duration = document.getElementById("duration").value;
            if(!(description === null || description.trim() === ''))
            {
                if(!(title === null || title.trim() === ''))
                if(!(duration === null || duration.trim() === '')){
                    this.$apollo.mutate(
                    {
                        mutation: EDIT_FOOD,
                        variables:{
                            category: category,
                            description: description,
                            duration: duration,
                            title: title,
                            id: this.$route.params.id
                                    }
                                }
                            )
                location.replace("/setting/dashboard");
                }
            }
            else this.error=true
        }
        
    },
    apollo:{
        foods:{
            query: FILTER_FOOD,
            variables () {   
                return {
                    food_id: this.$route.params.id // id from route param
                }
            },
            loadingKey: 'loading',
            pollInterval: 500
        },
        steps:{
            query: STEP,
            variables () {   
                return {
                    food_id: this.$route.params.id // id from route param
                }
            },
            loadingKey: 'loading',
            pollInterval: 500
        }
    }
}
</script>