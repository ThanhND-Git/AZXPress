import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

import TaskScreen from './Task';
import ScanScreen from './Scan';
import AccountScreen from './Account'

const Tab = createBottomTabNavigator(); 
const HomeTab = () => {
    return (
      <Tab.Navigator tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom:10,
          backgroundColor: 'orange',
          height: 60,
          left: 30,
          right: 30,
          borderRadius: 15,
          elevation: 0
        }
        
      }}
      >
        <Tab.Screen name="Task" component={TaskScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
                <Image
                  source={require('../assets/portfolio.png')}
                  resizeMode= "contain"
                  style={{width:20, height:20, tintColor: focused ? '#000' : '#999999'}}
                />
                <Text style={{ color: focused ? '#000000' : '#999999', fontSize: 12 }}>
                  Công Việc
                </Text>
              </View>
            )
          }}
        />
        <Tab.Screen name="Scan" component={ScanScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
              <Image
                  source={require('../assets/qr-code.png')}
                  resizeMode= "contain"
                  style={{width:20, height:20, tintColor: focused ? '#000' : '#adadad'}}
                />
              <Text style={{ color: focused ? '#000000' : '#adadad', fontSize: 12 }}>Scan</Text>
            </View>
          )
        }}
        />
        <Tab.Screen name="User" component={AccountScreen} options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 5 }}>
              <Image
                  source={require('../assets/user.png')}
                  resizeMode= "contain"
                  style={{width:20, height:20, tintColor: focused ? '#000' : '#adadad'}}
                />
              <Text style={{ color: focused ? '#000000' : '#adadad', fontSize: 12 }}>Tài Khoản</Text>
            </View>
          )
        }} />
      </Tab.Navigator>
    );
  };
export default HomeTab;