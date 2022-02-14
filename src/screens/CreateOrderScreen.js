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
import { PhotoPicker } from '../components/PhotoPicker'
import { AppDatePicker } from '../components/ui/AppDatePicker'
import { AppTextInput } from '../components/ui/AppTextInput'
import { COLORS, FONTS } from '../theme'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import RNPickerSelect from 'react-native-picker-select';

import { addOrder } from '../store/actions/order'

export const CreateOrderScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [сustomer, setСustomer] = useState('')
    const [phone, setPhone] = useState('')
    const [floorArea, setFloorArea] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [dateStart, setDateStart] = useState('')
    const [dateFinish, setDateFinish] = useState('')
    const [pay, setPay] = useState('')

    const imgRef = useRef

    const photoPickHandler = uri => {
        imgRef.current = uri
    }
    const saveHandler = () => {
        const order = {
            date: new Date().toJSON(),
            name: name,
            address: address,
            сustomer: сustomer,
            phone: phone,
            floorArea: floorArea,
            price: price,
            dateStart: dateStart,
            dateFinish: dateFinish,
            description: description,
            pay: pay,
            responsible: 'Константин',
            status: 1,
            balance: '0',
            img: imgRef.current,
        }

        dispatch(addOrder(order))
        navigation.navigate('MainScreen')
    }

    return (
        <KeyboardAwareScrollView
            resetScrollToCoords={{ x: 0, y: 0 }}
        // contentContainerStyle={styles.container}
        >
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.inner}>
                    <View style={styles.inputContainer}>
                        <AppTextInput
                            placeholder="Название объекта"
                            value={name}
                            inputChange={setName}
                            label="Название объекта"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <AppTextInput
                            placeholder="Адрес объекта"
                            value={address}
                            inputChange={setAddress}
                            dataDetectorTypes='address'
                            label="Адрес объекта"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <AppTextInput
                            placeholder="Имя заказчика"
                            value={сustomer}
                            inputChange={setСustomer}
                            label="Имя заказчика"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <AppTextInput
                            placeholder="Телефон заказчика"
                            value={phone}
                            inputChange={setPhone}
                            keyboardType="numeric"
                            dataDetectorTypes={['phoneNumber']}
                            label="Телефон заказчика"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <AppTextInput
                            placeholder="Площадь объекта"
                            value={floorArea}
                            inputChange={setFloorArea}
                            keyboardType="numeric"
                            label="Площадь объекта"
                        />
                    </View>

                    <View style={styles.inputWrapper}>
                        <AppTextInput
                            placeholder="Сумма ремонта"
                            value={price}
                            inputChange={setPrice}
                            keyboardType="numeric"
                            label="Сумма ремонта"
                            size="small"
                        />

                        <View style={styles.select}>
                            {pay !== '' && <Text style={styles.selectLabel}>Вид оплаты</Text>}
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
                            <AppDatePicker
                                value={dateStart}
                                setDate={setDateStart}
                                placeholder="Начало работ"
                                label="Начало работ"

                            />
                        </View>
                        <View style={styles.inputContainer}>
                            <AppDatePicker
                                value={dateFinish}
                                setDate={setDateFinish}
                                placeholder="Сдача объекта"
                                label="Сдача объекта"
                            />
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <AppTextInput
                            placeholder="Описание"
                            value={description}
                            inputChange={setDescription}
                            dataDetectorTypes='phoneNumber'
                            multiline
                            label="Описание"
                        />
                    </View>
                    <PhotoPicker onPick={photoPickHandler} />

                    <Button
                        title='Сохранить'
                        color={COLORS.BLUE}
                        onPress={saveHandler}
                        disabled={!name}
                    />
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAwareScrollView >
    )
}

const styles = StyleSheet.create({
    inner: {
        padding: 24,
        flex: 1,
    },
    inputWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
    },

    inputContainer: {
        position: 'relative',
        display: 'flex',
    },

    select: {
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderBottomColor: COLORS.GREY,
      
        fontSize: 16,

        width: '50%', 
        paddingTop: 40,
        paddingBottom: 10, 
        position: 'relative' 
    },
    selectLabel: {
        marginBottom: 10,
        color: COLORS.GREY,
        ...FONTS.body2,
        position: 'absolute',
        top: 10
    },

})
