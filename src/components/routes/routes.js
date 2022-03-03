import { createRouter, createWebHistory } from 'vue-router';
import HomePage from "../pages/front/HomePage.vue";
import FoodListVue from "../pages/front/FoodList.vue";
import Saved from "../pages/front/saved.vue";
import Description from "../pages/front/Restaurant/RestaurantDescription.vue"
import SignUp from "../pages/front/sign_up/sign_up_users.vue"
import SignIn from "../pages/front/sign_up/login.vue"
import MainSetting from "../pages/back/account/admin/MainSetting.vue"
import Dashboard from "../pages/back/account/admin/dashboard.vue"
import AccountSetting from "../pages/back/account/admin/account_setting.vue"
import CreateNewFood from "../pages/back/account/admin/create_new_food.vue"
import EditItem from "../pages/back/account/admin/edititem.vue"
import NotFound from "../pages/layouts/notFound.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [{
            path: '/',
            component: HomePage,
            children: [
                { path: '/', component: FoodListVue, props: true },
                { path: 'foods', component: FoodListVue, props: true },
                { path: 'saved', component: Saved, props: true }
            ],
        },
        { path: '/food/description/:id', component: Description, props: true },
        { path: '/signup', component: SignUp },
        { path: '/signin', component: SignIn },
        {
            path: '/setting',
            component: MainSetting,
            props: true,
            children: [
                { path: '/', component: Dashboard, props: true },
                { path: 'dashboard', component: Dashboard, props: true },
                { path: 'account_setting', component: AccountSetting, props: true },
                { path: 'newItem', component: CreateNewFood, props: true },
                { path: 'edititem/:id', component: EditItem }
            ]
        },
        { path: '/:pathMatch(.*)*', componet: NotFound, props: true }
    ]
});
export default router