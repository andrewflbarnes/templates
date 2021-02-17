import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Counter {
    count: number
}

type HomeState = Counter;

const initialState: HomeState = {
    count: 0
}

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        resetCount(state, action: PayloadAction<undefined>) {
            state.count = 0;
        },
        incrementCount(state, action: PayloadAction<number>) {
            state.count = state.count + action.payload;
        },
        decrementCount(state, action: PayloadAction<number>) {
            state.count = state.count - action.payload;
        },
    }
});

export const {
    resetCount,
    incrementCount,
    decrementCount,
} = homeSlice.actions;

export default homeSlice.reducer;