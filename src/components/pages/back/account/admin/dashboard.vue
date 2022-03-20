<template>
   <body class="pr-5 pl-14 pt-6">
        <h4 class="text-secondary-900 text-4xl font-bold border-b border-secondary pb-2">Posts</h4>
        <!-- list of card views will be displayed -->
         <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div v-for="food in foods" :key="food.id">
                    <food-card-view-vue :food="food"></food-card-view-vue>
            </div>
        </div>
        <div class="flex justify-center my-8 cursor-pointer">
            <div class="capitalize btn border border-gray-200 py-1 px-2 shadow rounded bg-secondary-100 text-secondary-200 hover:shadow-inner hover:bg-opacity-50 transition ease-out duration-300">Load More</div>
        </div>
    </body>
</template>

<script>
import FoodCardViewVue from "../../../front/cardViews/FoodCardView.vue";
import YOUR_FOODS from "../../../../graphql/YOUR_FOOD.js"
export default{
    name:"food list",
    components: {
        FoodCardViewVue
    },
    data(){
        return {
            foods:[],
        }
    },
    apollo: {
        foods:{
            query: YOUR_FOODS,
             variables () {   
                return {
                    user_id: 1 // selected user id
                }
            },
            loadingKey: 'loading',
            pollInterval: 500
        }
  },
    mounted(){
  },
}
</script>