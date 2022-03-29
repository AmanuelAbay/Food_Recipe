import { isLoggedIn } from './user'

export default (to, from, next) => {
    if (!isLoggedIn.value) {
        return next("/signin")
    } else {
        next();
    }
}