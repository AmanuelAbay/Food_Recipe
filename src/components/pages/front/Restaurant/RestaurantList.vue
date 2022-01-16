<template>
    <body class="pr-5 pl-14">
        <div class="pt-8">
            <h4 class="text-secondary-900 text-4xl font-bold border-b border-secondary pb-2">Restaurants</h4>
        </div>
        <!-- card views will be here -->
        <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <router-link to="/restaurants/description">
                <RestaurantCardViewVue/>
            </router-link>
            <RestaurantCardViewVue/>
            <RestaurantCardViewVue/>
            <RestaurantCardViewVue/>
            <RestaurantCardViewVue/>
            <RestaurantCardViewVue/>
            <RestaurantCardViewVue/>
            <RestaurantCardViewVue/>
            <RestaurantCardViewVue/>
        </div>
        

    </body>
</template>

<script>
import RestaurantCardViewVue from "../cardViews/RestaurantCardView.vue"
export default {
    name:"Restaurant",
    components:{ RestaurantCardViewVue }
}
</script>