import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, getFocusedRouteNameFromRoute} from '@react-navigation/native';
import { Platform, Button } from 'react-native'
import { MainScreen } from '../screens/MainScreen';
import { CreateOrderScreen } from '../screens/CreateOrderScreen';
import { EditOrderScreen } from '../screens/EditOrderScreen';
import { OrderScreen } from '../screens/OrderScreen';
import { SellersListScreen } from '../screens/SellersListScreen';
import { CreateSpendingScreen } from '../screens/CreateSpendingScreen';
import { CreateDepositScreen } from '../screens/CreateDepositScreen';
import { HistoryScreen } from '../screens/HistoryScreen';
import {THEME} from '../theme';

import { BuildingIcon } from '../../assets/icons/iconsBottomBar/BuildingIcon';
import { CompanionsIcon } from '../../assets/icons/iconsBottomBar/CompanionsIcon';
import { ArrowUpIcon } from '../../assets/icons/iconsBottomBar/ArrowUpIcon';
import { ArrowDownIcon } from '../../assets/icons/iconsBottomBar/ArrowDownIcon';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { PlusIcon } from '../../assets/icons/PlusIcon';


 // функция замена тайтла при переключении табов
 const INITIAL_ROUTE_NAME = 'Объекты';

 function getHeaderTitle(route) {
   const routeName = getFocusedRouteNameFromRoute(route) ?? INITIAL_ROUTE_NAME;

   switch (routeName) {
     case 'Объекты':
       return 'Объекты';
     case 'Справочники':
       return 'Справочники';
   }
 }

  // функция замена иконки при переключении табов
 function getHeaderIcon(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? INITIAL_ROUTE_NAME;
    switch (routeName) {
      case 'Объекты':
        return (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item
                title='Add Object'
                iconName='add-circle'
                onPress={() => navigation.navigate('CreateOrderScreen')}
                />  
            </HeaderButtons>
        )
      case 'Справочники':
        return (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item
                title='Add Object'
                iconName='add-circle-outline'
                onPress={() => navigation.navigate('CreateOrderScreen')}
                />  
            </HeaderButtons>
        )        
    }
  }
  
 
const Tab = createBottomTabNavigator();
  function MainTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen 
            name="Объекты" 
            component={MainScreen}
            options={{
                tabBarLabel: 'Объекты',
                tabBarIcon: () => {
                    return <BuildingIcon color={'blue'}  />
                }
            }}
        />
        <Tab.Screen 
            name="Справочники" 
            component={SellersListScreen}
            options={{
                tabBarLabel: 'Справочники',
                tabBarIcon: () => {
                    return <CompanionsIcon  color={'blue'} />
                }
            }}
         />
      </Tab.Navigator>
    );
  }

  // вкладки для объектов сейчас не подключены
  function OrderTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Расход"
                component={CreateSpendingScreen}
                options={{
                tabBarLabel: 'Расход',
                tabBarIcon: () => {
                    return <ArrowUpIcon color={'blue'}  />
                    }
                }}
            />
            <Tab.Screen
                name="Приход"
                component={CreateDepositScreen}
                options={{
                    tabBarLabel: 'Приход',
                    tabBarIcon: () => {
                        return <ArrowDownIcon  color={'blue'} />
                    }
                }}
            />
            <Tab.Screen
                name="История"
                component={HistoryScreen}
                options={{
                    tabBarLabel: 'История',
                    tabBarIcon: () => {
                        return <CompanionsIcon  color={'blue'} />
                    }
                }}
            />
        </Tab.Navigator>
    );
  }
  

 
  

const Stack = createStackNavigator();

export default function AppNavigation() {
    return (
        <NavigationContainer>
        <Stack.Navigator
            initialRouteName="MainScreen"
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : THEME.WHITE
                },
                headerTintColor: Platform.OS === 'android' ? THEME.WHITE : THEME.MAIN_COLOR, 
                headerShown: true, // можно менять false
                gestureEnabled: false,
            }}
        >
        <Stack.Screen 
            name="Объекты" 
            component={MainTabs} 
            options={({ route, navigation }) => ({
                headerTitle: getHeaderTitle(route),    
                headerRight: () => 
                    getHeaderIcon(route),
              })}
        />
        <Stack.Screen 
            name="Справочники" 
            component={MainTabs} 
            options={({ navigation }) => ({
                headerRight: () => 
                    getHeaderIcon(route),
              })}
        />
        <Stack.Screen 
            name="OrderScreen" 
            component={OrderScreen} 
            options={({ route , navigation}) =>
                ({ 
                
                    title: route.params.postName ,
                    headerStyle: {
                    backgroundColor: '#f4511e',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
                headerRight: () => 
                    <Button 
                        onPress={() => navigation.navigate('EditOrderScreen', {orderId:route.params.orderId })}
                        title="edit" 
                    />
                })} 
        />
        <Stack.Screen name="EditOrderScreen" component={EditOrderScreen} />
        <Stack.Screen name="CreateOrderScreen" component={CreateOrderScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }