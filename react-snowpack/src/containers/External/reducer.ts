import { createSlice, PayloadAction, current } from '@reduxjs/toolkit';

type ExternalState = {
    fetching: boolean
    error: string
    rate: string
}

const initialState: ExternalState = {
    fetching: false,
    error: '',
    rate: '',
}

const externalSlice = createSlice({
    name: 'external',
    initialState,
    reducers: {
        fetchRate(state, action: PayloadAction<undefined>) {
            state.fetching = true;
        },
        fetchRateError(state, action: PayloadAction<string>) {
            state.fetching = false;
            state.rate = '';
            state.error = action.payload
        },
        fetchRateSuccess(state, action: PayloadAction<string>) {
            state.fetching = false;
            state.rate = action.payload
            state.error = '';
        },
    }
});

export const {
    fetchRate,
    fetchRateError,
    fetchRateSuccess,
} = externalSlice.actions;

export default externalSlice.reducer;