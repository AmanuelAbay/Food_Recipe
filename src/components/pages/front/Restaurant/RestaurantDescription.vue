<template>
    <body  class="flex flex-col">
        <!-- top image -->
        <div class="h-95 w-full relative items-center">
            <img :src="img_src" :alt="foods[0].title" class="from-black to-transparent h-80 w-full object-cover">
            <div class="flex justify-between w-full items-center px-20 absolute bottom-2">
                <div class="flex flex-col">
                    <div class="font-bold text-white text-4xl uppercase">{{this.foods[0].title}}</div>
                    <div class="flex justify-start items-center" v-if="rate!==0">
                        <star-rating :inline="true" :star-size="22" active-color="#FF7F3F" :read-only="true" :increment="0.5" :show-rating="false" :rating="rate"></star-rating>
                        <p class="text-white font-bold pl-2 pr-5">({{rate}})</p>
                    </div>
                </div>
                <div>
                    <svg class="w-8 h-8 cursor-pointer"  @click="fav_icon_click()" :fill="fav_fill" stroke="#FF7F3F" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                </div>
            </div>
        </div>
            <!-- descriptions below image -->
        <div class="block h-95 w-full text-start mt-8 px-20">
            <!-- detail description -->
            <p class="flex flex-wrap break-normal">
            {{this.foods[0].description}}
            </p>

            <!-- rating and address section -->
                <div class="flex justify-end items-center mr-6 font-bold mt-3 border-b border-gray-400 pb-10">
                    <div class="pl-1 uppercase">{{this.foods[0].category}}</div>
                </div>
        </div>
        <div class="flex flex-col pl-20 py-5 space-y-3">
            <label for="ingredients" class="block mb-2 font-bold text-xl uppercase">ingredients</label>
            <ul class="flex flex-col  pl-20 list-disc space-y-4">
                <li class="uppercase text-base" v-for="ingredient in foods[0].ingredients" :key="ingredient.id">{{ingredient.amount}}{{spaceProvider}}{{ingredient.name}}</li>
            </ul>
        </div>
        <div class="flex flex-col pl-20 space-y-3 pt-5">
            <label for="ingredients" class="block mb-2 font-bold text-xl uppercase">necessary Steps</label>
            <ul class="space-y-3 px-20 list-disc">
                <li class="text-base list-decimal pl-1" v-for="step in foods[0].steps" :key="step.id">{{step.description}}</li>
            </ul>
        </div>
            <rating-and-review-card-view-vue @click="rateValue" class="pl-20 mb-2" :food="foods[0]" ></rating-and-review-card-view-vue>   
        
        <div class="bg-gray-200 w-full  mt-14">
            <div class="bg-gray-200  md:w-full items-center flex justify-start ml-20 pt-4 mb-6">
                <font-awesome-icon icon="user-circle" class="text-black text-3xl mr-2"></font-awesome-icon>
                <form action="" @submit.prevent="commentOnFoods" class="flex justify-start">
                    <textarea @keyup.enter="submitComment()" class="w-full comment px-2 py-2 rounded shadow border border-gray-400" v-model="comment"></textarea>
                    <button type="submit" @click="submitComment()" class="px-5 rounded ml-4 bg-primary capitalize">post</button>
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
                        <star-rating class="mx-auto" @update:rating="setRating" :max-rating="5" active-color="#FF7F3F" :border-width="2" border-color="#FF7F3F" show-rating="false" :star-size="45"></star-rating>
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
import StarRating from 'vue-star-rating';
import COMMENT from '../../../graphql/COMMENT.js';
import RATE from '../../../graphql/RATE.js';
import FOOD from '../../../graphql/FILTER_FOODS.js';
import UNFAV from '../../../graphql/UNFAV.js'
import FAV from '../../../graphql/FAV.js'
import IMAGES from '../../../graphql/IMAGES.js'
import {userId} from '../../../utils/user.js'
import {isLoggedIn} from '../../../utils/user.js'
export default {
    data(){
        return{
            comment: "",
            toggleup: true,
            foods: [],
            fav_fill: "none",
            fav_init: "none",
            rate: 0,
            spaceProvider:" grams of ",
            images:[],
            img_src:"../../../../assets/logo.png",
            breaker:false,
            loggedIn:false
        }
    },
    components: {
        RatingAndReviewCardViewVue,
        FontAwesomeIcon,
        StarRating
        },
    methods:{
        submitComment(){
            if(this.loggedIn){
                if(!(this.comment == null || this.comment.trim() === '')){
                    // if the comment is written in the given space
                    // send the comment to database
                this.$apollo.mutate(
                    {
                        mutation: COMMENT,
                        variables:{
                            food_id: this.$route.params.id,
                            user_id: userId.value,
                            comment: this.comment
                        }
                    }
                )
                this.comment=null;
    
                //check if userid is exist in rate id
                if(!(this.foods[0].rates.find(rate => rate.rate_user_id === userId.value)))
                    this.toggleup=false;
                }
            }
            else this.$router.push("/signin");
        },
        setRating(rating){
            this.toggleup=true
            this.$apollo.mutate(
                {
                    mutation: RATE,
                    variables:{
                        food_id:this.$route.params.id,
                        user_id: userId.value,
                        value:rating
                    }
                }
            )
        },
        fav_icon_click(){
            if(this.loggedIn){
                if(this.fav_fill==="#FF7F3F"){
                    // delete favorite
                    this.$apollo.mutate(
                    {
                        mutation: UNFAV,
                        variables:{
                            food_id:this.$route.params.id, // sending food id
                            user_id: userId.value // sending user id
                        }
                    }
                ).then(()=>{this.fav_fill="none"})
                    }
                else{
                    // add favorite lists
                    this.$apollo.mutate(
                    {
                        mutation: FAV,
                        variables:{
                            food_id:this.$route.params.id,
                            user_id: userId.value
                        }
                    }
                ).then(()=>{this.fav_fill="#FF7F3F"})
                    }
            }
            else this.$router.push("/signin");
        },
        sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        },
        async carosel(){
            // this.img_src = this.images[0].path
            await this.sleep(500);
            for(let index=0;index < this.images.length;index++){
                    this.img_src = this.images[index].path
                    await this.sleep(5000);
                    if(this.breaker){
                        break;
                        }
                    if(index == this.images.length-1)
                        index=-1
                }
        }
    },
    apollo: {
        foods:{
            query: FOOD,
            variables () {   
                return {
                    food_id: this.$route.params.id // sending variable data of id on route params list
                }
            },
            loadingKey: 'loading',
            pollInterval: 500,
        },
        images:{
            query: IMAGES,
                variables () {   
                    return {
                        food_id: this.$route.params.id // sending variable data of id on route params list
                    }
                },
                loadingKey: 'loading',
            }
  },
    mounted(){
        this.loggedIn=isLoggedIn.value
        this.carosel();
 
 // rate assingment on top left corner of design
        if(this.foods[0].rates.length>0){
            let  sum = this.foods[0].rates.reduce(function (prev, next) {
                return prev + next.value;
                }, 0);
            let rate_value=(sum/this.foods[0].rates.length);
            this.rate = parseFloat(rate_value).toFixed(1);
            }
        else this.rate = 0;

        // favorite icon assignment on top left of design
       if(this.foods[0].favorites.some(food => food.favorite_user_id === userId.value)){
           //favorite icon will be colored
           this.fav_fill="#FF7F3F";
           this.fav_init="#FF7F3F"
       }
       else{
           // favorite icon won't be colored
           this.fav_fill="none";
           this.fav_init="none"
       }
    },
    unmounted(){
        this.breaker = true;
    }
}
</script>

<style scoped>
.comment{
    width: 450px;
}
</style>