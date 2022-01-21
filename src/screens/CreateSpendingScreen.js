import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity, Button } from 'react-native'
import { COLORS, FONTS } from '../theme'
import { DataTable } from 'react-native-paper';
import { listExpenses, sellersList } from '../../src/data'
import { AppTextInput } from '../components/ui/AppTextInput'
import { AppLabel } from '../components/ui/AppLabel'

export const CreateSpendingScreen = ({ }) => {

    const [sum, setSum] = useState('')
    const [label, setLabel] = useState('');


    const [step, setStep] = useState(1);
    const [iShowSellers, setIShowSellers] = useState(false)
    const [iShowDescription, setShowDescription] = useState(false);





    const nextStepHandler = () => {
        setStep(step + 1)
        // setIShowSellers(current => !current)
        // console.log('iShowSellers', iShowSellers)

        // const order = {
        //     date: new Date().toJSON(),
        //     name: name,
        //     address: address,
        //     сustomer: сustomer,
        //     phone: phone,
        //     floorArea: floorArea,
        //     price: price,
        //     dateStart: dateStart,
        //     dateFinish: dateFinish,
        //     description: description,
        //     pay: pay,
        //     responsible: 'Константин',

        //     img: imgRef.current,
        // }

        // dispatch(addOrder(order))
        // navigation.navigate('Объекты')
    }


    const saveHandler = () => {
        alert('Сделать фото чека?')
        setSum('')
        setStep(1)
        
    }
    return (
        <View style={styles.center}>
            <Text>Экран добавления расхода </Text>
            <View style={[styles.boxInfo]}>
                <View style={[styles.item, styles.shadowProp]}>
                    <Text style={{ color: COLORS.BLACK, ...FONTS.body2 }}>расход</Text>
                    <Text style={{ color: COLORS.BLACK, ...FONTS.smallTitle }}>135 000 ₽</Text>
                </View>
                <View style={[styles.item, styles.shadowProp]}>
                    <Text style={{ color: COLORS.BLACK, ...FONTS.body2 }}>баланс</Text>
                    <Text style={{ color: COLORS.BLACK, ...FONTS.smallTitle }}>500 000 000 ₽</Text>

                </View>
            </View>

            {/* таблица со списком расходов */}
            <View style={[styles.tableWrap]}>
                <ScrollView>
                    <DataTable>
                        <FlatList
                            data={listExpenses}
                            contentContainerStyle={{ justifyContent: 'center' }}
                            keyExtractor={order => order.id.toString()}
                            renderItem={({ item }) =>
                                <DataTable.Row>
                                    <DataTable.Cell>{item.sum}</DataTable.Cell>
                                    <DataTable.Cell>{item.name}</DataTable.Cell>
                                    <DataTable.Cell numeric>{item.date}</DataTable.Cell>
                                </DataTable.Row>
                            }
                        />
                    </DataTable>
                </ScrollView>
            </View>

            {/* Запись затрат */}


            {/* {step === 2  && */}

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
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
        backgroundColor: COLORS.WHITE,
    },
    tableWrap: {
        height: 200,
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
