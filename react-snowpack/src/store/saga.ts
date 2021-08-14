import { all, fork } from 'redux-saga/effects';
import homeSaga from '@containers/Home/saga';
import externalSaga from '@containers/External/saga';

function* rootSaga() {
    yield all([
        fork(homeSaga),
        fork(externalSaga),
    ])
}

export default rootSaga;