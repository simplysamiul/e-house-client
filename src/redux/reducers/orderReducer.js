export default function orderReducer (state = [], action){
    switch (action.payload) {
        case "Add_ORDER_INFO":{
            return [...state, action.payload];
        }
        case "REMOVE_ORDER_INFO":{
            const newState = state.filter((items) => items.email !== action.payload);
            return newState;
        }
        default:
            return state;
    }
};