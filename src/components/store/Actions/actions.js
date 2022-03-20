export default {
    comments(context, food) {
        // the food will contain food.id and food.comment attribute
        context.commit('comments', food)
    },
    like(context, food) {
        // the food parameter will contain the food id and the user will be tooken from localstorage
        context.commit('like', food)
    },
    favorite(context, food) {
        context.commit('favorite', food);
    },
    signup(context, newUserId) {
        context.commit('signup', newUserId);
    },
    login(context, userId) {
        context.commit('login', userId);
    },
    logout(context) {
        context.commit('logout');
    },
    isLoggedInSetter(context, value) {
        context.commit('isLoggedInSetter', value)
    },
    filter_foods({ commit }, FOOD) {
        commit('filter_foods', FOOD)

    },
    setCategory({ commit }, value) {
        commit('category', value)
    },
    setSearch({ commit }, value) {
        commit('search', value)
    }

}