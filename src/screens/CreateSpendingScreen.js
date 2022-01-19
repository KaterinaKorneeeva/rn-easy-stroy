import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import { COLORS, FONTS } from '../theme'
import { DataTable } from 'react-native-paper';
import { listExpenses, sellersList } from '../../src/data'
import { AppTextInput } from '../components/ui/AppTextInput'
import { AppLabel } from '../components/ui/AppLabel'

export const CreateSpendingScreen = ({ }) => {

    const [sum, setSum] = useState('')
    const [label, setLabel] = useState('');

    return (
        <View style={styles.center}>
            <Text>  Экран добавления расхода </Text>
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

            {/* Запись расхода */}

            {/* ввод суммы */}
            <View style={styles.inputContainer}>
                {/* {sum !== '' && <Text style={styles.label}>Название объекта</Text>} */}
                <AppTextInput
                    placeholder="введите сумму"
                    value={sum}
                    inputChange={setSum}
                    keyboardType="numeric"
                />
            </View>

             {/* выбор продавца */}
             {sum !== '' && 
             
            // 
             
             <AppLabel
             label={label}
             setLabel={setLabel}
             values={sellersList} />
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
        borderWidth: 1,
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
