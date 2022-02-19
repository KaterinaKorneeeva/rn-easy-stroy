import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, StyleSheet, Button} from 'react-native'
import { COLORS, FONTS } from '../theme'
import { InfoBalance } from '../components/InfoBalance'
import { AppTextInput } from '../components/ui/AppTextInput'
import Table from '../components/Table'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { CommonActions } from '@react-navigation/native';
import { loadOperations,  addExpense} from '../store/actions/order'

export const CreateDepositScreen = ({ route, navigation }) => {

    const [sum, setSum] = useState('')
    const [comment, commentSet] = useState('');
    const [step, setStep] = useState(1);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadOperations())
    }, [dispatch])


    const listExpensesFull = useSelector(state => state.order.allOperations)
        .filter((offer) => offer.type === 'deposit')
       

    const nextStepHandler = () => {
        setStep(step + 1)
    }

    // создать расход - тип  type: 'expense' в список всех операций,
    const saveHandler = () => {
        alert('Баланс пополнен')

        setSum('')
        setStep(1)

        const spendingItem = {
            date: new Date().toDateString().slice(4, 10),
            sum: sum,
            name: 'Пополнение баланса',
            comment: comment,
            type: 'deposit',
        }

        dispatch(addExpense(spendingItem))

    }
    return (
        <KeyboardAwareScrollView
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={styles.container}
            extraScrollHeight={50}
        >
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <Button
                        title="Все объекты"
                        onPress={() =>
                            navigation.dispatch(
                                CommonActions.navigate({
                                    name: 'MainScreen',
                                })
                            )
                        }
                    />
                </View>

                {/* информация о балансе объекта */}
                <InfoBalance/>

                {/* таблица со списком пополнений */}
                <Table data={listExpensesFull} route={route}/>


                {/* пошаговая запись пополнений */}
                {/* 1ый шаг  ввод суммы обязательное*/}
                {step === 1 &&
                    <View style={styles.inputContainer}>
                        <AppTextInput
                            placeholder="введите сумму"
                            value={sum}
                            inputChange={setSum}
                            keyboardType="numeric"
                            label="введите сумму"
                            autoFocus
                        />
                        {/* добавить календарь */}
                        <Button
                            title='Продолжить' // 
                            color={COLORS.BLUE}
                            onPress={nextStepHandler}
                            disabled={!sum}
                        />
                    </View>
                }
                {/* 2ой шаг - Комментарий необязательно*/}
                {step === 2 &&
                    <View style={styles.inputContainer}>
                        <AppTextInput
                            placeholder="Комментарий"
                            value={comment}
                            inputChange={commentSet}
                            multiline
                            label="Комментарий"
                        />

                        <Button
                            title='Сохранить' // Сохранить и предлагаем сделать фото чека 
                            color={COLORS.BLUE}
                            onPress={saveHandler}
                        />
                    </View>
                }
            </View>
        </KeyboardAwareScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.WHITE,
        paddingHorizontal: 20,
    },

    shadowProp: {
        shadowColor: COLORS.BLACK,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
})
