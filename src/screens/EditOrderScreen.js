import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { DATA } from '../data'
export const EditOrderScreen = ({route, navigation}) => {

    
    // console.log('paramsparams',route);
    const { orderId } = route.params;
    const order = DATA.find(o=> o.id === orderId)


    return (
        <View style={style.center}>
            <Text> Редавктирование Объекта {order.name}</Text>
        </View>
    )
}

const style = StyleSheet.create ({
    center: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
})
