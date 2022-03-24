<template>
<div>
    <body v-if="!this.$apollo.loading" class="pr-5 pl-14">
        <div v-if="favorites.length>0">
            <div class="pt-6">
                <h4 class="text-secondary-900 text-4xl font-bold border-b border-secondary pb-2">Foods</h4>
            </div>

            <!-- list of card views will be displayed -->
            <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div v-for="favorite in favorites" :key="favorite.id">
                        <food-card-view-vue :food="favorite.food"></food-card-view-vue>
                </div>
            </div>
        </div>
        <div v-else class="flex h-screen">
            <div class="m-auto">
                <div class="flex justify-center text-4xl font-bold items-center">No Favorite Food</div>
            </div>
        </div>
        
        <div class="flex justify-center my-8 cursor-pointer">
            <div class="capitalize btn border border-gray-200 py-1 px-2 shadow rounded bg-secondary-100 text-secondary-200 hover:shadow-inner hover:bg-opacity-50 transition ease-out duration-300">Load More</div>
        </div>
    </body>
    <div v-else class="flex h-screen">
        <div class="m-auto">
            <div class="flex justify-center text-4xl items-center">Loading...</div>
        </div>
    </div>
</div>
</template>

<script>
import FoodCardViewVue from "./cardViews/FoodCardView.vue";
import FAVORITE_FOOD from "../../graphql/FAVORITE_FOOD.js"
import {userId} from "../../utils/user.js";
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
                    user_id: userId.value // sending variable data of id on route params list
                }
            },
            loadingKey: 'loading',
            pollInterval: 500,
        }
  }

}
</script>