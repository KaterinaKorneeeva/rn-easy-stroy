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
import { DATA } from '../data'
import { THEME } from '../theme'
import TestBottomTab from '../navigation/TestBottomTab'
export const OrderScreen = ({route, navigation}) => {
   
    const { orderId } = route.params;
    const order = DATA.find(o=> o.id === orderId)

    const removeHandler = () => {
        Alert.alert(
          'Удаление поста',
          'Вы точно хотите удалить пост?',
          [
            {
              text: 'Отменить',
              style: 'cancel'
            },
            { text: 'Удалить', style: 'destructive', onPress: () => {} }
          ],
          { cancelable: false }
        )
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