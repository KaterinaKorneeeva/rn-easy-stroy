import React from 'react'
import { View, StyleSheet, FlatList, Dimensions } from 'react-native'
import { Order } from '../components/Order'

export const OrderList = ({ data, onOpen }) => {
  const numColumns = 2
 
  const formData = (data, numColumns) => {
    const totalRows= Math.floor(data.length / numColumns)
    let totalLastRow = data.length - (totalRows * numColumns)

    while (totalLastRow !==0  && totalLastRow !==numColumns) {
      data.push({key:'blank', empty :true, id: 'blank'})
      totalLastRow++
    }
    return data
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        numColumns = {numColumns}
        data={formData(data, numColumns)}
        keyExtractor={order => order.id.toString()}
        renderItem={({ item }) => <Order order={item} onOpen={onOpen} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 7, 
    flex:1,
  }
})
