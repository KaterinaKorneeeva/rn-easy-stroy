import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { Order } from '../components/Order'

export const OrderList = ({ data, onOpen }) => {
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={data}
        keyExtractor={post => post.id.toString()}
        renderItem={({ item }) => <Order order={item} onOpen={onOpen} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 10
  }
})
