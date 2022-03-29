import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "../pages/front/HomePage.vue";
import FoodListVue from "../pages/front/FoodList.vue";
import Saved from "../pages/front/saved.vue";
import Description from "../pages/front/Restaurant/RestaurantDescription.vue"
import SignUp from "../pages/front/sign_up/sign_up_users.vue"
import SignIn from "../pages/front/sign_up/login.vue"
import MainSetting from "../pages/back/account/admin/MainSetting.vue"
import Dashboard from "../pages/back/account/admin/dashboard.vue"
import CreateNewFood from "../pages/back/account/admin/create_new_food.vue"
import EditItem from "../pages/back/account/admin/edititem.vue"
import NotFound from "../pages/layouts/notFound.vue"
import AuthGuard from "../utils/AuthGuard.js"

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            component: HomePage,
            name: "Home",
            children: [
                { path: '/', component: FoodListVue },
                { path: 'foods', component: FoodListVue },
                { path: 'saved', component: Saved, beforeEnter: AuthGuard }
            ],
        },
        { path: '/food/description/:id', component: Description },
        { path: '/signup', component: SignUp },
        { path: '/signin', component: SignIn },
        {
            path: '/setting',
            component: MainSetting,
            props: true,
            children: [
                { path: '/', component: Dashboard, beforeEnter: AuthGuard },
                { path: 'dashboard', component: Dashboard, beforeEnter: AuthGuard },
                { path: 'newItem', component: CreateNewFood, beforeEnter: AuthGuard },
                { path: 'edititem/:id', component: EditItem, beforeEnter: AuthGuard }
            ],
            beforeEnter: AuthGuard
        },
        { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    ]
});
export default router