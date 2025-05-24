import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CoinScreensaver from './screens/CoinScreensaver';
import SalaryCalculator from './screens/SalaryCalculator';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CoinScreensaver">
        <Stack.Screen 
          name="CoinScreensaver" 
          component={CoinScreensaver} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="SalaryCalculator" 
          component={SalaryCalculator} 
          options={{ title: '工资计算器' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}