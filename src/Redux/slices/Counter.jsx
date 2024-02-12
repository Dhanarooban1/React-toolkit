import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const Counter  = createSlice({
    name: 'Count',
    initialState,
    reducers:{
        minus(state, action){ 
            return state - action.payload
        },
        plus(state, action){ 
            return state + action.payload
        }
    }
})

export const {minus,plus} = Counter.actions
export default Counter.reducer;