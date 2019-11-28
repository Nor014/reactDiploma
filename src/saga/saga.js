import { spawn, take, put, fork, call, takeLatest } from 'redux-saga/effects';
import { fetchData, setHits, setCatalogNav, setCatalog, setCatalogAndDisable, setMoreForCategory, setMoreForCategoryAndDisable } from '../actions/actions'


function* getDataSaga(action) {
  try {
    const url = action.payload.url;
    const fromComponent = action.payload.fromComponent;
    const data = yield call(fetchData, url);

    console.log(data)

    if (fromComponent === 'SalesHits') {
      yield put(setHits(data))
    } else if (fromComponent === 'CatalogNav') {
      yield put(setCatalogNav(data))
    } else if (fromComponent === 'Catalog') {
      yield data.length < 6 ? put(setCatalogAndDisable(data)) : put(setCatalog(data))
    } else if (fromComponent === 'LoadMore') {
      yield data.length < 6 ? put(setMoreForCategoryAndDisable(data)) : put(setMoreForCategory(data))
    }

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
  yield takeLatest('CATALOG_LOAD', getDataSaga)
}

function* loadMoreWatcher() {
  while (true) {
    const action = yield take('LOAD_MORE_FOR_CATEGORY')
    yield fork(getDataSaga, action)
  }
}

function* productWatcher() {
  while (true) {
    const action = yield take('LOAD_PRODUCT')
    yield fork(getDataSaga, action)
  }
}

export default function* saga() {
  yield spawn(salesHitsWatcherSaga)
  yield spawn(catalogNavWatcherSaga)
  yield spawn(catalogWatcherSaga)
  yield spawn(loadMoreWatcher)
  yield spawn(productWatcher)
}