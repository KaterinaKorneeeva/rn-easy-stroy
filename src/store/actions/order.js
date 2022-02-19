import { LOAD_ORDERS, REMOVE_ORDER, ADD_ORDER, UPDATE_ORDER, LOAD_OPERATIONS,LOAD_OPERATIONS_EXPENSE, ADD_EXPENSE, LOAD_SELLERS, ADD_SELLER, UPDATE_SELLER} from '../types'
import { DATA, LIST_OPERATIONS, LIST_SELLERS} from '../../data'


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



export const loadOperations = () => {
  return {
    type: LOAD_OPERATIONS,
    payload: LIST_OPERATIONS
  }
}

export const loadOperationsExpense = () => {
  return {
    type: LOAD_OPERATIONS_EXPENSE,
    payload: LIST_OPERATIONS
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

export const addSeller = seller => {
  seller.id = Date.now().toString()

  return {
    type: ADD_SELLER,
    payload: seller
  }
}


export const updateSeller = (id, name, address, phone, description) => {

  return {
    type: UPDATE_SELLER,
    payload : {
      id : id,
      name : name,
      address, 
      phone,
      description,
    }
  }
}


