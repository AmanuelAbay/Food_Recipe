<template>
<div>
    <div v-if="$apollo.loading" class="items-center"> 
        <div class="flex h-screen">
            <div class="m-auto">
                <div class="flex justify-center text-4xl items-center">Loading...</div>
            </div>
        </div>
    </div>
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
                                        <ingredientInput :ingredient="ingredient" :foodId="this.$route.params.id"/>
                                    </li>
                                </ol>

                                <!-- adding ingredients column -->
                                <div class="grid grid-cols-2 items-center mt-3">
                                    <div class="pr-7">
                                        <input @keyup.enter="addIngredients" @click="error_ingredient_name=false" v-model="ingredientName" type="text" required name="name" placeholder="Name"  id="ingredientName" class="border border-gray-400 w-full rounded outline-none focus:border-primary py-1 px-3 text-base"/>
                                        <div v-if="error_ingredient_name" class="flex justify-start items-center">
                                            <font-awesome-icon icon="exclamation-circle" class="text-red-900 text-base ml-5 mr-3"></font-awesome-icon>
                                            <p class="text-red-900 text-base font-bold">error</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="flex justify-start items-center space-x-3">
                                            <input @keyup.enter="addIngredients" @click="error_ingredient_amount=false" v-model="amount" name="duration" min="0" type="number" id="amount" required placeholder="(gram)" class="border block border-gray-400 w-35 rounded outline-none focus:border-primary py-1 px-3 text-base"/>
                                            <button @click.prevent="addIngredients" :class="{'cursor-not-allowed': loading}" :disable="loading" class="w-50 bg-primary p-3 rounded text-white hover:bg-primary transition duration-300">Add</button>
                                        </div>

                                        <div class="grid grid-cols-2 items-center">
                                            <div v-if="error_ingredient_amount" class="flex justify-start items-center">
                                                <font-awesome-icon icon="exclamation-circle" class="text-red-900 text-base ml-5 mr-3"></font-awesome-icon>
                                                <p class="text-red-900 text-base font-bold">error</p>
                                            </div>
                                        </div>

                                        <div class="grid grid-cols-2 items-center">
                                            <div v-if="error" class="flex justify-start items-center">
                                                <font-awesome-icon icon="exclamation-circle" class="text-red-900 text-base ml-5 mr-3"></font-awesome-icon>
                                                <p class="text-red-900 text-base font-bold">error</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
                            <div class="grid grid-cols-2 items-center">
                                <div class="pr-7">
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
                                    m-0
                                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                                "
                                id="steps"
                                rows="4"
                                placeholder="Steps"
                                @keyup.enter="addSteps"
                                @click.prevent="this.isStepNull=false"
                                v-model="step"
                                    ></textarea>
                                </div>
                                <div>
                                    <button @click.prevent="addSteps" class="w-50 bg-primary p-3 rounded text-white hover:bg-orange-700 transition duration-300">Add</button>    
                                </div>
                                <div v-if="isStepNull" class="flex justify-start items-center mt-1">
                                    <font-awesome-icon icon="exclamation-circle" class="text-red-900 text-base ml-5 mr-3"></font-awesome-icon>
                                    <p class="text-red-900 text-base font-bold">Empty Step</p>
                                </div>
                            </div>
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
import ADD_STEP from "../../../../graphql/ADD_STEP.js";
import STEP from "../../../../graphql/STEPS.js";
import ADD_INGREDIENT from "../../../../graphql/ADD_INGREDIENT.js";
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
            isStepNull:false,
            error:false,
            toggleup:true,
            error_ingredient_name:false,
            error_ingredient_amount:false,
            ingredientName:"",
            step: "",
            amount:"",
            loading:false,
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
                    this.loading=true;
                    this.$apollo.mutate(
                    {
                        mutation: EDIT_FOOD,
                        variables:{
                            category: category,
                            description: description,
                            duration: duration,
                            title: title.toUpperCase(),
                            id: this.$route.params.id
                                    }
                                }
                            )
                }
                location.replace("/setting/dashboard");
            }
            else this.error=true
        },
        addIngredients(){
            if(!(this.ingredientName === null || this.ingredientName.trim() === '')){
                if(!(this.amount === null || this.amount<=0))
                {
                    // adding ingredients
                    this.loading=true;
                    this.$apollo.mutate({
                        mutation: ADD_INGREDIENT,
                        variables: { 
                            food_id:this.$route.params.id,
                            name:this.ingredientName,
                            amount:this.amount
                         },
                    });
                    this.loading=false;
                    this.ingredientName="";
                    this.amount="";
                }
            else this.error_ingredient_amount = true
            }
            else this.error_ingredient_name = true
        },
        addSteps(){
            if(!(this.step === null || this.step.trim() === '')){
                this.loading=true;
                    this.$apollo.mutate({
                        mutation: ADD_STEP,
                        variables: { 
                            food_id:this.$route.params.id,
                            step_number:this.steps.length+1,
                            step_description:this.step
                         },
                    });
                this.loading = false;
                this.isStepNull = false;
                this.step="";
            }
            else if( this.step === null || this.step.trim() === '' ) {
                this.isStepNull=true;
            }
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