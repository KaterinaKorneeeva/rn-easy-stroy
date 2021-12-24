import { LOAD_ORDERS, REMOVE_ORDER} from '../types'
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
  