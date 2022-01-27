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
  TouchableOpacity
} from 'react-native'

import { useDispatch, useSelector } from 'react-redux'
import { FONTS, COLORS } from '../theme'
import TestBottomTab from '../navigation/TestBottomTab'
import { removeOrders } from '../store/actions/order'
import { numberWithSpaces } from '../../src/utils'
import { statusesList } from '../../src/data'
import { statusNameById } from '../../src/orders'

export const OrderScreen = ({ route, navigation }) => {
  const dispatch = useDispatch()
  const { orderId } = route.params;
  const order = useSelector(state =>
    state.order.allOrders.find(o => o.id === orderId)
  )
  const status = order.empty ? '0' : statusNameById(statusesList, order.status)


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
            navigation.navigate('MainScreen')
            dispatch(removeOrders(orderId))
          }
        }
      ],
      { cancelable: false }
    )
  }


  const sum = numberWithSpaces(order.balance) + ' ₽';
  const spendingSum = numberWithSpaces(order.balance) + ' ₽';
  const responsible = order.responsible !== '' ? order.responsible : 'Не назначен'

  function renderTopInfoOrder() {
    return (
      <View style={{
        alignItems: "center",
        justifyContent: "center",
        textAlign: 'center',
        marginTop: 50,
        marginBottom: 80,
        backgroundColor: COLORS.LIGHT_GREY,
        paddingHorizontal: 40,
      }}>

        <View style={{ flexDirection: 'row' }}>
          <Button
            title="расход"
            onPress={() => navigation.navigate('CreateSpendingScreen')}
          />
          <Button
            title="Приход"
            onPress={() => navigation.navigate('CreateDepositScreen')}
          />
          <Button
            title="История"
            onPress={() => navigation.navigate('HistoryScreen')}
          />
        </View>


        <Text style={{ color: COLORS.BLACK, ...FONTS.title, }}>{order.name} {order.floorArea}
          {order.floorArea !== '' &&
            // <Text>м<Text style={{ textVerticalAlign: 'top', fontSize: 12 }}>2</Text></Text>
            <Text>м<Text style={{ fontSize: 12 }}>2</Text></Text>
          }
        </Text>
        <Text style={{ color: COLORS.GREY, textAlign: 'center', ...FONTS.body1 }}>{order.address}</Text>
        <Text style={{ color: COLORS.BLACK, ...FONTS.largeTitle }}>{sum}</Text>
        <Text style={{ color: COLORS.GREY, ...FONTS.body1 }}>Потрачено - {spendingSum}</Text>
        <Text style={{ color: COLORS.GREEN, ...FONTS.body1 }}> {status.name}</Text>
        <Text style={{ color: COLORS.BLACK, ...FONTS.body1 }}> Ответственный - {responsible}</Text>
        <Text style={{ color: COLORS.BLACK, ...FONTS.body1 }}> Вид оплаты - {order.pay}  </Text>
      </View >

    )
  }
  function renderBottomInfoOrder() {
    return (
      <View style={{
        alignItems: "left",
        marginTop: 40,
        backgroundColor: COLORS.WHITE,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingHorizontal: 20,
        paddingTop: 40,
        flex: 1,
      }}>
        <View style={styles.container}>
          <Text style={styles.label}>Об объекте</Text>
          <View style={{ flexDirection: 'row', flexWrap: "wrap" }}>
            <Text style={[styles.text, styles.box]}>{order.сustomer}</Text>
            <Text style={[styles.text, styles.box]}>{order.phone}</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Text style={[styles.text, styles.box]}>Выход {order.dateStart}</Text>
            <Text style={[styles.text, styles.box]}>Сдача {order.dateFinish}</Text>
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
    <ScrollView style={styles.wrapper}>

      {/* главная информация об объекте */}
      {renderTopInfoOrder()}
      {/* описание объекта */}
      {renderBottomInfoOrder()}

      {/* <Image source={{ uri: order.img }} style={styles.image} /> */}
      {/* <Button
          title='Удалить'
          color={COLORS.BLUE}
          onPress={removeHandler}
        /> */}

      {/* нижнее меню */}
      {/* <TestBottomTab /> */}

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLORS.LIGHT_GREY,

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