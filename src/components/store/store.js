import { createStore } from 'vuex';
import mutation from './Mutations/mutations.js';
import getter from './Getters/getters.js'
import action from './Actions/actions.js'
import { userId } from '../utils/user.js'
// import foods from './Getters/foods.js'

const store = createStore({
    state() {
        return {
            isLoggedIn: false,
            user_id: userId,
            saved: null, // favorite foods
            category: "all", // selected favorites
            search: null
        }
    },
    mutations: mutation,
    getters: getter,
    actions: action
})

export default store