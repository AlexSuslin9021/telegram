import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    loader: boolean;
}

const initialState: InitialState = {
    loader: false,
};

const appSlice = createSlice({
    name: "app",
    initialState: initialState,
    reducers: {
        toggleLoader(state, action: { payload: boolean }) {
            state.loader = action.payload;
        },
    },
});

export const { toggleLoader } = appSlice.actions;
export const app= appSlice.reducer;
