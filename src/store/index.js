import { createStore, combineReducers } from 'redux'
import { orderReducer } from './reducers/order'

const rootReducer = combineReducers({
  order: orderReducer
})

export default createStore(rootReducer)
