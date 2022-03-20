<template>
<div>
    <body class="pr-5 pl-14">
        <div class="pt-6">
            <h4 class="text-secondary-900 text-4xl font-bold border-b border-secondary pb-2" @click="display">Foods</h4>
        </div>
        <!-- list of card views will be displayed -->
         <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div v-for="favorite in favorites" :key="favorite.id">
                    <food-card-view-vue :food="favorite.food"></food-card-view-vue>
            </div>
        </div>
        <div class="flex justify-center my-8 cursor-pointer">
            <div class="capitalize btn border border-gray-200 py-1 px-2 shadow rounded bg-secondary-100 text-secondary-200 hover:shadow-inner hover:bg-opacity-50 transition ease-out duration-300">Load More</div>
        </div>
    </body>
</div>
</template>

<script>
import FoodCardViewVue from "./cardViews/FoodCardView.vue";
// import ALL_FOODS from "../../graphql/fetch_foods.js"
// import food from "../../store/Getters/foods.js"
// import FILTER_FOOD from "../../graphql/FILTER_FOOD.js"
import FAVORITE_FOOD from "../../graphql/FAVORITE_FOOD.js"
// import apollo_client from "../../utils/apollo"
// import {mapActions} from 'vuex';
// import { mapState } from 'vuex';
export default{
    name:"food list",
    components: {
        FoodCardViewVue
    },
    data(){
        return {
            favorites:[]
        }
    },
    apollo: {
        favorites:{
            query: FAVORITE_FOOD,
            variables () {   
                return {
                    user_id: 1 // sending variable data of id on route params list
                }
            },
            loadingKey: 'loading',
            pollInterval: 500,
        }
  },
  methods:{
     display(){
         console.log(this.favorites)
     }
  },
    mounted(){
        console.log(this.favorites)
  },
}
</script>