<template>
    <body class="flex flex-col">
        <!-- top image -->
        <div class="h-95 w-full relative">
            <img src="../../../../assets/images/restaurants/desc_image.jpg" alt="Kaldi's Coffee" class="from-black to-transparent h-80 w-full object-cover">
            <div class="left-20 bottom-4 absolute font-bold text-white text-4xl uppercase">Kaldis Coffee</div>
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
            <div class="pl-20 flex justify-start font-bold mt-3 border-b border-gray-400 pb-10">
                <div class="flex justify-start items-center mr-6">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                    <div class="pl-1">Address</div>
                </div>
                <div class="flex justify-start items-center">
                    <svg class="w-4 h-4" fill="#FF8142" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <div class="pl-1">(4.5)</div>
                </div>
                 <div class="flex justify-start items-center ml-14">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                    <div class="pl-1">+0115-241-965</div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-5 font-bold text-3xl pl-20 mt-3">
            <div class="col-span-3 flex justify-between">
                <div class="flex justify-start items-center capitalize cursor-pointer" :class="{'border-b-2 border-primary border-double': this.foodList}" @click="setSelectedComponent('food-list-vue')">
                    <svg class="w-7 mr-1" stroke="currentColor" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 3a1 1 0 011-1h.01a1 1 0 010 2H7a1 1 0 01-1-1zm2 3a1 1 0 00-2 0v1a2 2 0 00-2 2v1a2 2 0 00-2 2v.683a3.7 3.7 0 011.055.485 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0 3.704 3.704 0 014.11 0 1.704 1.704 0 001.89 0A3.7 3.7 0 0118 12.683V12a2 2 0 00-2-2V9a2 2 0 00-2-2V6a1 1 0 10-2 0v1h-1V6a1 1 0 10-2 0v1H8V6zm10 8.868a3.704 3.704 0 01-4.055-.036 1.704 1.704 0 00-1.89 0 3.704 3.704 0 01-4.11 0 1.704 1.704 0 00-1.89 0A3.704 3.704 0 012 14.868V17a1 1 0 001 1h14a1 1 0 001-1v-2.132zM9 3a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm3 0a1 1 0 011-1h.01a1 1 0 110 2H13a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <div>foods</div>
                </div>
                <div class="flex justify-start items-center capitalize cursor-pointer" :class="{'border-b-2 border-primary border-double': !this.foodList}" @click="setSelectedComponent('restaurant-service-list-vue')">
                    <svg class="w-7 mr-1" fill="none" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
                    <div>service</div>
                </div>
                <div class="flex justify-start items-center capitalize cursor-pointer" >
                    <svg class="w-7 mr-1" fill="none" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd"></path></svg>
                    <div>location</div>
                </div>
            </div>
        </div>
        <keep-alive>
            <component :is="selectedComponent" class="px-7"></component>
        </keep-alive>
        <RatingAndReviewCardViewVue class="pl-20 mb-2"/>
        <div class="bg-gray-200 flex justify-start items-center py-4">
            <font-awesome-icon icon="user-circle" class=" ml-20 text-black text-3xl mr-2"></font-awesome-icon>
            <div><input type="text" class="input rounded shadow mr-2 border border-gray-400" v-model="comment"/></div>
            <button class=" bg-primary hover:bg-gray-700 py-0.5 font-semibold rounded-md px-3 ml-4">Post</button>
        </div>
    </body>
</template>

<script>
import RestaurantServiceListVue from "./RestaurantServiceList.vue";
import FoodListVue from "../FoodList.vue";
import RatingAndReviewCardViewVue from "./RatingAndReviewCardView.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
    data(){
        return{
            foodList:true,
            selectedComponent:"food-list-vue",
            comment:""
        }
    },
    components: {
        RestaurantServiceListVue,
        FoodListVue,
        RatingAndReviewCardViewVue,
        FontAwesomeIcon
        },
    methods:{
        setSelectedComponent(component){
            this.selectedComponent = component;
            if(component==="restaurant-service-list-vue"){
                this.foodList=false;
            }else{
                this.foodList=true;
            }
        }
    }
}
</script>