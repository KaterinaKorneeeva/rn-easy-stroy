import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, StyleSheet, Button} from 'react-native'
import { COLORS, FONTS } from '../theme'
import { AppTextInput } from '../components/ui/AppTextInput'
import { AppLabel } from '../components/ui/AppLabel'
import { AppModal } from '../components/ui/AppModal'
import Table from '../components/Table'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { CommonActions } from '@react-navigation/native';
import { sellerInfoById } from '../../src/orders'
import { loadExpenses, loadSellers, addExpense, addSeller} from '../store/actions/order'

export const CreateSpendingScreen = ({ route, navigation }) => {

    const [sum, setSum] = useState('')
    const [expenseName, expenseNameSet] = useState('')
    const [label, setLabel] = useState('');
    const [comment, commentSet] = useState('');
    const [sellerNew, setSellerNew] = useState('');
    const [step, setStep] = useState(1);
    const [modalVisible, setModalVisible] = useState(false);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadExpenses())
    }, [dispatch])


    useEffect(() => {
        dispatch(loadSellers())
    }, [dispatch])


    const listSellers = useSelector(state => state.order.allSellers).filter((item) => item.empty !== true)


    const openModalHandler = () => {
        setModalVisible(true)
    }


    const addSellerHandler = () => {
        const sellerNewData = {
            date: new Date().toJSON(),
            name: sellerNew,
            address: '',
            phone: '',
            type: 'seller',
            numberOrders: '',
            balance: '',
            logo: '',
            description: '',
        }
        dispatch(addSeller(sellerNewData))
        setSellerNew('')
        // закрыть модальное окно
        setModalVisible(!modalVisible)
    }

    // добавление имени и лого продавца по id продавца
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

            <AppModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
            >

                <Text style={styles.title}> Добавить нового продавца</Text>
                <AppTextInput
                    placeholder="наименование"
                    value={sellerNew}
                    inputChange={setSellerNew}
                    label="наименование"
                />
                {/* добавить календарь */}
                <Button
                    title='Сохранить' //  
                    color={COLORS.BLUE}
                    onPress={addSellerHandler}
                    disabled={!sellerNew}
                />
            </AppModal>

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
                            label="введите сумму"
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
                            label="наименование"
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
                                values={listSellers}
                                isModeCreate
                                openModalHandler={openModalHandler}
                            />
                            <Button
                                title='Продолжить' // Сохранить и предлагаем сделать фото чека 
                                color={COLORS.BLUE}
                                onPress={nextStepHandler}
                                disabled={!label}
                            />
                        </View>
                    </View>
                }
                {/* 4й шаг - Комментарий необязательно*/}
                {step === 4 &&
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

    modalView: {
        marginTop: '20%',
        marginVertical: 20,
        marginHorizontal: 20,
        backgroundColor: COLORS.WHITE,
        borderRadius: 10,
        padding: 35,
        alignItems: "center",
    },

})
