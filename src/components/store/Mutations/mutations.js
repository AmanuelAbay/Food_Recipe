import LikeFoods from './like.js'
import favoritefoods from './favorite.js'
import sign_up from './signup.js';
import FoodComment from './comment.js'
// const apollo_client = require("../../utils/apollo");
// const GET_USER = require("../../graphql/USER.js");

export default {
    comments(food) {
        FoodComment(food);
    },
    like(food) {
        LikeFoods(food);
    },
    favorite(food) {
        favoritefoods(food.id)
    },
    signup(state, newUser) {
        const registerd_user = sign_up(newUser);
        console.log(registerd_user);
    },
    async login(state, UserId) {
        // set fetched data to currentUser in statedata
        state.userId = UserId;
    },
    isLoggedInSetter(state, value) {
        state.currentUser = value.currentUser;
        state.isLoggedIn = value.isLoggedIn;
    },
    logout(state) {
        state.isLoggedIn = false;
    },
    filter_foods(state, FOOD) {
        state.foods = FOOD;
        console.log("From filter foods mutuation");
        console.log(FOOD);

        console.log("STATE VARIABLE FOOD");
        console.log(state.foods);
    },
    category(state, payload) {
        state.category = payload
    },
    search(state, payload) {
        state.search = payload
    }
}