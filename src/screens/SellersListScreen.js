import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const SellersListScreen = ({}) => {
    return (
        <View style={style.center}>
            <Text> Справочники продавцов </Text>
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
