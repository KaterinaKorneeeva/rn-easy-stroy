import React from 'react'
import { View, StyleSheet, Text, } from 'react-native'
import { COLORS, FONTS } from '../theme'


export const InfoBalance = () => {

    return (
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
    )
}

const styles = StyleSheet.create({
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
