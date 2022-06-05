import { combineReducers, createStore } from "redux";
import cartReducer from "./reducers/CartReducer";
import { composeWithDevTools } from 'redux-devtools-extension';
import wishReducer from "./reducers/wishReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
  }
const rootReducer = combineReducers({
    cart : cartReducer,
    wish: wishReducer
});
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, composeWithDevTools());
export const persistor = persistStore(store);
export default store;
