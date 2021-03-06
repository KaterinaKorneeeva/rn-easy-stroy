import React, { useState, useRef } from 'react'
import { AppTextInput } from '../components/ui/AppTextInput'
import { COLORS, FONTS } from '../theme'
import { useDispatch } from 'react-redux'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
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

import { addSeller } from '../store/actions/order'
export const CreateSellerScreen = ({ navigation }) => {

    const dispatch = useDispatch();
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [description, setDescription] = useState('')


    const saveHandler = () => {
        const seller = {
            date: new Date().toJSON(),
            name: name,
            address: address,
            phone: phone,
            type: 'seller',
            numberOrders: '',
            balance: '',
            logo: '',
            description: description,
            // img: imgRef.current,
        }

        dispatch(addSeller(seller))
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
                            placeholder="Продавец"
                            value={name}
                            inputChange={setName}
                            label="Продавец"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <AppTextInput
                            placeholder="Телефон продавца"
                            value={phone}
                            inputChange={setPhone}
                            keyboardType="numeric"
                            dataDetectorTypes={['phoneNumber']}
                            label="Телефон продавца"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <AppTextInput
                            placeholder="Адрес продавца"
                            value={address}
                            inputChange={setAddress}
                            dataDetectorTypes='address'
                            label="Адрес продавца"
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <AppTextInput
                            placeholder="Описание"
                            value={description}
                            inputChange={setDescription}
                            multiline
                            label="Описание"
                        />
                    </View>

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
})