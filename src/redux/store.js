import { applyMiddleware, combineReducers, createStore } from "redux";
import cartReducer from "./reducers/CartReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import wishReducer from "./reducers/wishReducer";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import ReduxThunk from 'redux-thunk'
import { authReducer } from "./reducers/authReducer.js";
import orderReducer from "./reducers/orderReducer";

const persistConfig = {
    key: 'root',
    storage,
  }
const rootReducer = combineReducers({
    cart : cartReducer,
    wish: wishReducer,
    auth: authReducer,
    finalorder : orderReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(ReduxThunk)));
export const persistor = persistStore(store);
export default store;
