import { LOAD_ORDERS, REMOVE_ORDER, ADD_ORDER, UPDATE_ORDER } from '../types'
import { DATA } from '../../data'


export const loadOrders = () => {
  return {
    type: LOAD_ORDERS,
    payload: DATA
  }
}

export const removeOrders = id => {
  return {
    type: REMOVE_ORDER,
    payload: id
  }
}

export const addOrder = post => {
  post.id = Date.now().toString()

  return {
    type: ADD_ORDER,
    payload: post
  }
}

export const updateOrder = (id, name) => {

  return {
    type: UPDATE_ORDER,
    payload : {
      id : id,
      name : name
    }
  }
}


