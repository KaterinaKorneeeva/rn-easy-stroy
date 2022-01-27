import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    ScrollView,
    TouchableWithoutFeedback,
    Platform,
    Keyboard, // для закрытия клавиатуры
} from 'react-native'

export const CreateSellerScreen = ({ navigation }) => {
    return (
<View style={style.center}>
            <Text>  Экран добавлени нового продавца </Text>
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