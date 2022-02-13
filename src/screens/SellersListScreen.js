import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { COLORS, FONTS } from '../theme'
import { LIST_SELLERS } from '../../src/data'

export const SellersListScreen = ({ }) => {
    return (
        <View style={style.center}>
            <Text> Справочники продавцов </Text>
            <FlatList data={LIST_SELLERS}
                contentContainerStyle={{ justifyContent: 'center' }}
                keyExtractor={seller => seller.id.toString()}
                renderItem={({ item }) =>

                    <View style={{ flexDirection: 'row', position: 'relative' }}>
                        <View
                            style={{ backgroundColor: COLORS.BLUE, borderRadius: 50, width: 40, height: 40, marginRight: 15 }} >

                        </View>
                        <View style={{ marginBottom: 5 }}>
                            <Text style={{ color: COLORS.BLACK, ...FONTS.body1, marginRight: 120 }}> {item.name}</Text>
                            <Text style={{ color: COLORS.BLACK, ...FONTS.body2, marginBottom: 5 }}>{item.description}</Text>

                        </View>

                    </View>
                }
            />

        </View>
    )
}

const style = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
