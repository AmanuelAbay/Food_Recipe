<template>
    <body class="pr-5 pl-14">
        <div class="pt-8">
            <h4 class="text-secondary-900 text-4xl font-bold border-b border-secondary pb-2">Restaurants</h4>
        </div>
        <!-- card views will be here -->
        <div class="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div v-for="restaurant in Restaurants" :key="restaurant.id">
                <router-link :to="'/restaurants/description/'+ restaurant.id">
                    <restaurant-card-view-vue :imageName="restaurant.imageName" :Name="restaurant.Name" :Category="restaurant.Category" :Address="restaurant.Address" :Rate="restaurant.Rate"></restaurant-card-view-vue>
                </router-link>
            </div>
        </div>
        <div class="flex justify-center my-8 cursor-pointer">
            <div @click="LoadMore" class="capitalize btn border border-gray-200 py-1 px-2 shadow rounded bg-secondary-100 text-secondary-200 hover:shadow-inner hover:bg-opacity-50 transition ease-out duration-300">Load More</div>
        </div>
        

    </body>
</template>

<script>
import RestaurantCardViewVue from "../cardViews/RestaurantCardView.vue"
export default {
    name:"Restaurant",
    components:{ RestaurantCardViewVue },
    data(){
        return {
            NumberOfCard:12,
            Restaurants:[
                {
                    id:1,
                    imageName:"../../assets/images/restaurants/caravan.jpg",
                    Name:"Kaldis Coffe",
                    Category:"Coffee",
                    Address:"Addis Ababa",
                    Rate:3.2
                },
                {
                    id:2,
                    imageName:"salad",
                    Name:"Chicken Hut",
                    Category:"Burger House",
                    Address:"Addis Ababa, Piassa",
                    Rate:4
                },
                {
                    id:3,
                    imageName:"caravan",
                    Name:"caravan",
                    Category:"Burger House",
                    Address:"Hawassa",
                    Rate:4
                },
                {
                    id:4,
                    imageName:"kaldis_coffee",
                    Name:"Kaldis Coffe",
                    Category:"Coffee",
                    Address:"Addis Ababa",
                    Rate:3.2
                },
                {
                    id:5,
                    imageName:"salad",
                    Name:"caravan",
                    Category:"Burger House",
                    Address:"Hawassa",
                    Rate:4
                },
                {
                    id:6,
                    imageName:"caravan",
                    Name:"caravan",
                    Category:"Burger House",
                    Address:"Hawassa",
                    Rate:4
                },
                {
                    id:7,
                    imageName:"kaldis_coffee",
                    Name:"Kaldis Coffe",
                    Category:"Coffee",
                    Address:"Addis Ababa",
                    Rate:3.2
                },
                {
                    id:8,
                    imageName:"salad",
                    Name:"caravan",
                    Category:"Burger House",
                    Address:"Hawassa",
                    Rate:5
                },
                {
                    id:9,
                    imageName:"caravan",
                    Name:"caravan",
                    Category:"Burger House",
                    Address:"Hawassa",
                    Rate:4
                },
                {
                    id:1,
                    imageName:"kaldis_coffee",
                    Name:"Kaldis Coffe",
                    Category:"Coffee",
                    Address:"Addis Ababa",
                    Rate:3.2
                },
                {
                    id:2,
                    imageName:"salad",
                    Name:"Chicken Hut",
                    Category:"Burger House",
                    Address:"Addis Ababa, Piassa",
                    Rate:4
                },
                {
                    id:3,
                    imageName:"caravan",
                    Name:"caravan",
                    Category:"Burger House",
                    Address:"Hawassa",
                    Rate:4
                },
                {
                    id:4,
                    imageName:"kaldis_coffee",
                    Name:"Kaldis Coffe",
                    Category:"Coffee",
                    Address:"Addis Ababa",
                    Rate:3.2
                },
                {
                    id:5,
                    imageName:"salad",
                    Name:"caravan",
                    Category:"Burger House",
                    Address:"Hawassa",
                    Rate:4
                },
                {
                    id:6,
                    imageName:"caravan",
                    Name:"caravan",
                    Category:"Burger House",
                    Address:"Hawassa",
                    Rate:4
                },
                {
                    id:7,
                    imageName:"kaldis_coffee",
                    Name:"Kaldis Coffe",
                    Category:"Coffee",
                    Address:"Addis Ababa",
                    Rate:3.2
                },
                {
                    id:8,
                    imageName:"salad",
                    Name:"caravan",
                    Category:"Burger House",
                    Address:"Hawassa",
                    Rate:5
                },
                {
                    id:9,
                    imageName:"caravan",
                    Name:"caravan",
                    Category:"Burger House",
                    Address:"Hawassa",
                    Rate:4
                }
            ]
        }
    },
    methods:{
        LoadMore(){

        }
    }
}
</script>