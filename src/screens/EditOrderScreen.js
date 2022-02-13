import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback } from 'react-native'
import { AppTextInput } from '../components/ui/AppTextInput'
import { COLORS, FONTS } from '../theme'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import RNPickerSelect from 'react-native-picker-select';
import { updateOrder } from '../store/actions/order'
import { AppDatePicker } from '../components/ui/AppDatePicker'
export const EditOrderScreen = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const { orderId } = route.params;

    const order = useSelector(state =>
        state.order.allOrders.find(o => o.id === orderId)
    )

    const [name, setName] = useState(order.name)
    const [address, setAddress] = useState(order.address)
    const [сustomer, setСustomer] = useState(order.сustomer)
    const [phone, setPhone] = useState(order.phone)
    const [floorArea, setFloorArea] = useState(order.floorArea)
    const [price, setPrice] = useState(order.price)
    const [description, setDescription] = useState(order.description)
    const [dateStart, setDateStart] = useState(order.dateStart)
    const [dateFinish, setDateFinish] = useState(order.dateFinish)
    const [pay, setPay] = useState(order.pay)


    const updateHandler = () => {
        dispatch(updateOrder(
            orderId,
            name,
            address,
            сustomer,
            phone,
            floorArea,
            price,
            description,
            dateStart,
            dateFinish,
            pay
        ))
        navigation.navigate('OrderScreen', { orderId: orderId })
    }

    return (

        <KeyboardAwareScrollView
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={styles.container}
        >
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
               <View style={styles.inner}>
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
                    <View style={styles.inputContainer}>
                        {phone !== '' && <Text style={styles.label}>Телефон заказчика</Text>}

                        <AppTextInput
                            placeholder="Телефон заказчика"
                            value={phone}
                            inputChange={setPhone}
                            keyboardType="numeric"
                            dataDetectorTypes={['phoneNumber']}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        {floorArea !== '' && <Text style={styles.label}>Площадь объекта</Text>}
                        <AppTextInput
                            placeholder="Площадь объекта"
                            value={floorArea}
                            inputChange={setFloorArea}
                            keyboardType="numeric"
                        />
                    </View>

                    <View style={styles.inputWrapper}>
                        {price !== '' && <Text style={styles.label}>Сумма ремонта</Text>}
                        <AppTextInput
                            placeholder="Сумма ремонта"
                            value={price}
                            inputChange={setPrice}
                            keyboardType="numeric"
                            size='small'
                        />

                        <View style={[styles.input, { width: '50%', marginTop: 40, position: 'relative' }]}>
                            {pay !== '' && <Text style={styles.label}>Вид оплаты</Text>}
                            <RNPickerSelect
                                onValueChange={setPay}
                                value={pay}
                                const placeholder={{
                                    label: 'Вид оплаты',
                                    // value: null,
                                    color: COLORS.GREY,
                                }}
                                items={[
                                    { label: "cash", value: "Наличные" },
                                    { label: "Non-cash", value: "безналичный расчет" },
                                ]}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            {dateStart !== '' && <Text style={styles.label}>Начало работ</Text>}
                            <AppDatePicker
                                value={dateStart}
                                setDate={setDateStart}
                                placeholder="Начало работ"

                            />
                        </View>
                        <View style={styles.inputContainer}>
                            {dateFinish !== '' && <Text style={styles.label}>Сдача объекта</Text>}
                            <AppDatePicker
                                value={dateFinish}
                                setDate={setDateFinish}
                                placeholder="Сдача объекта"
                            />
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        {description !== '' && <Text style={styles.label}>Описание</Text>}
                        <AppTextInput
                            placeholder="Описание"
                            value={description}
                            inputChange={setDescription}
                            dataDetectorTypes='phoneNumber'
                            multiline
                        />
                    </View>
                    <Button
                        title='Сохранить'
                        color={COLORS.BLUE}
                        onPress={updateHandler}
                        disabled={!name}
                    />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAwareScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        
    },
    inner: {
        padding: 24,
        flex: 1,
    },
    inputWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },

    inputContainer: {
        position: 'relative',
        display: 'flex',
    },
    label: {
        marginBottom: 10,
        color: COLORS.GREY,
        ...FONTS.body2,
        position: 'absolute',
        top: 10
    },
    input: {
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderBottomColor: COLORS.GREY,

        paddingTop: 40,
        paddingBottom: 10,
        color: COLORS.GREY,
        fontSize: 16,
    },

})
