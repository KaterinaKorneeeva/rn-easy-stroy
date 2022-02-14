import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import { COLORS, FONTS } from '../theme'
import { statusNameById } from '../orders'
import { statusesList } from '../data'

export const Card = ({ order, type, onOpen }) => {

    const status = order.empty ? '0' : statusNameById(statusesList, order.status)

    if (order.empty) {
        return <View style={[styles.item, styles.itemInvisible]}></View>
    }

    return (
        <TouchableOpacity style={[styles.itemWrap]} activeOpacity={0.7} onPress={() => onOpen(order)}>

            <View style={[styles.item, styles.shadowProp]}>
                {type === "seller" &&
                    <>
                        <View>
                            <View style={{  borderRadius: 50, width: 40, height: 40, }}>
                                <Image source={{ uri: order.logo }} style={styles.image} /> 
                            </View>
                            <Text style={{ color: COLORS.BLACK, ...FONTS.body1 }}>{order.name}</Text>
                        </View>

                        <Text style={{ color: COLORS.GREY, ...FONTS.body2 }}>{order.responsible}</Text>
                        <Text style={{ position: 'absolute', bottom: 15, left: 15, color: COLORS.BLACK, ...FONTS.body2 }}>
                            {order.numberOrders}
                        </Text>
                        <Text style={{ position: 'absolute', bottom: 35, left: 15, color: COLORS.BLACK, ...FONTS.body2 }}>
                            1000р
                        </Text>
                    </>
                }
                {type === "order" &&
                    <>
                        <Text style={{ color: COLORS.BLACK, ...FONTS.body1 }}>{order.name}</Text>
                        <Text style={{ color: COLORS.GREY, ...FONTS.body2 }}>{order.responsible}</Text>
                        <Text style={{ position: 'absolute', bottom: 15, left: 15, color: COLORS.BLACK, ...FONTS.body2 }}>
                            {status.name}
                        </Text>
                    </>
                }
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "white",
        borderRadius: 10,
        height: 215,
        shadowColor: "#000",
        padding: 15,
        flex: 1,
    },

    itemInvisible: {
        backgroundColor: 'transparent',
        borderWidth: 0,
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 10,
    },
    itemWrap: {
        padding: 15,
        position: 'relative',
        flex: 1
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
