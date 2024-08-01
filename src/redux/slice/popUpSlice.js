

import { createSlice } from "@reduxjs/toolkit";

// Define the initial state of the slice
const initialState = {
    toggle: false
};

// Create the slice using createSlice
const popUpSlice = createSlice({
    name: 'popUp',
    initialState,
    reducers: {
        togglePopUp(state, action) {
            state.toggle = action.payload;
        }
    }
});

// Export the reducer and actions
export const { togglePopUp } = popUpSlice.actions;
export default popUpSlice.reducer;
