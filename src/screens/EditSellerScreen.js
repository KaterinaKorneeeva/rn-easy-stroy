import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Alert } from 'react-native'
import { AppTextInput } from '../components/ui/AppTextInput'
import { COLORS, FONTS } from '../theme'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { updateSeller } from '../store/actions/order'

export const EditSellerScreen = ({ route, navigation }) => {
    const dispatch = useDispatch();
    const { sellerId } = route.params;

    console.log('route.paramsroute.params',route.params);

    const seller = useSelector(state =>
        state.order.allSellers.find(o => o.id === sellerId)
    )

    console.log('descriptiondescriptionorderorderorderorder',seller);

    const [name, setName] = useState(seller.name)
    const [address, setAddress] = useState(seller.address)
    const [phone, setPhone] = useState(seller.phone)
    const [description, setDescription] = useState(seller.description)



    const updateHandler = () => {
        dispatch(updateSeller(
            sellerId,
            name,
            address,
            phone,
            description,
        ))
        navigation.navigate('SellerScreen', { sellerId: sellerId })
    }

    const removeHandler = () => {
        Alert.alert(
            'Удаление подавца',
            'Вы точно хотите удалить подавца?',
            [
                {
                    text: 'Отменить',
                    style: 'cancel'
                },
                {
                    text: 'Удалить', style: 'destructive',
                    onPress: () => {
                        //   поменять ссылку 
                        navigation.navigate('MainScreen')
                        // dispatch(removeOrders(orderId))
                    }
                }
            ],
            { cancelable: false }
        )
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
                        onPress={updateHandler}
                        disabled={!name}
                    />
                    <Button
                        title='Удалить'
                        color={COLORS.RED}
                        onPress={removeHandler}
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

    inputContainer: {
        position: 'relative',
        display: 'flex',
    },
})
