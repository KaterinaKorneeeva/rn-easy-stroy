import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    ScrollView,
    Alert
  } from 'react-native'

import { useDispatch, useSelector } from 'react-redux'
import { THEME } from '../theme'
import TestBottomTab from '../navigation/TestBottomTab'
import { removeOrders } from '../store/actions/order'

export const OrderScreen = ({route, navigation}) => {
    const dispatch = useDispatch()
    const { orderId } = route.params;
    const order = useSelector(state =>
      state.order.allOrders.find(o=> o.id === orderId)
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
            { text: 'Удалить', style: 'destructive',
             onPress: () => {
              navigation.navigate('Объекты')
              dispatch(removeOrders(orderId))
             } }
          ],
          { cancelable: false }
        )
      }

    if (!order) {
      return null
    }
    return (
        <View style={styles.wrapper}>
          <ScrollView>
              <Image source={{ uri: order.img }} style={styles.image} />
              <View style={styles.textWrap}>
                  <Text style={styles.title}>{order.text}</Text>
              </View>
              <Button
                  title='Удалить'
                  color={THEME.DANGER_COLOR}
                  onPress={removeHandler}
              />
          </ScrollView>
          {/* нижнее меню */}
          <TestBottomTab/>
        </View>

    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex:1,
    },
    image: {
      width: '100%',
      height: 200
    },
    textWrap: {
      padding: 10
    },
    title: {
      fontFamily: 'open-regular'
    }
  })