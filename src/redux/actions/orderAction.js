export const addOrder = (payload) => {
    return{
        type:"Add_ORDER_INFO",
        payload : payload
    }
};
export const removeOrder = (email) =>{
    return{
        type:"REMOVE_ORDER_INFO",
        payload: email
    }
}