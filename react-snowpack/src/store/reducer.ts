import { combineReducers } from '@reduxjs/toolkit';
import { useSelector as reduxUseSelector, TypedUseSelectorHook } from 'react-redux';
import homeReducer from '@containers/Home/reducer';

const rootReducer = combineReducers({
    home: homeReducer,
})

export type ApplicationState = ReturnType<typeof rootReducer>

export const useSelector: TypedUseSelectorHook<ApplicationState> = reduxUseSelector;

export default rootReducer