import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "../pages/front/HomePage.vue";
import FoodListVue from "../pages/front/FoodList.vue";
import RestaurantList from "../pages/front/Restaurant/RestaurantList.vue";
import Saved from "../pages/front/saved.vue";
import Admin from "../pages/back/account/admin/dashboard.vue"
import Description from "../pages/front/Restaurant/RestaurantDescription.vue"
const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            component: HomePage,
            children: [
                { path: '/', component: RestaurantList, props: true },
                { path: 'restaurants', component: RestaurantList, props: true },
                { path: 'foods', component: FoodListVue, props: true },
                { path: 'saved', component: Saved, props: true }
            ],
        },
        { path: '/admin', component: Admin, props: true },
        { path: '/description', component: Description, props: true }
    ]
});
export default router