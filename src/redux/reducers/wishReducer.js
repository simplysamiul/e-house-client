export default function wishReducer (state=[], action){
    switch (action.type) {
        case 'add_to_wish_list':{
            const existProduct = state.find((product)=> product._id === action.payload._id);
            if(existProduct){
                const restProduct = state.filter((product) => product._id !== existProduct._id);
                if(existProduct.qty){
                    existProduct.qty = existProduct.qty + 1;
                }
                else{
                    existProduct.qty = 1;
                }
                return [...restProduct, action.payload];
            }
            else{
                const newProduct = action.payload;
                newProduct.qty = 1;
                return [...state, newProduct]
            }
        }
        case 'remove_from_wish_list':{
            return state.filter((item)=> item._id !== action.id)
        }
        case 'CLEAR_WISH_LIST':{
            return [];
        }
        default:
            return state;
    }
};