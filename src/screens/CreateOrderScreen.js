import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
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


export const CreateOrderScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const [text, setText] = useState('')
    const img = 'https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg'


   
    const saveHandler = () => {
        const order = {
            date: new Date().toJSON(),
            text: text,
            img : img
        }
        dispatch(addOrder(order))
        navigation.navigate('Объекты') 
    }

    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
            <View style={styles.wrapper}>
                <Text style={styles.title}> Новый объект</Text>
                <TextInput
                    placeholder="Введите текст заметки "
                    value= {text}
                    onChangeText = {setText}
                    multiline
                />
                <Image
                    style = {{ width: '100%', height: 200, marginBottom: 10}}
                    source= {{
                    uri: img
                    }}
                />
                <Button 
                    title= 'Создать пост'  
                    color= {THEME.MAIN_COLOR}
                    onPress={saveHandler}
                />
            </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    )
}

const styles = StyleSheet.create ({
    wrapper: {
       padding:10, 
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 10,
    },
    textarea: {
        padding: 10,
        marginBottom: 10,
    }
})
