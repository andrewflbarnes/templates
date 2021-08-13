import { all, takeEvery } from 'redux-saga/effects';
import { resetCount } from './reducer';

const reset = () => {
    console.log('resetting!');
}

function* homeSagas() {
    yield all([
        takeEvery(resetCount.type, reset),
    ])
}

export default homeSagas;