export const authReducer = (state = [], action) =>{
    switch (action.type) {
        case "user_register_email":{
            return action.payload;
        }
        case "user_register_google":{
            return action.payload;
        }
        default:
            return state;
    }
};