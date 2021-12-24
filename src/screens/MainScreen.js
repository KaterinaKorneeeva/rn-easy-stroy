import React from 'react'
import { View,  StyleSheet, FlatList} from 'react-native'
import { DATA } from '../data'
import { Order } from '../components/Order'
export const MainScreen = ({navigation}) => {
    
    const openOrderHandler = order => {
        navigation.navigate('OrderScreen' , {orderId: order.id , orderName: order.name ,})
    }

    return (
        <>
            <View style={style.wrapper}>
                <FlatList 
                    data = {DATA}
                    keyExtractor={order => order.id.toString()}
                    renderItem={({ item }) => <Order order={item}  onOpen={openOrderHandler}/>}
                />
            </View>
        </>
    )
}


const style = StyleSheet.create ({
    wrapper: {
       padding: 10
    }
})