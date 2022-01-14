<template>
    <body class="pr-5 pl-14">
        <div class="pt-6">
            <h4 class="text-secondary-900 text-4xl font-bold border-b border-secondary pb-2">Foods</h4>
        </div>
        <!-- list of card views will be displayed -->
         <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <FoodCardViewVue/>
            <FoodCardViewVue/>
            <FoodCardViewVue/>
            <FoodCardViewVue/>
            <FoodCardViewVue/>
            <FoodCardViewVue/>
            <FoodCardViewVue/>
            <FoodCardViewVue/>
            <FoodCardViewVue/>
            <FoodCardViewVue/>
            <FoodCardViewVue/>
            <FoodCardViewVue/>
            <FoodCardViewVue/>
            <FoodCardViewVue/>
            <FoodCardViewVue/>
        </div>
        <div class="flex justify-center my-8 cursor-pointer">
            <div class="capitalize btn border border-gray-200 py-1 px-2 shadow rounded bg-secondary-100 text-secondary-200 hover:shadow-inner hover:bg-opacity-50 transition ease-out duration-300">Load More</div>
        </div>
    </body>
</template>

<script>
import FoodCardViewVue from "./cardViews/FoodCardView.vue"
export default{
    name:"food list",
    components: {
        FoodCardViewVue
    }
}
</script>