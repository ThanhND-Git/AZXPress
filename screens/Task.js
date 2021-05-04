import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import MadeScreen from './taskstack/Made';
import WaitReceiptScreen from './taskstack/WaitReceipt'
import { createStackNavigator } from '@react-navigation/stack';
import OrderDetailScreen from './taskstack/OrderCodeDetail';

const Detail1Stack = createStackNavigator();
const WaitReceiptScreenStack = () => {
  return (
    <Detail1Stack.Navigator>
      <Detail1Stack.Screen name="Wait" component={WaitReceiptScreen} options={{ headerShown: false }} />
      <Detail1Stack.Screen name="Detail" component={OrderDetailScreen} options={{ headerShown: false }} />
    </Detail1Stack.Navigator>
  );
};

const Detail2Stack = createStackNavigator();
const MadeScreenStack = () => {
  return (
    <Detail2Stack.Navigator>
      <Detail2Stack.Screen name="Made" component={MadeScreen} options={{ headerShown: false }} />
      <Detail2Stack.Screen name="Detail" component={OrderDetailScreen} options={{ headerShown: false }} />
    </Detail2Stack.Navigator>
  );
};
const Tab = createMaterialTopTabNavigator();

const TaskScreen = () => {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        height: 50,
        backgroundColor: 'orange',
        top: 18,
        alignContent: 'center'
      }
    }}
    >
      <Tab.Screen name="Wait for receipt" component={WaitReceiptScreenStack}
        options={{
          tabBarLabel: 'Đang chờ nhận',

        }}
      />
      <Tab.Screen name="Made" component={MadeScreenStack}
        options={{
          tabBarLabel: 'Đã thực hiện'
        }}
      />
    </Tab.Navigator>
  );
};

export default TaskScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});