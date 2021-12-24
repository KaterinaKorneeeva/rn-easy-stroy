import React from 'react'
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity} from 'react-native'

export const Order = ({ order, onOpen }) => {
  return (
    <TouchableOpacity activeOpacity = {0.7} onPress = {() => onOpen(order)}>
      <View style={styles.order}>
        <ImageBackground style={styles.image} source={{ uri: order.img }}>
          <View style={styles.textWrap}>
            <Text style={styles.title}>
              {new Date(order.date).toLocaleDateString()}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  post: {
    marginBottom: 15,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 200
  },
  textWrap: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 5,
    alignItems: 'center',
    width: '100%'
  },
  title: {
    color: '#fff',
    fontFamily: 'open-regular'
  }
})
