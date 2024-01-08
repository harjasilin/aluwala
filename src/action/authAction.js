import {
    SIGNUP, SIGNIN, LOGOUT
} from './types';
export const signUp = user => {
    return {
        type: SIGNUP,
        payload: user
    }
}
export const signIn = user => {
    return {
        type: SIGNIN,
        payload: user
    }
}
export const logout = () => ({
    type: LOGOUT,
});