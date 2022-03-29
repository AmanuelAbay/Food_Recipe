export default {
    signup(context, newUserId) {
        context.commit('signup', newUserId);
    },
    login(context, userId) {
        context.commit('login', userId);
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