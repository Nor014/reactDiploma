import { spawn, take, put, fork, call, takeLatest } from 'redux-saga/effects';
import { fetchData, setHits, setCatalogNav, setCatalog, setNewCategory, setMoreForCategory,  setMoreForCategoryAndDisable} from '../actions/actions'


function* getDataSaga(action) {
  try {
    const url = action.payload;
    const data = yield call(fetchData, url);

    if (url === 'http://localhost:7070/api/categories') {
      yield put(setCatalogNav(data))
    } else if (url === 'http://localhost:7070/api/top-sales') {
      yield put(setHits(data))
    } else if (url === 'http://localhost:7070/api/items') {
      yield put(setCatalog(data))
    } else {
      yield put(setNewCategory(data))
    }

  } catch (error) {

  }
}

function* getMoreDataSaga(action) {
  try {
    const url = action.payload;
    const data = yield call(fetchData, url);
    console.log(data)

    yield data.length < 6 ? put(setMoreForCategoryAndDisable(data)) : put(setMoreForCategory(data))
  } catch (error) {

  }
}

function* salesHitsWatcherSaga() {
  while (true) {
    const action = yield take('LOAD_HITS')
    yield fork(getDataSaga, action)
  }
}

function* catalogNavWatcherSaga() {
  while (true) {
    const action = yield take('CATALOG_NAV_LOAD')
    yield fork(getDataSaga, action)
  }
}

function* catalogWatcherSaga() {
  while (true) {
    const action = yield take('CATALOG_LOAD')
    yield fork(getDataSaga, action)
  }
}

function* newCategoryWatcherSaga() {
  yield takeLatest('LOAD_NEW_CATEGORY', getDataSaga)
}

function* loadMoreWatcher() {
  while (true) {
    const action = yield take('LOAD_MORE_FOR_CATEGORY')
    yield fork(getMoreDataSaga, action)
  }
}


export default function* saga() {
  yield spawn(salesHitsWatcherSaga)
  yield spawn(catalogNavWatcherSaga)
  yield spawn(catalogWatcherSaga)
  yield spawn(newCategoryWatcherSaga)
  yield spawn(loadMoreWatcher)
}