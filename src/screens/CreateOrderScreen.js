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

            img: imgRef.current,
        }

        dispatch(addOrder(order))
        navigation.navigate('Объекты')
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
                            {pay !== '' && <Text style={styles.label}>{pay}</Text>}
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
    container: {
        flex: 1
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: 'space-around',
    },
    inputWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },

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
    }
})
