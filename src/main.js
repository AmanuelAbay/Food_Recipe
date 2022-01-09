import { createApp } from 'vue';
import Kaffe from './Kaffe.vue';
import './assets/css/tailwind.css';
import { createRouter, createWebHistory } from 'vue-router';
import RestaurantList from './components/pages/front/restaurant/restaurant_list.vue';
import FoodList from './components/pages/front/food/food_list.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/restaurants', component: RestaurantList },
        { path: '/foods', component: FoodList },
    ]
})

createApp(Kaffe).mount('#app').use(router)