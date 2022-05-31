export const addToCart = (payload) =>{
    console.log(payload);
    return {
        type : "ADD_TO_CART",
        payload : payload
    }
};

export const removeFromCart = (payload) =>{
    return {
        type : "REMOVE_FROM_CART",
        payload : payload
    }
};

export const clearCart = () =>{
    return{
        type : "CLEAR_CART"
    }
}