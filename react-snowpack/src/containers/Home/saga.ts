import { all, takeEvery } from 'redux-saga/effects';
import { resetCount } from './reducer';

const handleIncrement = () => {
    console.log('resetting!');
}

function* homeSagas() {
    yield all([
        takeEvery(resetCount.type, handleIncrement),
    ])
}

export default homeSagas;