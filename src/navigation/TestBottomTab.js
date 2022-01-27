import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from "react";
import { CreateSpendingScreen } from '../screens/CreateSpendingScreen';
import { CreateDepositScreen } from '../screens/CreateDepositScreen';
import { HistoryScreen } from '../screens/HistoryScreen';
import { ArrowUpIcon } from '../../assets/icons/iconsBottomBar/ArrowUpIcon';
import { ArrowDownIcon } from '../../assets/icons/iconsBottomBar/ArrowDownIcon';
import { HistoryIcon } from '../../assets/icons/iconsBottomBar/HistoryIcon';
const Tab = createBottomTabNavigator();


const TestBottomTab = () => (
 <Tab.Navigator
        // screenOptions={({ route }) => ({
          // alert(1);
        // })}
    
        // screenOptions={{ presentation: 'transparentModal' }}
        > 
        
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
                return <HistoryIcon  color={'blue'} />
            }
          }}
        />
  </Tab.Navigator>
);

export default TestBottomTab;