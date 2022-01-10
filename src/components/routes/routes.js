import { createRouter, createWebHistory } from 'vue-router';
import RestaurantListVue from "../pages/front/RestaurantList.vue";
import FoodListVue from "../pages/front/FoodList";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/restaurant', component: RestaurantListVue },
        { path: '/foods', component: FoodListVue },
    ]
});
export default router