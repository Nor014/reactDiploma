import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import saga from '../saga/saga';
import cartReducer from '../reducers/cartReducer';
import hitsReducer from '../reducers/hitsReducer';
import catalogReducer from '../reducers/catalogReducer';
import catalogNavReducer from '../reducers/catalogNavReducer';
import loadMoreReducer from '../reducers/loadMoreReducer';

const generalReducer = combineReducers({
  cartState: cartReducer,
  hitsState: hitsReducer,
  catalogState: catalogReducer,
  catalogNavState: catalogNavReducer,
  loadMoreState: loadMoreReducer,
})

const sagaMiddleware = createSagaMiddleware();
const store = createStore(generalReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(saga)

export default store