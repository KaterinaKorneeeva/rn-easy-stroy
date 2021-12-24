import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const CreateOrderScreen = ({}) => {
    return (
        <View style={style.center}>
            <Text> Экран обавление нового объекта </Text>
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
