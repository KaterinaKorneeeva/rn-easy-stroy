import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SellersList } from '../components/SellersList'
import { loadSellers } from '../store/actions/order'

export const SellersListScreen = ({ }) => {

    const openSellerHandler = order => {
        navigation.navigate('OrderScreen', { orderId: order.id, orderName: order.name, })
    }

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadSellers())
    }, [dispatch])

    const allSellers = useSelector(state => state.order.allSellers)

    return (
        <SellersList data={allSellers} onOpen={openSellerHandler} />
    )
}



