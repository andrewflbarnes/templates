import { all, call, put, takeEvery } from 'redux-saga/effects';
import { fetchRate, fetchRateError, fetchRateSuccess } from './reducer';

const TO_CURR = 'eur'
const EXCHANGE_RATE_URL = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/gbp/${TO_CURR}.json`;

const getRateStub: () => Promise<string> = async () => {
    const response = await fetch(EXCHANGE_RATE_URL);
    if (!response.ok){
        throw parseErrorResponse(response);
    }
    const json = await response.json();
    return json[TO_CURR];
};

const parseErrorResponse = (response: Response) => {
    let errorMsg;
    const { status } = response;

    switch (status) {
        case 403:
        case 404:
            errorMsg = 'No exchange rate exists'
            break;
        default:
            errorMsg = `Response code ${!!status ? status : "unknown"}`;
            const { statusText } = response;
            if (!!statusText) {
                errorMsg += ` - ${statusText}`;
            }
    }

    throw new Error(errorMsg);
}

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