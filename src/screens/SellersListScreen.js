import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SellersList } from '../components/SellersList'
import { loadSellers } from '../store/actions/order'

export const SellersListScreen = ({ navigation }) => {
    const openSellerHandler = seller => {
        navigation.navigate('SellerScreen', { sellerId: seller.id, sellerName: seller.name, })
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



