import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type HomeState = {
    count: number
    intervalEnabled: boolean
}

const initialState: HomeState = {
    count: 0,
    intervalEnabled: false,
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
        toggleIntervalEnabled(state, action: PayloadAction<undefined>) {
            state.intervalEnabled = !state.intervalEnabled
        }
    }
});

export const {
    resetCount,
    incrementCount,
    decrementCount,
    toggleIntervalEnabled,
} = homeSlice.actions;

export default homeSlice.reducer;