import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cart: []
}
const cartSlice = createSlice({
    initialState,
    name: 'cart',
    reducers: {
        addItem(state, action){
            state.cart.push(action.payload);
        },
        removeItem(state, action){
            state.cart = state.cart.filter(item => item.pizzaId !== action.payload)
        },
        increaseItemQuantity(state, action){
           const item = state.cart.find(item => item.pizzaId === action.payload);
           item.quantity++;
           item.totalPrice = item.quantity * item.sizePrice;
        },
        decreaseItemQuantity(state, action){
            const item = state.cart.find(item => item.pizzaId === action.payload);

            item.quantity--;
            item.totalPrice = item.quantity * item.sizePrice;

            if(item.quantity === 0){
                cartSlice.caseReducers.removeItem(state, action);
            }
        },
        updateSizePrice(state, action){ // id, size, addPrice
            const item = state.cart.find(item => item.pizzaId === action.payload.id);

            item.size = action.payload.size;
            item.sizePrice = item.unitPrice * action.payload.addPrice;
            item.totalPrice = item.quantity * item.sizePrice;
        },
        clearCart(state){
            state.cart = [];
        }
    }
});
export const {
    addItem,
    removeItem,
    increaseItemQuantity,
    decreaseItemQuantity,
    clearCart,
    updateSizePrice} = cartSlice.actions;
export default cartSlice.reducer;
export const getTotalQuantity = (state) =>
    state.cart.cart.reduce((acc, curr) => acc + curr.quantity, 0);
export const getTotalPrice = (state) =>
    state.cart.cart.reduce((acc, curr) => acc + curr.totalPrice, 0);
export const getCart = (state) => state.cart.cart;
export const getQuantityById = (id) => (state) =>
    state.cart.cart.find(item => item.pizzaId === id)?.quantity ?? 0;