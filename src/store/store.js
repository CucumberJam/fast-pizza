import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice.js";
import cartReducer from "../features/cart/cartSlice.js";
import menuReducer from '../features/menu/menuSlice.js';

const store = configureStore({
    reducer: {
        user: userReducer,
        cart: cartReducer,
        menu: menuReducer
    },
});

export default store;