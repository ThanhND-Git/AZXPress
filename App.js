import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import LandingScreen from './screens/Splash';
import HomeTabScreen from './screens/HomeTab';
import SignInScreen from './screens/SignIn';

const RootStack = createStackNavigator();
const App = () => {
  
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
        <RootStack.Screen name="Sign In" component={SignInScreen} options={{ headerShown: false }} />
        <RootStack.Screen name="Home Tab" component={HomeTabScreen} options={{ headerShown: false }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;

