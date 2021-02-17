import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducer'
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch

export default store