import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { Card } from './Card'
import { COLORS } from '../theme'

export const SellersList = ({ data, onOpen }) => {
  const numColumns = 2

  const formData = (data, numColumns) => {
    const totalRows = Math.floor(data.length / numColumns)
    let totalLastRow = data.length - (totalRows * numColumns)

    while (totalLastRow !== 0 && totalLastRow !== numColumns) {
      data.push({ key: 'blank', empty: true, id: 'blank' })
      totalLastRow++
    }
    return data
  }

  return (
    <View style={styles.wrapper}>
      <FlatList
        numColumns={numColumns}
        data={formData(data, numColumns)}
        contentContainerStyle={{ justifyContent: 'center' }}
        keyExtractor={order => order.id.toString()}
        renderItem={({ item }) => <Card type="seller" item={item} onOpen={onOpen} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 7,
    flex: 1,
    backgroundColor: COLORS.WHITE
  },
})
