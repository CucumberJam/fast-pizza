import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getMenu} from "../../services/apiRestaurant.js";

const initialState = {
    status: 'idle',
    error: '',
    pizzas: []
}
const menuSlice = createSlice({
   initialState,
   name: 'menu',
   extraReducers: (builder) => builder
       .addCase(fetchMenu.pending, (state)=>{
           state.status = 'loading';
       })
       .addCase(fetchMenu.fulfilled, (state, action)=> {
           state.status = 'idle';
           state.pizzas = action.payload.data;
       })
       .addCase(fetchMenu.rejected, (state)=> {
           state.status = 'error';
           state.error = "Sorry, can't fetch menu data"
       })
});
export default menuSlice.reducer;
export const fetchMenu = createAsyncThunk(
    'menu/fetchMenu', async () => {
        const data = await getMenu();
        return {data};
    });