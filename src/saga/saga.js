import { spawn, take, put, fork, call } from 'redux-saga/effects';
import { fetchData, setHits } from '../actions/actions'


function* getDataSaga(action) {
  try {
    const url = action.payload;
    const data = yield call(fetchData, url);
    yield put(setHits(data))
  } catch (error) {
   
  }
}

function* salesHitsWatcherSaga() {
  while (true) {
    const action = yield take('LOAD_HITS')
    yield fork(getDataSaga, action)
  }
}

export default function* saga() {
  yield spawn(salesHitsWatcherSaga)
}