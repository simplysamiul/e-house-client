export const addToOrder = (payload) =>{
    return{
        type:"ADD_TO_ORDER",
        payload
    }
};
export const removeFromOrder = (payload) =>{
    return{
        type: "REMOVE_FROM_ORDER",
        payload
    }
};