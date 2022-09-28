import { isLoggedIn } from './user'

export default (to, from, next) => {
    if (!isLoggedIn.value) {
        return next("/login")
    } else {
        next();
    }
}