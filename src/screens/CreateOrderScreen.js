import React, {useState, useRef} from 'react'
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
import { PhotoPicker } from '../components/PhotoPicker'


export const CreateOrderScreen = ({navigation}) => {
    const dispatch = useDispatch();
    const [text, setText] = useState('')
    const imgRef = useRef

    const photoPickHandler = uri => {
        imgRef.current = uri
    }
    const saveHandler = () => {
        const order = {
            date: new Date().toJSON(),
            text: text,
            img: imgRef.current,
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
                <PhotoPicker onPick= {photoPickHandler}/>
               
                <Button 
                    title= 'Создать пост'  
                    color= {THEME.MAIN_COLOR}
                    onPress={saveHandler}
                    disabled={!text}
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
