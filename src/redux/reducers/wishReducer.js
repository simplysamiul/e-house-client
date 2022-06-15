export default function wishReducer (state=[], action){
    switch (action.type) {
        case 'add_to_wish_list':{
            return [...state, action.payload]
        }
        case 'remove_from_wish_list':{
            return state.filter((item)=> item._is !== action.id)
        }
        case 'CLEAR_WISH_LIST':{
            return [];
        }
        default:
            return state;
    }
};