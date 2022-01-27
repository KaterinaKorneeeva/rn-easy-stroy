import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity, Button } from 'react-native'
import { COLORS, FONTS } from '../theme'
import { listExpenses, sellersList } from '../../src/data'
import { AppTextInput } from '../components/ui/AppTextInput'
import { AppLabel } from '../components/ui/AppLabel'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export const CreateSpendingScreen = ({ route, navigation }) => {

    const [sum, setSum] = useState('')
    const [label, setLabel] = useState('');


    const [step, setStep] = useState(1);

    const nextStepHandler = () => {
        setStep(step + 1)
    }
    const saveHandler = () => {
        alert('Сделать фото чека?')
        setSum('')
        setStep(1)

    }
    return (
        <KeyboardAwareScrollView
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={styles.container}
        >
            <View>
            <View style={{ flexDirection: 'row' }}>
                <Button
                    title="Назад к объекту"
                    onPress={() => navigation.goBack()}
                />
                <Button
                    title="Все объекты"
                    onPress={() => navigation.navigate('MainScreen')}
                />
            </View>
                <Text>Экран добавления расхода </Text>
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
                <View style={[styles.tableWrap]}>
                        <FlatList data={listExpenses}
                            contentContainerStyle={{ justifyContent: 'center' }}
                            keyExtractor={order => order.id.toString()}
                            renderItem={({ item }) =>

                                <View style={{ flexDirection: 'row',  position: 'relative' }}>
                                    <View
                                        style={{ backgroundColor: COLORS.BLUE, borderRadius: 50, width: 40, height: 40, marginRight:15}} >

                                    </View>
                                    <View style = {{ marginBottom:5 }}>
                                        <Text style = {{ color: COLORS.BLACK, ...FONTS.body1, marginRight:120 }}> {item.name}</Text>
                                        <Text style = {{ color: COLORS.BLACK, ...FONTS.body2, marginBottom: 5 }}>Магазин Оби</Text>
                                        <Text style = {{ color: COLORS.BLUE, ...FONTS.smallTitle }}>-{item.sum} ₽</Text>
                                        <Text style = {{ color: COLORS.GREY, ...FONTS.body2,  }}>Кто добавил</Text>
                                    </View>
                                    <View style={{ position: 'absolute', right: 0 }}>
                                        <Text>{item.date}</Text>
                                    </View>
                                </View>
                            }
                        />
                </View>

                {/* Запись затрат */}



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
                            title='Продолжить' // Сохранить и предлагаем сделать фото чека 
                            color={COLORS.BLUE}
                            onPress={nextStepHandler}
                            disabled={!sum}
                        />
                    </View>
                }

                {/* 2ой шаг - выбор продавца обязательное */}
                {step === 2 &&
                    <View style={styles.inputContainer}>
                        <Text style={{ color: COLORS.GREY, textAlign: 'center', ...FONTS.body1, marginBottom: 10 }}>продавец</Text>

                        <View style={{ alignItems: 'center' }}>
                            <AppLabel
                                label={label}
                                setLabel={setLabel}
                                values={sellersList} />
                            <Button
                                title='Продолжить' // Сохранить и предлагаем сделать фото чека 
                                color={COLORS.BLUE}
                                onPress={nextStepHandler}
                                disabled={!sum}
                            />
                        </View>
                    </View>
                }
                {/* 3й шаг - Комментарий необязательно*/}
                {step === 3 &&
                    <View style={styles.inputContainer}>
                        <AppTextInput
                            placeholder="Комментарий "
                            //  value={sum}
                            //  inputChange={setSum}
                            //  keyboardType="numeric"
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
        </KeyboardAwareScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
        backgroundColor: COLORS.WHITE,
        paddingHorizontal: 20,
    },


    tableWrap: {
        height: 250,
        marginTop: 20,
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
