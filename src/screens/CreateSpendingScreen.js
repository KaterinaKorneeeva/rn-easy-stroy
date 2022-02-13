import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity, Button } from 'react-native'
import { COLORS, FONTS } from '../theme'
import { AppTextInput } from '../components/ui/AppTextInput'
import { AppLabel } from '../components/ui/AppLabel'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { CommonActions } from '@react-navigation/native';
import Table from '../components/Table'
import { sellerInfoById } from '../../src/orders'
import { addExpense } from '../store/actions/order'
import { loadExpenses, loadSellers } from '../store/actions/order'


export const CreateSpendingScreen = ({ route, navigation }) => {

    const [sum, setSum] = useState('')
    const [expenseName, expenseNameSet] = useState('')
    const [label, setLabel] = useState('');
    const [comment, commentSet] = useState('');

    const [step, setStep] = useState(1);

  


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadExpenses())
    }, [dispatch])


    useEffect(() => {
        dispatch(loadSellers())
    }, [dispatch])


    const listSellers = useSelector(state => state.order.allSellers)


    

    //добавление имени и лого продавца по id продавца
    const adaptData = (item) => {
        const sellerTest = sellerInfoById(listSellers, item.seller_id)
        return Object.assign(item, {
            sellerName: sellerTest.name,
            sellerLogo: 'sellerLogo',
        });
    };
    const listExpensesFull = useSelector(state => state.order.allExpenses).map((item, i) => adaptData(item))

    const nextStepHandler = () => {
        setStep(step + 1)
    }

    const saveHandler = () => {
        alert('Сделать фото чека?')
        setSum('')
        setStep(1)


        

        const spendingItem = {
            date: new Date().toDateString().slice(4, 10),
            sum: sum,
            expenseName: expenseName,
            seller_id: label,
            comment: comment,
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

                <View style={[styles.boxInfo]}>
                    <View style={[styles.item, styles.shadowProp]}>
                        <Text style={{ color: COLORS.BLACK, ...FONTS.body2 }}>расход</Text>
                        <Text style={{ color: COLORS.BLACK, ...FONTS.smallTitle }}>135 000 ₽</Text>
                    </View>
                    <View style={[styles.item, styles.shadowProp]}>
                        <Text style={{ color: COLORS.BLACK, ...FONTS.body2 }}>баланс</Text>
                        <Text style={{ color: COLORS.BLACK, ...FONTS.smallTitle }}>1 000 000 ₽</Text>

                    </View>
                </View>
                {/* таблица со списком расходов */}
                <Table data={listExpensesFull} />


                {/* пошаговая запись затрат */}


                {/* 1ый шаг  ввод суммы обязательное*/}
                {step === 1 &&
                    <View style={styles.inputContainer}>
                        <AppTextInput
                            placeholder="введите сумму"
                            value={sum}
                            inputChange={setSum}
                            keyboardType="numeric"
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

                {/* 2ой шаг ввод наименования покупки*/}
                {step === 2 &&
                    <View style={styles.inputContainer}>
                        <AppTextInput
                            placeholder="наименование"
                            value={expenseName}
                            inputChange={expenseNameSet}
                        />
                        {/* добавить календарь */}
                        <Button
                            title='Продолжить' //  
                            color={COLORS.BLUE}
                            onPress={nextStepHandler}
                            disabled={!expenseName}
                        />
                    </View>
                }

                {/* 3й шаг  - выбор продавца обязательное */}
                {step === 3 &&
                    <View style={styles.inputContainer}>
                        <Text style={{ color: COLORS.GREY, textAlign: 'center', ...FONTS.body1, marginBottom: 10 }}>продавец</Text>

                        <View style={{ alignItems: 'center' }}>
                            <AppLabel
                                label={label}
                                setLabel={setLabel}
                                values={listSellers} />
                            <Button
                                title='Продолжить' // Сохранить и предлагаем сделать фото чека 
                                color={COLORS.BLUE}
                                onPress={nextStepHandler}
                                disabled={!sum}
                            />
                        </View>
                    </View>
                }
                {/* 4й шаг - Комментарий необязательно*/}
                {step === 4 &&
                    <View style={styles.inputContainer}>
                        <AppTextInput
                            placeholder="Комментарий "
                            value={comment}
                            inputChange={commentSet}
                            multiline
                        />

                        <Button
                            title='Сохранить' // Сохранить и предлагаем сделать фото чека 
                            color={COLORS.BLUE}
                            onPress={saveHandler}
                        // disabled={!sum}
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

    boxInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    item: {
        backgroundColor: "white",
        borderRadius: 10,
        maxWidth: 167,

        shadowColor: "#000",
        padding: 10,
        flex: 1,
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
