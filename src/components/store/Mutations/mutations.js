import LikeFoods from './like.js'
import favoritefoods from './favorite.js'
import signup from './signup.js';
import FoodComment from './comment.js'
const apollo_client = require("../../utils/apollo");
const GET_USER = require("../../graphql/USER.js");
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
        const registerd_user = signup(newUser);
        console.log(registerd_user);
    },
    async login(state, UserId) {
        let data = await apollo_client.query({
            query: GET_USER,
            variables: { id: UserId },
        });
        // set fetched data to currentUser in statedata
        state.currentUser = data.data.users[0];
    },
    isLoggedInSetter(state, value) {
        state.currentUser = value.currentUser;
        state.isLoggedIn = value.isLoggedIn;
    },
    logout(state) {
        state.isLoggedIn = false;
    },
}