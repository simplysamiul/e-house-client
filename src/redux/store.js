import { combineReducers, createStore } from "redux";
import cartReducer from "./reducers/CartReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import wishReducer from "./reducers/wishReducer";

const rootReducer = combineReducers({
    cart : cartReducer,
    wish: wishReducer
});
const store = createStore(rootReducer, composeWithDevTools());

export default store;
