<template>
    <div class="card rounded overflow-hidden shadow-lg drop-shadow-3xl hover:shadow-4xl z-10">
        <router-link :to="'/food/description/'+ food.id">
            <img :src="food.images[0].path" alt="pizza" class="w-full h-32 sm:h-48 object-cover">
        </router-link>
        <div class="m-3">
             <div class="md:flex justify-between items-center">
                <span class="font-bold capitalize">{{food.title}}</span>
                <svg v-if="this.$route.path!=='/setting/dashboard'" @click="fav_icon()" class="w-5 h-5 cursor-pointer" :fill="this.fav_fill" stroke="#FF7F3F" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </div>
            <div class="flex justify-start items-center">
                <div class="break-normal w-full description">{{food.description}}</div>
            </div>
            <div class="flex justify-between items-center mt-7">
                <div class="flex justify-start items-center">
                    <div class="flex justify-start items-center mr-3 cursor-pointer" @click="like_icon()">
                        <svg class="w-5 h-5" :fill="like_fill" stroke="#FF7F3F" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path></svg>
                        <div class="text-sm ml-0.5">{{no_of_like}}</div>
                    </div>
                    <div v-if="rate!=0" class="flex justify-start items-center">
                        <svg class="w-5 h-5" fill="#FF7F3F" stroke="#FF7F3F" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path></svg>
                        <div class="text-sm ml-0.5">({{rate}})</div>
                    </div>
                </div>
                <div class="font-semibold capitalize">
                    <div v-if="this.$route.path!=='/setting/dashboard'">by {{food.user.name}}</div>
                    <div v-if="this.$route.path==='/setting/dashboard'" class="flex justify-end space-x-3">
                        <div>
                            <router-link :to="'/setting/edititem/'+ food.id">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                            </router-link>
                        </div>
                        <div @click="this.toggleup=false" class="cursor-pointer">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tag block item-center text-center">
            <div>{{food.duration}}</div>
            <div>Min</div>
        </div>
        <div :class="{'hidden': toggleup}" class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div :class="{'hidden': toggleup}" class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

                <!-- This element is to trick the browser into centering the modal contents. -->
                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div :class="{'hidden': toggleup}" class=" inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                    <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                        <!-- Heroicon name: outline/exclamation -->
                        <svg class="h-6 w-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                        <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                        {{food.title}}
                        </h3>
                        <div class="mt-2">
                        <p class="text-sm text-gray-500">
                            Are you sure you want to delete?
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button type="button" @click="DeleteFood(food.id)" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                    Delete
                    </button>
                    <button type="button" @click="this.toggleup=true" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                    Cancel
                    </button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import LIKE from '../../../graphql/LIKE.js';
import FAV from '../../../graphql/FAV.js'
import UNFAV from '../../../graphql/UNFAV.js'
import UNLIKE from '../../../graphql/UNLIKE.js';
import DELETE_FOOD from "../../../graphql/DELETE_FOOD.js";
import {userId} from "../../../utils/user.js"
import {isLoggedIn} from "../../../utils/user.js"
export default {
    props:{
        food: {
        type: Object,
        default: () => ({}),
        }},
        data(){
            return {
                toggleup:true,
                like_fill:"none",
                fav_fill:"none",
                no_of_like:null,
                loggedIn:false,
                rate:0
            }
        },
        apollo:{
        },
        methods:{
            DeleteFood(id){
                this.$apollo.mutate(
                    {
                        mutation: DELETE_FOOD,
                        variables:{
                            food_id:id
                        }
                    }
                );
                this.$router.go()
            },
            like_icon(){
                if(this.loggedIn){
                    if(this.like_fill==="#FF7F3F"){
                    // delete the row
                this.$apollo.mutate(
                        {
                            mutation: UNLIKE,
                            variables:{
                                food_id:this.food.id,
                                user_id: userId.value
                            }
                        }
                    )
                    this.like_fill="none"
                    }
                else if(this.like_fill==="none"){
                    // add id's to like table rows
                    this.$apollo.mutate(
                        {
                            mutation: LIKE,
                            variables:{
                                food_id:this.food.id,
                                user_id:userId.value
                            }
                        }
                    )
                    this.like_fill="#FF7F3F"
                    }
                }
                else this.$router.push("/signin");
            },
            fav_icon(){
                if(this.loggedIn){
                    if(this.fav_fill==="#FF7F3F"){
                    // delete the row
                    this.$apollo.mutate(
                        {
                            mutation: UNFAV,
                            variables:{
                                food_id:this.food.id, // sending food id
                                user_id: userId.value // sending user id
                            }
                        }
                    )
                    this.fav_fill="none"
                    }
                else if(this.fav_fill==="none"){
                    // add id's to favorites table rows
                    this.$apollo.mutate(
                        {
                            mutation: FAV,
                            variables:{
                                food_id:this.food.id,
                                user_id: userId.value
                            }
                        }
                    )
                    this.fav_fill="#FF7F3F"
                    }
                }
                else this.$router.push("/signin");
            },
            rate_value(){
                if(this.food.rates.length>0){
                let  sum = this.food.rates.reduce(function (prev, next) {
                    return prev + next.value;
                    }, 0);
                this.rate = (sum/this.food.rates.length);
                }
            else this.rate = 0;
            }
        },
        mounted(){
            this.loggedIn=isLoggedIn.value
            // favorites 
            if(this.food.favorites.some(food => food.favorite_user_id === userId.value)){
            //favorite icon will be colored
            this.fav_fill = "#FF7F3F";
        }
        else{
            // favorite icon won't be colored
            this.fav_fill="none";
        }

        // like items
        if(this.food.likes.some(food => food.like_user_id === userId.value)){
            // Like icon will be colored
            this.like_fill = "#FF7F3F";
        }
        else{
            // Like icon won't be colored
            this.like_fill="none";
        }

            if(this.food.likes.length)
            this.no_of_like=this.food.likes.length
            this.rate_value();
        },
}
</script>

<style scoped>
.description{
    height:165px
}
</style>