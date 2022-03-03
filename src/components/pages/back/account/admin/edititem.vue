<template>
        <div class="flex flex-col items-start px-14">
            <div class="flex flex-col items-center">
                <h2 class="text-black text-3xl font-bold mt-7 mb-4 capitalize">Edit Food</h2>
            </div>
            <div class="px-7 pt-5 border-t w-full  border-gray-400">
                <vee-form action="" class="space-y-6" :validation-schema="schema" @submit="register">
                    <div class="grid grid-cols-2 items-center">
                        <div class="pr-7">
                            <label for="name" class="block mb-2 font-bold text-base capitalize">Title</label>
                            <vee-field type="text" required name="title" v-model="title" id="lastName" class="border border-gray-400 w-full rounded outline-none focus:border-primary py-1 px-3 text-base"/>
                            <ErrorMessage class="text-red-600" name="title" />
                        </div>
                    </div>
                    <!-- image upload section -->
                    <div class="pr-7">
                            <label for="name" class="block mb-2 font-bold text-base capitalize">Cover Image</label>
                            <input type="file" name="myImage" accept="image/x-png,image/gif,image/jpeg,image/jpg" @change="fileUpload"/>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="mb-3 xl:w-96">
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
                                m-0
                                focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none
                            "
                            name="description"
                            id="description"
                            rows="3"
                            required
                            v-model="description"
                            placeholder="Description"
                            ></textarea>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 items-center">
                        <div class="pr-7">
                            <label for="name" class="block mb-2 font-bold text-base capitalize">Category</label>
                            <vee-field as="select" v-model="category" required class="w-full capitalize border border-gray-400 py-1 rounded focus:border-primary active:border-primary" name="category" id="category">
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
                            <vee-field name="duration" type="number" v-model="duration" id="duration" required placeholder="(min)" class="border block border-gray-400 w-35 rounded outline-none focus:border-primary py-1 px-3 text-base"/>
                            <ErrorMessage class="text-red-600 block" name="duration" />
                        </div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="mb-3 xl:w-96">
                            <label for="ingredients" class="block mb-2 font-bold text-base capitalize">ingredients</label>
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
                                focus:text-gray-700 focus:bg-white focus:border-primary focus:outline-none
                            "
                            id="ingredients"
                            rows="3"
                            required
                            placeholder="Ingredients"
                            ></textarea>
                        </div>
                    </div>
                        <div>
                            <label for="steps" class="block mb-2 font-bold text-xl capitalize">Necessary Steps</label>
                            <div v-if="steps.length!==0" class="pl-10 font-semibold">
                                <ol class="space-y-3 mb-5 list-decimal">
                                    <li v-for="step in steps" :key="step" class="capitalize pl-2">{{step}}</li>
                                </ol>
                            </div>

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
                                v-model="step"
                                    ></textarea>
                                </div>
                                <div>
                                    <button @click.prevent="addSteps" class="w-50 bg-primary p-3 rounded text-white hover:bg-orange-700 transition duration-300">Add</button>    
                                </div>
                                <div v-if="isStepNull" class="flex justify-start items-center mt-1">
                                    <font-awesome-icon icon="exclamation-circle" class="text-red-900 text-base ml-5 mr-3"></font-awesome-icon>
                                    <p class="text-red-900 text-base font-bold">please fill the form first</p>
                                </div>
                        </div>
                    </div>
                    <button type="submit"  @click="submitFood" class="w-50 bg-primary p-3 rounded text-white hover:bg-orange-700 transition duration-300">Update</button>
                </vee-form>
            </div>
        </div>    
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import ADD_FOODS from "../../../../graphql/create_food.js"
export default {
    components:{
        FontAwesomeIcon
    },
    data(){
        return {
            step:"",
            isStepNull:false,
            // category:"",
            steps: [],
            separatedString:[],
            ingredients:[],
            // title:"",
            // duration:"",
            ingredient:"",
            description:"",
            schema: {
                title: 'required|alpha_spaces',
                duration:   'required',
                category:   'required'
        },
        }
    },
    methods:{
        addSteps(){
            if(this.step!=="" && this.step.replace(/\s/g, "").split("").length!==0){
                this.steps.push(this.step);
                this.joinSteps();
                this.step = "";
                this.isStepNull=false;
            }
            else if( this.step==="" || this.step.replace(/\s/g, "").length===0 ) {
                this.isStepNull=true;
            }
        },
        joinSteps(){
            this.totalStep = this.steps.join('-');
        },
        separatedStrings(){
            this.separatedString=this.totalStep.split('-');
        },
        checkCatagory(){
            if(this.category===null)
            return true;
        },
        submitFood(){
            this.$apollo.mutate(
                {
                    mutation: ADD_FOODS,
                    variables:{
                        category: this.category,
                        description: "this is the food catagorized under  fruits",
                        duration: "5",
                        ingredients: "tomato, oil, onion, pipper",
                        steps: "adding tomato to oil and adding shiro to other value bla bla bla",
                        title: "tomato wet",
                        created_by: 1
                    }
                }
            )
        },
        register(values){
            alert("valid form"+ values);
        }
    }
}
</script>