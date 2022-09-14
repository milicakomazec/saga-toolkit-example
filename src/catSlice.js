import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cats:[],
    isLoading: false
}

const catSlice = createSlice({
    name:'cats',
    initialState,
    reducers: {
        getCatsFetch:(state)=>{
            state.isLoading = true; //modifying state directly, because of immer library
        },
        getCatsSuccess:(state,action)=>{
            state.cats = action.payload;
            state.isLoading = true;
        },
        getCatsFailure: (state)=>{
            state.isLoading = false;
        }
    }
})

export const {getCatsFetch, getCatsSuccess, getCatsFailure} = catSlice.actions;
export default catSlice.reducer;