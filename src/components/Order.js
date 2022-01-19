import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native'
import { COLORS, FONTS } from '../theme'
import { statusNameById } from '../../src/orders'
import { statusesList } from '../../src/data'

export const Order = ({ order, onOpen }) => {

  // const WIDTH = Dimensions.get('window').width / 2


  const status = order.empty ?  '0' : statusNameById(statusesList, order.status)

  if (order.empty) {
    return <View style={[styles.item, styles.itemInvisible]}></View>
  }
  return (

    <TouchableOpacity style={[styles.itemWrap]} activeOpacity={0.7} onPress={() => onOpen(order)}>
      {/* {new Date(order.date).toLocaleDateString()}  */}
      <View style={[styles.item, styles.shadowProp]}>
        <Text style={{ color: COLORS.BLACK, ...FONTS.body1 }}>{order.name}</Text>
        <Text style={{ color: COLORS.GREY, ...FONTS.body2 }}>{order.responsible}</Text>
        <Text style={{ position: 'absolute', bottom: 15, left: 15, color: COLORS.BLACK, ...FONTS.body2 }}>
          {status.name}
        </Text>
      </View>
      {/* </ImageBackground> */}
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
    width: '100%',
    height: 200
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
