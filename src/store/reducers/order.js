import { extend, replaceItem } from "../../utils";
import { LOAD_ORDERS, REMOVE_ORDER, ADD_ORDER, UPDATE_ORDER, LOAD_OPERATIONS, ADD_EXPENSE, LOAD_SELLERS, ADD_SELLER, UPDATE_SELLER } from "../types"


const initialState = {
  allOrders: [],
  allSellers: [],
  allOperations: [],
  allSellers: [],
  allOperationsExpense:[]
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

    //   // expense
    // case LOAD_OPERATIONS:
    //   return extend(state, {
    //     allOperations: action.payload,
    //   });


      case LOAD_OPERATIONS:
      return extend(state, {
        allOperations: action.payload,
      });

    case ADD_EXPENSE:
      return extend(state, {
        allOperations: [{ ...action.payload }, ...state.allOperations]
      });

    case LOAD_SELLERS:
      return extend(state, {
        allSellers: action.payload,
      });
    case ADD_SELLER:
      return extend(state, {
        allSellers: [{ ...action.payload }, ...state.allSellers]
      });

    case UPDATE_SELLER:
      return extend(state, {
        allSellers: state.allSellers.map(seller => {
          if (seller.id === action.payload.id) {
            seller.name = action.payload.name
            seller.address = action.payload.address
            seller.phone = action.payload.phone
            seller.description = action.payload.description
          }
          return seller
        })
      });
  }

  return state
}
