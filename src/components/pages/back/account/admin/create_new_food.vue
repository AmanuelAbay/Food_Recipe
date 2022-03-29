<template>
        <div class="flex flex-col items-start px-14">
            <div class="flex flex-col items-center">
                <h2 class="text-black text-3xl font-bold mt-7 mb-4 capitalize">create new food</h2>
            </div>
            <div class="px-7 pt-5 border-t w-full  border-gray-400">
                <vee-form action="" class="space-y-6" :validation-schema="schema" @submit="addRecepie">
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
                            <input type="file" multiple name="image" accept="image/*" @change="fileUpload($event)"/>
                            <div  class="mt-8 flex overflow-y-hidden overflow-x-auto">
                            <div
                            class="relative flex w-32 mr-3"
                            v-for="(image, index) in images"
                            :key="index"
                            >
                            <img class="w-full" :key="iindex" :src="image" alt="" />
                            <button
                                type="button"
                                class="rounded shadow-lg absolute top-0 bg-white"
                                @click="removeImage(index)"
                            >
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24px"
                                viewBox="0 0 24 24"
                                width="24px"
                                fill="red"
                                >
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path d="M0 0h24v24H0V0z" fill="none" />
                                <path
                                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
                                />
                                </svg>
                            </button>
                            </div>
                            <div class="grid grid-cols-2 items-center">
                                <div v-if="image_error" class="flex justify-start items-center">
                                    <font-awesome-icon icon="exclamation-circle" class="text-red-900 text-base ml-5 mr-3"></font-awesome-icon>
                                    <p class="text-red-900 text-base font-bold">at leaset one image is needed</p>
                                </div>
                            </div>
                        </div>
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
                            <vee-field name="duration" min="0" type="number" v-model="duration" id="duration" required placeholder="(min)" class="border block border-gray-400 w-35 rounded outline-none focus:border-primary py-1 px-3 text-base"/>
                            <ErrorMessage class="text-red-600 block" name="duration" />
                        </div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="mb-3 xl:w-96">
                            <label for="ingredients" class="block mb-2 font-bold text-base capitalize">ingredients</label>
                            <div v-if="ingredients.length!==0" class="pl-10 font-semibold">
                                <ol class="space-y-3 mb-5 list-decimal">
                                    <li v-for="ingredient in ingredients" :key="ingredient.name" class="capitalize pl-2">{{ingredient.name}} {{separator}}{{ingredient.amount}}</li>
                                </ol>
                            </div>

                            <div class="grid grid-cols-2 items-center">
                            <div class="pr-7">
                                <input @keyup.enter="addIngredients" @click="error_ingredient_name=false" v-model="ingredientName" type="text" required name="name" placeholder="Name"  id="ingredientName" class="border border-gray-400 w-full rounded outline-none focus:border-primary py-1 px-3 text-base"/>
                                <div v-if="error_ingredient_name" class="flex justify-start items-center">
                                    <font-awesome-icon icon="exclamation-circle" class="text-red-900 text-base ml-5 mr-3"></font-awesome-icon>
                                    <p class="text-red-900 text-base font-bold">error</p>
                                </div>
                            </div>
                            <div class="flex justify-start items-center space-x-3">
                                <input @keyup.enter="addIngredients" @click="error_ingredient_amount=false" v-model="amount" name="duration" min="0" type="number" id="amount" required placeholder="(gram)" class="border block border-gray-400 w-35 rounded outline-none focus:border-primary py-1 px-3 text-base"/>
                                <button @click.prevent="addIngredients" class="w-50 bg-primary p-3 rounded text-white hover:bg-primary transition duration-300">Add</button>
                            </div>
                            <div class="grid grid-cols-2 items-center">
                                <div v-if="error_ingredient_amount" class="flex justify-start items-center">
                                    <font-awesome-icon icon="exclamation-circle" class="text-red-900 text-base ml-5 mr-3"></font-awesome-icon>
                                    <p class="text-red-900 text-base font-bold">error</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                        <div>
                            <label for="steps" class="block mb-2 font-bold text-xl capitalize">Necessary Steps</label>
                            <div v-if="steps.length!==0" class="pl-10 font-semibold">
                                <ol class="space-y-3 mb-5 list-decimal">
                                    <li v-for="step in steps" :key="step" class="capitalize pl-2">{{step.description}}</li>
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
                    <div class="flex justify-start items-center space-x-5">
                        <button type="submit" class="w-50 flex flex-col bg-primary p-3 rounded text-white hover:bg-red-700 transition duration-300">
                        <div v-if="loading" class="mx-auto w-full" :class="{'cursor-not-allowed': loading}" :disable="loading">
                                <div class="bar bar1"></div>
                                <div class="bar bar2"></div>
                                <div class="bar bar3"></div>
                                <div class="bar bar4"></div>
                                <div class="bar bar5"></div>
                                <div class="bar bar6"></div>
                                <div class="bar bar7"></div>
                                <div class="bar bar8"></div>
                            </div>
                            <div v-if="!loading" class="capitalize">
                                create
                            </div>
                        </button>
                        <button @click.prevent="cancel()" class="w-50 flex flex-col bg-red-500 p-3 rounded text-white hover:bg-orange-700 transition duration-300">
                            <div v-if="!loading" class="capitalize">
                                Cancel
                            </div>
                        </button>
                    </div>
                </vee-form>
            </div>
        </div>    
</template>
<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import ADD_FOODS from "../../../../graphql/create_food.js"
import UPLOAD_IMAGE from "../../../../graphql/UPLOAD_IMAGE.js"
import {userId} from "../../../../utils/user.js"
export default {
    components:{
        FontAwesomeIcon
    },
    data(){
        return {
            error_ingredient_name:false,
            error_ingredient_amount:false,
            step:"",
            isStepNull:false,
            steps: [],
            images:[],
            images_url:[],
            ingredients:[],
            ingredientName:"",
            description:"",
            separator:" Amount ",
            amount:null,
            loading:false,
            schema: {
                title: 'required|alpha_spaces',
                duration:   'required',
                category:   'required'
        },
        }
    },
    methods:{
        cancel(){location.replace("/setting/dashboard");},
            addSteps(){
            if(!(this.step === null || this.step.trim() === '')){
                let step={step_number:this.steps.length+1, description:this.step}
                this.steps.push(step);
                this.isStepNull=false;
                this.step="";
            }
            else if( this.step === null || this.step.trim() === '' ) {
                this.isStepNull=true;
            }
        },
            addIngredients(){
            if(!(this.ingredientName === null || this.ingredientName.trim() === '')){
                if(!(this.amount === null || this.amount<=0))
                {
                    let ingredient = {name:this.ingredientName, amount:Math.round(this.amount)}
                    this.ingredients.push(ingredient);
                    this.ingredientName="";
                    this.amount="";
                }
            else this.error_ingredient_amount = true
            }
            else this.error_ingredient_name = true
        },
            fileUpload(event) {
            this.image_error = false;
            const selectedImages = event.target.files;
            for (let i = 0; i < selectedImages.length; i++) {
                this.createBase64Image(selectedImages[i]);
               }
            // let path = this.$apollo.mutate({
            //   mutation: UPLOAD_IMAGE,
            //   variables:{
            //       image: this.images[1],
            //       folder: "Images",
            //   }
            // });
            },
            createBase64Image(ImageObject) {
            const reader = new FileReader();
            reader.onload = () => {
                this.images.push(reader.result);
            }
            reader.readAsDataURL(ImageObject);
            },
            async storePath(food){
                for(let image_index=0; image_index<this.images.length;image_index++){
                    let path = await this.$apollo.mutate({
                    mutation: UPLOAD_IMAGE,
                    variables:{
                        image: this.images[image_index],
                        folder: "Images",
                    }
                    });
                    this.images_url.push({ image_status:"not_profile", path:path.data.upload.path})
                    if(image_index === (this.images.length-1)){
                        this.$apollo.mutate(
                                    {
                                        mutation: ADD_FOODS,
                                        variables:{
                                                title:food.title.toUpperCase(),
                                                steps: this.steps,
                                                ingredients: this.ingredients,
                                                category: food.category,
                                                user_id: userId.value,
                                                description: this.description,
                                                duration: food.duration,
                                                images_url:this.images_url
                                                }
                                    }
                                )
                                this.loading = false
                                location.replace("/setting/dashboard");
                    }
                }
            },
            removeImage(index){
                this.images.splice(index, 1);
            },
        addRecepie(food){
            if(this.ingredients.length>0){
            if(this.steps.length>0){
                if(this.images.length>0){
                    this.loading=true
                    this.storePath(food)
            }
                else this.image_error=true;
            }
            else this.isStepNull=true;
            }
            else this.error_ingredient_name=true;
        }
        }
}
</script>
<style scoped>

.bar {
  width: 10px;
  height: 20px;
  display: inline-block;
  transform-origin: bottom center;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  /*   box-shadow:5px 10px 20px inset rgba(255,23,25.2); */
  animation: loader 1.2s linear infinite;
}
.bar1 {
  animation-delay: 0.1s;
}
.bar2 {
  animation-delay: 0.2s;
}
.bar3 {
  animation-delay: 0.3s;
}
.bar4 {
  animation-delay: 0.4s;
}
.bar5 {
  animation-delay: 0.5s;
}
.bar6 {
  animation-delay: 0.6s;
}
.bar7 {
  animation-delay: 0.7s;
}
.bar8 {
  animation-delay: 0.8s;
}

@keyframes loader {
  0% {
    transform: scaleY(0.1);
    background: yellowgreen;
  }
  50% {
    transform: scaleY(1);
    background: yellowgreen;
  }
  100% {
    transform: scaleY(0.1);
    background: transparent;
  }
}
</style>