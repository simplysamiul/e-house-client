import AuthService from "../../services/Auth.Service"

export const register = (payload) =>{
    return (dispatch) =>{
        AuthService.userRegister(payload)
        .then((user) => dispatch({
            type: "user_register_email",
            payload: user
        }))
    }
};

export const googleLogin = (payload) =>{
    return (dispatch) =>{
        AuthService.googleRegister(payload)
        .then((user) => dispatch({
            type: "user_register_google",
            payload: user
        }))
    }
}