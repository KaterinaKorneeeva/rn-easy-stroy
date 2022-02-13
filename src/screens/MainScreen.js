import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {OrderList } from '../components/OrdersList'
import { loadOrders, loadExpenses } from '../store/actions/order'

export const MainScreen = ({navigation}) => {
    const openOrderHandler = order => {
        navigation.navigate('OrderScreen' , {orderId: order.id , orderName: order.name ,})
    }

    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(loadOrders())
    }, [dispatch])



    // useEffect(() => {
    //   dispatch(loadExpenses())
    // }, [dispatch])

    const allOrders = useSelector(state => state.order.allOrders)
    return <OrderList data={allOrders} onOpen={openOrderHandler} />
   
}
