export default function cartReducer (state = [], action){
    switch (action.type) {
        case "ADD_TO_CART":{
            const existProduct = state.find((product)=> product._id === action.payload._id);
            if(existProduct){
                const restProduct = state.filter((product) => product._id !== existProduct._id);
                existProduct.qty = existProduct.qty + 1;
                return [...restProduct, action.payload];
            }
            else{
                const newProduct = action.payload;
                newProduct.qty = 1;
                return [...state, newProduct]
            }
        }
        case "REMOVE_FROM_CART":
              return  state.filter((item)=> item._id !== action.payload);
        case "CLEAR_CART":
            return [];
    
        default:
            return state;
    }
}