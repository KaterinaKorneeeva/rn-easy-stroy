import { LOAD_ORDERS, REMOVE_ORDER, ADD_ORDER, UPDATE_ORDER } from "../types"

const initialState = {
  allOrders: [],
  allSellers: []
}

export const orderReducer = (state = initialState, action) => {


  switch (action.type) {
    case LOAD_ORDERS:
      return {
        ...state,
        allOrders: action.payload,
      }
    case REMOVE_ORDER:
      return {
        ...state,
        allOrders: state.allOrders.filter(p => p.id !== action.payload),
      }
    case ADD_ORDER:
      return {
        ...state,
        allOrders: [{ ...action.payload }, ...state.allOrders]
      }
    case UPDATE_ORDER:
      return {
        ...state,
        allOrders: state.allOrders.map(order => {
          if (order.id === action.payload.id) {
            order.name = action.payload.name
            order.address = action.payload.address
            order.сustomer = action.payload.сustomer
            order.phone = action.payload.phone
            order.floorArea = action.payload.floorArea
            order.price = action.payload.price
            order.description = action.payload.description
            order.dateStart = action.payload.dateStart
            order.dateFinish = action.payload.dateFinish
            order.pay = action.payload.pay
          }
          return order
        })
      }
  }

  return state
}
