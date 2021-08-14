import { all, call, put, takeEvery } from 'redux-saga/effects';
import { fetchRate, fetchRateError, fetchRateSuccess } from './reducer';

const TO_CURR = 'eur'
const EXCHANGE_RATE_URL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/gbp/${TO_CURR}.json`;


const getRateStub: () => Promise<string> = async () => {
    const response = await fetch(EXCHANGE_RATE_URL);
    const json = await response.json();
    return json[TO_CURR];
};

function* fetchRateSaga() {
    try {
        const rate: string = yield call(getRateStub)
        yield put(fetchRateSuccess(rate))
    } catch (e) {
        yield put(fetchRateError(`Failed to fetch rate: ${e}`))
    }
}

function* homeSagas() {
    yield all([
        takeEvery(fetchRate.type, fetchRateSaga),
    ])
}

export default homeSagas;