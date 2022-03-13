import { createStore } from 'vuex';
import mutation from './Mutations/mutations.js';
import getter from './Getters/getters.js'
import action from './Actions/actions.js'

const store = createStore({
    state() {
        return {
            isLoggedIn: false,
            Foods: [], // a list of foods will be saved here
            Saved: [] // current account saved or favorite foods
        }
    },
    mutations: mutation,
    getters: getter,
    actions: action
})

export default store