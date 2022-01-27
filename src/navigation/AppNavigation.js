import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { Platform, Button } from 'react-native'
import { MainScreen } from '../screens/MainScreen';
import { CreateOrderScreen } from '../screens/CreateOrderScreen';
import { CreateSellerScreen } from '../screens/CreateSellerScreen';
import { EditOrderScreen } from '../screens/EditOrderScreen';
import { OrderScreen } from '../screens/OrderScreen';
import { SellersListScreen } from '../screens/SellersListScreen';
import { CreateSpendingScreen } from '../screens/CreateSpendingScreen';
import { CreateDepositScreen } from '../screens/CreateDepositScreen';
import { HistoryScreen } from '../screens/HistoryScreen';
import { COLORS } from '../theme';

import { BuildingIcon } from '../../assets/icons/iconsBottomBar/BuildingIcon';
import { CompanionsIcon } from '../../assets/icons/iconsBottomBar/CompanionsIcon';
import { ArrowUpIcon } from '../../assets/icons/iconsBottomBar/ArrowUpIcon';
import { ArrowDownIcon } from '../../assets/icons/iconsBottomBar/ArrowDownIcon';
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { PlusIcon } from '../../assets/icons/PlusIcon';
import TabBar from '../components/TabBar'

import TestBottomTab from '../navigation/TestBottomTab'


// функция замена тайтла при переключении табов
const INITIAL_ROUTE_NAME = 'Объекты';

function getHeaderTitle(route) {
    const routeName = getFocusedRouteNameFromRoute(route) ?? INITIAL_ROUTE_NAME;

    switch (routeName) {
        case 'Объекты':
            return 'Объекты';
        case 'Список':
            return 'Справочники';
    }
}

// функция замена иконки при переключении табов
function getHeaderIcon({ navigation, route }) {
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
        case 'Список':
            return (
                <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                    <Item
                        title='Add Object'
                        iconName='add-circle-outline'
                        onPress={() => navigation.navigate('CreateSellerScreen')}
                    />
                </HeaderButtons>
            )
    }
}


// Нижняя навигация по умолчанию
const Tab = createBottomTabNavigator();
function MainTabs() {
    return (
        <Tab.Navigator 
        tabBar={props => <TabBar {...props} />}>
            <Tab.Screen
                name="Объекты"
                component={MainScreen}
            

            />
            <Tab.Screen
                name="Список"
                component={SellersListScreen}
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
                        return <ArrowUpIcon color={'blue'} />
                    }
                }}
            />
            <Tab.Screen
                name="Приход"
                component={CreateDepositScreen}
                options={{
                    tabBarLabel: 'Приход',
                    tabBarIcon: () => {
                        return <ArrowDownIcon color={'blue'} />
                    }
                }}
            />
            <Tab.Screen
             mode='modal'
                name="История"
                component={HistoryScreen}
                options={{
                    tabBarLabel: 'История',
                    tabBarIcon: () => {
                        return <CompanionsIcon color={'blue'} />
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
                        backgroundColor: Platform.OS === 'android' ? COLORS.BLUE : COLORS.WHITE
                    },
                    headerTintColor: Platform.OS === 'android' ? COLORS.WHITE : COLORS.BLUE,
                    headerShown: true, // можно менять false
                    gestureEnabled: false,
                }}
            >
                <Stack.Screen
                    name="MainScreen"
                    component={MainTabs}
                    // component={CreateSpendingScreen}
                    options={({ route, navigation }) => ({
                        headerTitle: getHeaderTitle(route),
                        headerRight: () =>
                            getHeaderIcon({ navigation, route }),
                    })}
                />
                <Stack.Screen
                    name="SellersListScreen"
                    component={MainTabs}
                    options={({ navigation }) => ({
                        headerRight: () =>
                            getHeaderIcon({ navigation, route }),

                    })}
                />
                {/* экран объекта */}
                <Stack.Screen
                    name="OrderScreen"
                    component={OrderScreen}
                    // component={TestBottomTab}
                    options={({ route, navigation }) =>
                        ({

                            title: route.params.postName,
                            headerStyle: {
                                backgroundColor: COLORS.LIGHT_GREY,
                            },
                            headerTintColor: Platform.OS === 'android' ? COLORS.BLUE : COLORS.BLUE,
                            headerTitleStyle: {
                                // fontWeight: 'bold',
                            },
                            headerRight: () =>
                                <Button
                                    onPress={() => navigation.navigate('EditOrderScreen', { orderId: route.params.orderId })}
                                    title="edit"
                                />
                        })}
                />
                <Stack.Screen name="EditOrderScreen" component={EditOrderScreen} />
                <Stack.Screen name="CreateOrderScreen" component={CreateOrderScreen} />


                <Stack.Screen name="CreateSellerScreen" component={CreateSellerScreen} />
                
                {/* нужно ли здесь прописывать все экраны которые есть в приложении??? */}
                <Stack.Screen name="CreateSpendingScreen" component={CreateSpendingScreen} />
                <Stack.Screen name="CreateDepositScreen" component={CreateDepositScreen} />
                <Stack.Screen name="HistoryScreen" component={HistoryScreen} />

                
            </Stack.Navigator>
        </NavigationContainer>
    );
}
