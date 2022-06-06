export default function cartReducer (state = [], action){
    switch (action.type) {
        case "ADD_TO_CART":{
            const newState = [...state, action.payload];
            return newState;
        }
        case "REMOVE_FROM_CART":
              return  state.filter((item)=> item._id !== action.payload);
        case "CLEAR_CART":
            return [];
    
        default:
            return state;
    }
}