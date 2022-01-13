import React from 'react'
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity, Dimensions} from 'react-native'

export const Order = ({ order, onOpen }) => {

  const WIDTH = Dimensions.get('window').width/2

  if (order.empty) {
    return <View style={[styles.item ,styles.itemInvisible]}></View>
  }
  return (
    <TouchableOpacity style={styles.item} activeOpacity = {0.7} onPress = {() => onOpen(order)}>
      <View style={styles.itemWrap}>

      {/* {new Date(order.date).toLocaleDateString()}  */}
        {/* <ImageBackground style={styles.image} source={{ uri: order.img }}> */}
        
          <View style={styles.textBlock}>
            <Text style={styles.title}>{order.name}</Text>
          </View>
          <View style={styles.textBlock}>
            <Text style={styles.title}>{order.responsible}</Text>
          </View>

          <View style={[styles.textBlock, {position: 'absolute', bottom: 15 , left: 15}]}> 
            <Text style={styles.title}> {order.status}</Text>
          </View>
        {/* </ImageBackground> */}
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    marginBottom: 15,
    overflow: 'hidden',
    flex: 1,
   
    height: 215,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
    margin: 7,
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
    fontFamily: 'open-regular'
  },
  textBlock: {

  }

})
