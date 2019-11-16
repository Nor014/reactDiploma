import { createStore, combineReducers, applyMiddleware } from 'redux';
import cartReducer from '../reducers/cartReducer'

const generalReducer = combineReducers({
  cartState: cartReducer
})

const store = createStore(generalReducer)

export default store