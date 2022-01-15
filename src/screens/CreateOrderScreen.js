import React, { useState, useRef } from 'react'
import { useDispatch } from 'react-redux'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    Button,
    ScrollView,
    TouchableWithoutFeedback,
    Platform,
    Keyboard, // для закрытия клавиатуры
} from 'react-native'
import { COLORS } from '../theme'
import { addOrder } from '../store/actions/order'
import { PhotoPicker } from '../components/PhotoPicker'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import DatePicker from 'react-native-datepicker'

import RNPickerSelect from 'react-native-picker-select';

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
        console.log('pay',pay)
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
                    <TextInput
                        style={styles.input}
                        placeholder="Название объекта"
                        value={name}
                        onChangeText={setName}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Адрес объекта "
                        value={address}
                        onChangeText={setAddress}
                        dataDetectorTypes='address'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Имя заказчика"
                        value={сustomer}
                        onChangeText={setСustomer}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Телефон заказчика"
                        value={phone}
                        onChangeText={setPhone}
                        keyboardType="numeric"
                        dataDetectorTypes={['phoneNumber']}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Площадь объекта"
                        value={floorArea}
                        onChangeText={setFloorArea}
                        keyboardType="numeric"
                    />

                    <View style={styles.inputWrapper}>
                        <TextInput
                            style={[styles.input, styles.inputHalf]}
                            placeholder="Сумма ремонта"
                            value={price}
                            onChangeText={setPrice}
                            keyboardType="numeric"
                        />

                        <View style={[styles.input, {width:'50%', marginTop: 40, position:'relative'}]}>
                            <Text style={{position:'absolute', top: 0}}>Вид оплаты</Text>
                            <RNPickerSelect
                                onValueChange={setPay}
                                value={pay}
                                const placeholder={{
                                    label: 'Вид оплаты',
                                    value: null,
                                    color: '#9EA0A4',
                                }}
                                items={[
                                    { label: "cash", value: "Наличные" },
                                    { label: "Non-cash", value: "безналичный расчет"},
                                ]}
                            />
                        </View>


                        <DatePicker
                            style={{ width: '45%', paddingTop: 40, fontSize: 20 }}
                            date={dateStart}
                            // iconSource
                            mode="date"
                            placeholder="Начало работ"
                            iconSource={require('../../assets/favicon.png')}
                            format="YYYY-MM-DD"
                            minDate="2021-01-01"
                            maxDate="2050-01-01"
                            confirmBtnText="ок"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    right: -10,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    // marginLeft: 36,
                                    borderColor: 'red',
                                    borderTopColor: 'transparent',
                                    borderRightColor: 'transparent',
                                    borderLeftColor: 'transparent',
                                    borderBottomWidth: 1,
                                    borderStyle: 'solid',
                                    borderBottomColor: COLORS.GREY,

                                    // paddingTop: 40,
                                    // paddingBottom: 10,
                                    color: COLORS.GREY,
                                    fontSize: 16,

                                },


                                // ... You can check the source to find the other keys.
                            }}
                            onDateChange={setDateStart}
                        />

                        <DatePicker
                            style={{ width: '45%', paddingTop: 40 }}
                            date={dateFinish}
                            // iconSource
                            mode="date"
                            placeholder="Сдача объекта"
                            format="YYYY-MM-DD"
                            minDate="2021-01-01"
                            maxDate="2050-01-01"
                            confirmBtnText="ок"
                            iconSource={require('../../assets/favicon.png')}
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    right: -10,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    // marginLeft: 36,
                                    borderColor: 'red',
                                    borderTopColor: 'transparent',
                                    borderRightColor: 'transparent',
                                    borderLeftColor: 'transparent',
                                    borderBottomWidth: 1,
                                    borderStyle: 'solid',
                                    borderBottomColor: COLORS.GREY,

                                    // paddingTop: 40,
                                    // paddingBottom: 10,
                                    color: COLORS.GREY,
                                    fontSize: 16,

                                },


                                // ... You can check the source to find the other keys.
                            }}
                            onDateChange={setDateFinish}
                        />


                      
                    </View>

                    <TextInput
                        style={styles.input}
                        placeholder="Описание"
                        value={description}
                        onChangeText={setDescription}
                        multiline
                    />

                    <PhotoPicker onPick={photoPickHandler} />

                    <Button
                        title='Сохранить'
                        color={COLORS.MAIN_COLOR}
                        onPress={saveHandler}
                        disabled={!name}
                    />
                </View>

            </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
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
    input: {
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderBottomColor: COLORS.GREY,

        paddingTop: 40,
        paddingBottom: 10,
        color: COLORS.GREY,
        fontSize: 16,
    },
    inputHalf: {
        width: '45%'
    },
    inputWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },


    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'black',
        paddingRight: 30, // to ensure the text is never behind the icon
    },
})
