<template>
    <body class="flex flex-col">
        <!-- top image -->
        <div class="h-95 w-full relative items-center">
            <img src="../../../../assets/images/foods/burger.jpg" alt="Kaldi's Coffee" class="from-black to-transparent h-80 w-full object-cover">
            <div class="flex justify-between w-full items-center px-20 absolute bottom-2">
                <div class="flex flex-col">
                    <div class="font-bold text-white text-4xl uppercase">Beef Burgers</div>
                    <div class="flex justify-start items-center">
                        <star-rating :inline="true" :star-size="25" active-color="#FF7F3F" :read-only="true" :show-rating="false" :rating="3"></star-rating>
                        <p class="text-white font-bold pl-2 pr-5">(4)</p>
                    </div>
                </div>
                <div>
                    <svg class="w-8 h-8 cursor-pointer" fill="none" stroke="#FF7F3F" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </div>
            </div>
        </div>
            <!-- descriptions below image -->
        <div class="block h-95 w-full text-start mt-8 px-20">
            <!-- detail description -->
            <p class="flex flex-wrap break-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis harum adipisci distinctio 
                dicta suscipit olestias asperiores incidunt, a excepturi hic eum sed reprehenderit, porro ipsam explicabo
                saepe exercitationem rem! Blanditiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis 
                harum adipisci distinctio dicta suscipit m olestias asperiores incidunt, a excepturi hic eum sed reprehenderit, porro ipsam explicabo saepe 
                exercitationem rem! Blanditiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis harum adipisci distinctio dicta suscipit m
                olestias asperiores incidunt, a excepturi hic eum sed reprehenderit, porro ipsam explicabo saepe exercitationem rem! Blanditiis.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis harum adipisci distinctio 
                dicta suscipit olestias asperiores incidunt, a excepturi hic eum sed reprehenderit, porro ipsam explicabo
                saepe exercitationem rem! Blanditiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis 
                harum adipisci distinctio dicta suscipit m olestias asperiores incidunt, a excepturi hic eum sed reprehenderit, porro ipsam explicabo saepe 
                exercitationem rem! Blanditiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis harum adipisci distinctio dicta suscipit m
                olestias asperiores incidunt, a excepturi hic eum sed reprehenderit, porro ipsam explicabo saepe exercitationem rem! Blanditiis.
            </p>

            <!-- rating and address section -->
                <div class="flex justify-between items-center mr-6 font-bold mt-3 border-b border-gray-400 pb-10">
                    <div class="pl-1 uppercase">Category</div>
                </div>
        </div>
        <div class="flex flex-col pl-20 py-5 space-y-3">
            <label for="ingredients" class="block mb-2 font-bold text-xl uppercase">ingredients</label>
            <ul class="flex flex-col  pl-20 list-disc space-y-4">
                <li class="uppercase text-base" v-for="ingredient in ingredients" :key="ingredient">{{ingredient}}</li>
            </ul>
        </div>
        <div class="flex flex-col pl-20 space-y-3 pt-5">
            <label for="ingredients" class="block mb-2 font-bold text-xl uppercase">necessary Steps</label>
            <ul class="space-y-3 px-20 list-disc">
                <li class="text-base list-decimal pl-1" v-for="step in steps" :key="step">{{step}}</li>
            </ul>
        </div>
        <RatingAndReviewCardViewVue class="pl-20 mb-2"/>
        <div class="bg-gray-200 w-full">
            <div class="bg-gray-200  md:w-full items-center flex justify-start ml-20 pt-4 mb-6">
                <font-awesome-icon icon="user-circle" class="text-black text-3xl mr-2"></font-awesome-icon>
                <form action="" @submit.prevent="commentOnFoods" class="flex justify-start">
                    <textarea class="w-full comment px-2 py-2 rounded shadow border border-gray-400" v-model="comment"></textarea>
                    <button type="submit" @click="this.toggleup=false" class="px-5 rounded ml-4 bg-primary capitalize">post</button>
                </form>
            </div>
        </div>

        <div :class="{'hidden': toggleup}" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div :class="{'hidden': toggleup}" @click="this.toggleup=true" class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                <!-- This element is to trick the browser into centering the modal contents. -->
                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div :class="{'hidden': toggleup}" class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div class="bg-white px-4 pt-5 pb-6 sm:p-6 sm:pb-4">
                    <div class="flex flex-col text-center items-center justify-center sm:items-start">
                        <h3 class="font-bold text-3xl mb-3 mx-auto">Rate Food</h3>
                        <star-rating class="mx-auto" @click="this.toggleup=true" v-model="rating" :max-rating="5" active-color="#FF7F3F" :border-width="2" border-color="#FF7F3F" show-rating="false" :star-size="45"></star-rating>
                    </div>
                </div>
                </div>
            </div>
        </div>

    </body>
</template>

<script>
import RatingAndReviewCardViewVue from "./RatingAndReviewCardView.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import StarRating from 'vue-star-rating'
export default {
    data(){
        return{
            foodList:true,
            selectedComponent:"food-list-vue",
            comment:"",
            ingredients:["ingredient one", "ingredient two", "ingredient three", "ingredient four", "ingredient five", "ingredient six"],
            steps:["step one will be written down here",  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis harum adipisci distinctio 
                dicta suscipit olestias asperiores incidunt, a excepturi hic eum sed reprehenderit, porro ipsam explicabo
                saepe exercitationem rem! Blanditiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis 
                harum adipisci distinctio dicta suscipit m olestias asperiores incidunt, a excepturi hic eum sed reprehenderit, porro ipsam explicabo saepe 
                exercitationem rem! Blanditiis`, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis harum adipisci distinctio 
                dicta suscipit olestias asperiores incidunt, a excepturi hic eum sed reprehenderit, porro ipsam explicabo
                saepe exercitationem rem! Blanditiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis 
                harum adipisci distinctio dicta suscipit m olestias asperiores incidunt, a excepturi hic eum sed reprehenderit, porro ipsam explicabo saepe 
                exercitationem rem! Blanditiis`, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis harum adipisci distinctio 
                dicta suscipit olestias asperiores incidunt, a excepturi hic eum sed reprehenderit, porro ipsam explicabo
                saepe exercitationem rem! Blanditiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis 
                harum adipisci distinctio dicta suscipit m olestias asperiores incidunt, a excepturi hic eum sed reprehenderit, porro ipsam explicabo saepe 
                exercitationem rem! Blanditiis`, `Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis harum adipisci distinctio 
                dicta suscipit olestias asperiores incidunt, a excepturi hic eum sed reprehenderit, porro ipsam explicabo
                saepe exercitationem rem! Blanditiis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis 
                harum adipisci distinctio dicta suscipit m olestias asperiores incidunt, a excepturi hic eum sed reprehenderit, porro ipsam explicabo saepe 
                exercitationem rem! Blanditiis`],
            toggleup:true,
            rating:0
        }
    },
    components: {
        RatingAndReviewCardViewVue,
        FontAwesomeIcon,
        StarRating
        },
    methods:{
        setSelectedComponent(component){
            this.selectedComponent = component;
            if(component==="restaurant-service-list-vue"){
                this.foodList=false;
            }else{
                this.foodList=true;
            }
        },
        commentOnFoods(){},
        setRating(rating){
            this.rating=rating;
        }
    }
}
</script>

<style scoped>
.comment{
    width: 450px;
}
</style>