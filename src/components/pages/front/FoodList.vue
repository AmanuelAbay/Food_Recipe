<template>
    <body class="pr-5 pl-14">
        <div class="pt-6">
            <h4 class="text-secondary-900 text-4xl font-bold border-b border-secondary pb-2">Foods</h4>
        </div>
        <!-- list of card views will be displayed -->
         <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div v-for="food in foods" :key="food.id">
                    <food-card-view-vue :price=food.duration :imageLink="imagelink" :Name=food.title :description=food.description :likes=food.id :comments=food.description></food-card-view-vue>
            </div>
        </div>
        <div class="flex justify-center my-8 cursor-pointer">
            <div class="capitalize btn border border-gray-200 py-1 px-2 shadow rounded bg-secondary-100 text-secondary-200 hover:shadow-inner hover:bg-opacity-50 transition ease-out duration-300">Load More</div>
        </div>
    </body>
</template>

<script>
import FoodCardViewVue from "./cardViews/FoodCardView.vue";
import fetching_foods from "../../graphql/fetch_foods.js"
export default{
    name:"food list",
    components: {
        FoodCardViewVue
    },
    data(){
        return {
            foods:[],
            users:{}
        }
    },
    apollo: {
        foods:{
            query: fetching_foods
        }
  },
    mounted(){
  },
}
</script>