import { LOAD_ORDERS, REMOVE_ORDER, ADD_ORDER, UPDATE_ORDER, LOAD_EXPENSES, ADD_EXPENSE, LOAD_SELLERS} from '../types'
import { DATA, LIST_EXPENSES, LIST_SELLERS} from '../../data'


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

export const addOrder = order => {
  order.id = Date.now().toString()

  return {
    type: ADD_ORDER,
    payload: order
  }
}

export const updateOrder = (id, name, address, сustomer, phone, floorArea, price, description, dateStart, dateFinish, pay) => {

  return {
    type: UPDATE_ORDER,
    payload : {
      id : id,
      name : name,
      address, 
      сustomer, 
      phone,
      floorArea,
      price,
      description,
      dateStart,
      dateFinish,
      pay
    }
  }
}



export const loadExpenses = () => {
  return {
    type: LOAD_EXPENSES,
    payload: LIST_EXPENSES
  }
}


export const addExpense = expense => {
  expense.id = Date.now().toString()

  return {
    type: ADD_EXPENSE,
    payload: expense
  }
}



export const loadSellers = () => {
  return {
    type: LOAD_SELLERS,
    payload: LIST_SELLERS
  }
}


