import { extend } from "../../utils";
import { LOAD_ORDERS, REMOVE_ORDER, ADD_ORDER, UPDATE_ORDER, LOAD_EXPENSES, ADD_EXPENSE, LOAD_SELLERS } from "../types"


const initialState = {
  allOrders: [],
  allSellers: [],
  allExpenses: [],
  allSellers: []
}

export const orderReducer = (state = initialState, action) => {

  switch (action.type) {
    case LOAD_ORDERS:
      return extend(state, {
        allOrders: action.payload,
      });
    case REMOVE_ORDER:
      return extend(state, {
        allOrders: state.allOrders.filter(p => p.id !== action.payload),
      });
    case ADD_ORDER:
      return extend(state, {
        allOrders: [{ ...action.payload }, ...state.allOrders]
      });
    case UPDATE_ORDER:
      return extend(state, {
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
      });
    case LOAD_EXPENSES:
      return extend(state, {
        allExpenses: action.payload,
      });

    case ADD_EXPENSE:
      return extend(state, {
        allExpenses: [{ ...action.payload }, ...state.allExpenses]
      });

    case LOAD_SELLERS:
      return extend(state, {
        allSellers: action.payload,
      });


  }

  return state
}
