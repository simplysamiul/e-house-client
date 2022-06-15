export function addToWishList(payload){
    return{
        type: "add_to_wish_list",
        payload
    }
};
export function removeFromWishList(id){
    return{
        type: "remove_from_wish_list",
        id
    }
};

export function clearWishList(){
    return{
        type : "CLEAR_WISH_LIST"
    }
};