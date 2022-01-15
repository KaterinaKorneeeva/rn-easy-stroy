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
import { THEME, COLORS } from '../theme'
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
        <Text style={styles.title}>{order.name}</Text>
        <Text style={styles.title}>{order.address}</Text>
        <Text style={styles.title}>{order.balance}</Text>
        <Text style={styles.title}>Потрачено {order.balance}</Text>
        <Text style={styles.title}>{order.status}</Text>
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
        paddingTop: 40,
        // flex: 1,
       
      }}>
        <Text style={styles.title}>Об объекте</Text>
        <View>
          <Text style={styles.title}>{order.сustomer}</Text>
          <Text style={styles.title}>{order.number}</Text>
          <Text style={styles.title}>Выход</Text>
          <Text style={styles.title}>Сдача</Text>

        </View>
        <View>
          <Text style={styles.title}>Ответственный</Text>
          <Text style={styles.title}>{order.responsible}</Text>
        </View>
        <View>
          <Text style={styles.title}>Описание</Text>
          <Text style={styles.title}>{order.description}</Text>
        </View>
        <View>
          <Text style={styles.title}>Вид оплаты</Text>
          <Text style={styles.title}>{order.pay}</Text>
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
        {renderTopInfoOrder()}
        {renderBottomInfoOrder()}
        {/* <Image source={{ uri: order.img }} style={styles.image} /> */}
        <Button
          title='Удалить'
          color={THEME.DANGER_COLOR}
          onPress={removeHandler}
        />
      </ScrollView>
      {/* нижнее меню */}
      <TestBottomTab />
    </View>

  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    // backgroundColor: COLORS.WHITE,
    borderWidth: 4,
    flexDirection : 'column',
  },
  image: {
    width: '100%',
    height: 200
  },
  textWrap: {
    padding: 10
  },
  title: {
    fontFamily: 'open-regular',
    fontSize: 20

  }
})