import React from 'react'
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity, Dimensions } from 'react-native'


export const Order = ({ order, onOpen }) => {

  const WIDTH = Dimensions.get('window').width / 2

  if (order.empty) {
    return <View style={[styles.item, styles.itemInvisible]}></View>
  }
  return (

    <TouchableOpacity style={[styles.itemWrap]} activeOpacity={0.7} onPress={() => onOpen(order)}>
      {/* {new Date(order.date).toLocaleDateString()}  */}

      <View style={[styles.item, styles.shadowProp]}>
        <View style={styles.textBlock}>
          <Text style={styles.title}>{order.name}</Text>
        </View>
        <View style={styles.textBlock}>
          <Text style={styles.title}>{order.responsible}</Text>
        </View>

        <View style={[styles.textBlock, { position: 'absolute', bottom: 15, left: 15 }]}>
          <Text style={styles.title}> {order.status}</Text>
        </View>

      </View>
      {/* </ImageBackground> */}
      {/* </View> */}
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
  title: {
    color: '#222222',
    fontFamily: 'open-regular',
  },

  shadowProp: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },


})
