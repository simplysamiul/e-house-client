export default function orderReducer(state=[], action){

    switch (action.type) {
        case "ADD_TO_ORDER":{
        const existingOrder = state.find((items) => items.email === action.payload.email);
            if(existingOrder){
                const restOrders= state.filter((items) => items.email !== action.payload.email);
                existingOrder.grandTotal = action.payload.grandTotal;
                return [...restOrders, action.payload]
            }
            else{
                return [...state, action.payload]
            }
        }
        case "REMOVE_FROM_ORDER":{
            return state.filter((items) => items.email !== action.payload)
        }  
        default:
            return state;
    }
}