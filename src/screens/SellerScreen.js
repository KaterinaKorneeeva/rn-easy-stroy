import React from 'react'
import { View, Text, StyleSheet, Image, Button, ScrollView, Alert, SafeAreaView, TouchableOpacity, Dimensions } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { FONTS, COLORS } from '../theme'

import { removeOrders } from '../store/actions/order'
import { numberWithSpaces } from '../utils'


export const SellerScreen = ({ route, navigation }) => {
  const dispatch = useDispatch()

  const { sellerId } = route.params;

  const order = useSelector(state =>
    state.order.allSellers.find(o => o.id === sellerId)
  )

  const balanceSum = numberWithSpaces(order.balance) + ' ₽';

  function renderTopInfoOrder() {
    return (
      <View style={{
        alignItems: "center",
        justifyContent: "center",
        textAlign: 'center',
        marginTop: 50,
        backgroundColor: COLORS.LIGHT_GREY,
        paddingHorizontal: 40,
        position: 'relative'
      }}>
        <View style={{width: 100, height: 100, borderRadius: '50%'}}>
          <Image source={{ uri: order.logo }} style={styles.image} />
        </View>

        <Text style={{ color: COLORS.BLACK, ...FONTS.title, }}>{order.name}</Text>
        <Text style={{ color: COLORS.GREY, textAlign: 'center', ...FONTS.body1 }}>{order.address}</Text>
        <Text style={{ color: COLORS.BLACK, ...FONTS.body1 }}>Покупок на сумму - {balanceSum}</Text>
        <Text style={{ color: COLORS.BLACK, ...FONTS.body1 }}>Всего покупок - {order.numberOrders}</Text>
      </View >

    )
  }
  function renderBottomInfoOrder() {
    return (
      <View style={{
        alignItems: "left",
        marginTop: 40,
        paddingBottom: 180,
        backgroundColor: COLORS.WHITE,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingHorizontal: 20,
        paddingTop: 40,
        flex: 1,
      }}>
        <View style={styles.container}>
          <Text style={styles.label}>О продавце</Text>
          <View style={{ flexDirection: 'row', flexWrap: "wrap" }}>
            
            <Text style={[styles.text, styles.box]}>{order.phone}</Text>
          </View>
        </View>
        <View style={styles.container}>
          <Text style={styles.label}>Описание</Text>
          <Text style={styles.text}>{order.description}</Text>
        </View>
      </View>
    )
  }

  if (!order) {
    return null
  }
  return (
    <View style={styles.wrapper}>
      <ScrollView>
        {/* главная информация о магазине */}
        {renderTopInfoOrder()}
        {/* описание объекта */}
        {renderBottomInfoOrder()}

        {/* <Button
          title='Удалить'
          color={COLORS.BLUE}
          onPress={removeHandler}
        /> */}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLORS.LIGHT_GREY,
    marginTop: 50,
  },

  image: {
    width: '100%',
    height: 100,
    borderRadius: 50
  },
  textWrap: {
    padding: 10
  },
  text: {
    color: COLORS.BLACK,
    ...FONTS.body1
  },
  box: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: COLORS.LIGHT_GREY,
    paddingHorizontal: 15,
    paddingVertical: 5,
    marginBottom: 10,
    marginRight: 10,
  },
  container: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 10,
    color: COLORS.GREY,
    ...FONTS.body2
  },

})