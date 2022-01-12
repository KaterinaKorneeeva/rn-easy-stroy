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
    Keyboard, // для закрытия клавиатуры
} from 'react-native'
import { THEME } from '../theme'
import { addOrder } from '../store/actions/order'
import { PhotoPicker } from '../components/PhotoPicker'


export const CreateOrderScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [сustomer, setСustomer] = useState('')
    const [phone, setPhone] = useState('')
    const [floorArea, setFloorArea] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    



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
            responsible: 'Константин',
            
            img: imgRef.current,
        }
        dispatch(addOrder(order))
        navigation.navigate('Объекты')
    }



    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.wrapper}>
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
                        <TextInput
                            style={[styles.input, styles.inputHalf]}
                            placeholder="Сумма ремонта"
                            value={price}
                            onChangeText={setPrice}
                            keyboardType="numeric"
                        />

                        <TextInput
                            style={[styles.input, styles.inputHalf]}
                            placeholder="Начало работ"
                            value={price}
                            onChangeText={setPrice}
                            keyboardType="numeric"
                        />
                        <TextInput
                            style={[styles.input, styles.inputHalf]}
                            placeholder="Сдача объекта"
                            value={price}
                            onChangeText={setPrice}
                            keyboardType="numeric"
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
                        color={THEME.MAIN_COLOR}
                        onPress={saveHandler}
                        disabled={!name}
                    />
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 10,

    },
    textarea: {
        padding: 10,
        marginBottom: 10,
    },
    input: {
        borderBottomWidth: 0.5,
        borderStyle: 'solid',
        borderBottomColor: THEME.GREY,

        paddingTop: 40,
        paddingBottom: 10,
        color: THEME.GREY,
        fontSize: 16,
    },
    inputHalf: {
        width: '45%'
    },
    inputWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    }
})
