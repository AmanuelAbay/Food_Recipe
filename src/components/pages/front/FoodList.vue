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
    </body>
</template>

<script>
import FoodCardViewVue from "./cardViews/FoodCardView.vue"
export default{
    name:"food list",
    components:{
        FoodCardViewVue
    }
}
</script>