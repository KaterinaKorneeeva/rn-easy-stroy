import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  ScrollView,
  Alert,
  SafeAreaView,
} from 'react-native'

import { useDispatch, useSelector } from 'react-redux'
import { FONTS, COLORS } from '../theme'
import TestBottomTab from '../navigation/TestBottomTab'
import { removeOrders } from '../store/actions/order'


export const OrderScreen = ({ route, navigation }) => {
  const dispatch = useDispatch()
  const { orderId } = route.params;
  const order = useSelector(state =>
    state.order.allOrders.find(o => o.id === orderId)
  )

  const removeHandler = () => {
    Alert.alert(
      'Удаление поста',
      'Вы точно хотите удалить пост?',
      [
        {
          text: 'Отменить',
          style: 'cancel'
        },
        {
          text: 'Удалить', style: 'destructive',
          onPress: () => {
            navigation.navigate('Объекты')
            dispatch(removeOrders(orderId))
          }
        }
      ],
      { cancelable: false }
    )
  }


  function renderTopInfoOrder() {
    return (
      <View style={{
        alignItems: "center",
        marginTop: 40,
        marginBottom: 80,
        backgroundColor: COLORS.LIGHT_GREY,
      }}>
        <Text style={{ color: COLORS.BLACK, ...FONTS.title }}>{order.name}</Text>
        <Text style={{ color: COLORS.GREY, ...FONTS.body1 }}>{order.address}</Text>
        <Text style={{ color: COLORS.BLACK, ...FONTS.largeTitle }}>{order.balance}</Text>
        <Text style={{ color: COLORS.GREY, ...FONTS.body1 }}>Потрачено - {order.balance}</Text>
        <Text style={{ color: COLORS.GREEN, ...FONTS.body1 }}>{order.status}</Text>
      </View>

    )
  }
  function renderBottomInfoOrder() {
    return (
      <View style={{
        alignItems: "left",
        marginTop: 40,
        marginBottom: 80,
        backgroundColor: COLORS.WHITE,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingHorizontal: 20,
        paddingTop: 10,
      }}>

        <View style={styles.container}>
          <Text style={styles.label}>Об объекте</Text>
          <View style={{ flexDirection: 'row', flexWrap: "wrap" }}>
            <Text style={[styles.text, styles.box]}>{order.сustomer}</Text>
            <Text style={[styles.text, styles.box]}>{order.number}</Text>
            <Text style={[styles.text, styles.box]}>Выход 20.09.2012</Text>
            <Text style={[styles.text, styles.box]}>Сдача 20.09.2022</Text>
          </View>
        </View>

        <View style={styles.container}>
          <Text style={styles.label}>Ответственный</Text>
          <Text style={styles.text}>{order.responsible}</Text>
        </View>

        <View style={styles.container}>
          <Text style={styles.label}>Описание</Text>
          <Text style={styles.text}>{order.description}</Text>
        </View>

        {/* <View style={styles.container}> */}
          <Text style={styles.label}>Вид оплаты</Text>
          <Text style={styles.text}>{order.pay}</Text>
        {/* </View> */}
      </View>
    )
  }

  if (!order) {
    return null
  }
  return (
    <View style={styles.wrapper}>
      <ScrollView>
        {renderTopInfoOrder()}
        {renderBottomInfoOrder()}
        {/* <Image source={{ uri: order.img }} style={styles.image} /> */}
        {/* <Button
          title='Удалить'
          color={COLORS.BLUE}
          onPress={removeHandler}
        /> */}
      </ScrollView>
      {/* нижнее меню */}
      <TestBottomTab />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    borderWidth: 4,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: 200
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
  }

})