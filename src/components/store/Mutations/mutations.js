export default {
    signup(state, newUserId) {
        state.user_id = newUserId
    },
    login(state, UserId) {
        state.userId = UserId;
    },
    isLoggedInSetter(state, value) {
        state.isLoggedIn = value.isLoggedIn;
    },
    category(state, payload) {
        state.category = payload
    },
    search(state, payload) {
        state.search = payload
    }
}