import { LOAD_ORDERS, REMOVE_ORDER } from "../types"

const initialState = {
  allOrders: [],
  allSellers: []
}

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ORDERS : 
      return {
        ...state,
        allOrders: action.payload,
      }
    case REMOVE_ORDER : 
      return {
        ...state,
        allOrders: state.allOrders.filter(p => p.id !== action.payload),
      }
  }
  
  return state
}
