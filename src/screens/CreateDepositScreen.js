import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export const CreateDepositScreen = ({ route, navigation }) => {
    return (
        <View style={style.center}>
            <View style={{ flexDirection: 'row' }}>
                <Button
                    title="Назад к объекту"
                    onPress={() => navigation.goBack()}
                />
                <Button
                    title="Все объекты"
                    onPress={() => navigation.navigate('MainScreen')}
                />
            </View>
            <Text>  Экран  пополнения баланса </Text>
        </View>
    )
}

const style = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
