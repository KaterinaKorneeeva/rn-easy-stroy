
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export const HistoryScreen = ({}) => {
    return (
        <View style={style.center}>
            <Text>  Экран добавления расхода </Text>
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
