import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import saga from '../saga/saga';
import cartReducer from '../reducers/cartReducer';
import hitsReducer from '../reducers/hitsReducer';

const generalReducer = combineReducers({
  cartState: cartReducer,
  hitsState: hitsReducer
})

const sagaMiddleware = createSagaMiddleware();
const store = createStore(generalReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(saga)

export default store