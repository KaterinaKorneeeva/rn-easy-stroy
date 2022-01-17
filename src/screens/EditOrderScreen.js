import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import { View, Text, StyleSheet, Button } from 'react-native'
import { DATA } from '../data'
import { AppTextInput } from '../components/ui/AppTextInput'
import { COLORS, FONTS } from '../theme'

import { updateOrder } from '../store/actions/order'
export const EditOrderScreen = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const { orderId } = route.params;
    const order = DATA.find(o => o.id === orderId)

    const [name, setName] = useState(order.name)
    const [address, setAddress] = useState(order.address)
    const [сustomer, setСustomer] = useState(order.сustomer)



    const updateHandler = () => {
        dispatch(updateOrder(orderId, name))
        navigation.navigate('OrderScreen', { orderId: orderId })
    }

    return (
        <View style={styles.center}>
            <Text> Редактирование Объекта </Text>

            <View style={styles.inputContainer}>
                {name !== '' && <Text style={styles.label}>Название объекта</Text>}
                <AppTextInput
                    placeholder="Название объекта"
                    value={name}
                    inputChange={setName}
                />
            </View>
            <View style={styles.inputContainer}>
                {address !== '' && <Text style={styles.label}>Адрес объекта</Text>}
                <AppTextInput
                    placeholder="Адрес объекта"
                    value={address}
                    inputChange={setAddress}
                    dataDetectorTypes='address'
                />
            </View>
            <View style={styles.inputContainer}>
                {сustomer !== '' && <Text style={styles.label}>Имя заказчика</Text>}
                <AppTextInput
                    placeholder="Имя заказчика"
                    value={сustomer}
                    inputChange={setСustomer}
                />
            </View>

            <Button
                title='Сохранить'
                color={COLORS.BLUE}
                onPress={updateHandler}
            // disabled={!name}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        position: 'relative',
        flexDirection: 'column'
    },
    label: {
        marginBottom: 10,
        color: COLORS.GREY,
        ...FONTS.body2,
        position: 'absolute',
        top: 0
    },
    center: {
        flex: 1,
        // justifyContent: 'center', 
        // alignItems: 'center'
    },

})
