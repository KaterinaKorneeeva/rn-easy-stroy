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

export const HistoryScreen = ({ route, navigation }) => {

    
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadOperations())
    }, [dispatch])


    const listExpensesFull = useSelector(state => state.order.allOperations)
    
    return (
        
            <View style={styles.container}>
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

                {/* таблица со списком операций */}
                <Table data={listExpensesFull}  route={route} />
            </View>
       
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
