import React, { useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { Order } from '../components/Order'
import { COLORS } from '../theme'
import { statusesList } from '../../src/data'
import { AppLabel } from '../components/ui/AppLabel'

export const OrderList = ({ data, onOpen }) => {
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

  // установка статуса
  const [label, setLabel] = useState('');

  return (
    <View style={styles.wrapper}>

      <AppLabel
        label={label}
        setLabel={setLabel}
        values={statusesList} />

      <FlatList
        numColumns={numColumns}
        data={formData(data, numColumns)}
        contentContainerStyle={{ justifyContent: 'center' }}
        keyExtractor={order => order.id.toString()}
        renderItem={({ item }) => <Order order={item} onOpen={onOpen} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    padding: 7,
    flex: 1,
    backgroundColor: 'white'
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: COLORS.LIGHT_GREY,
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
})
