import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OrderDetailScreen from './taskstack/OrderCodeDetail';
import BarCodeScanScreen from './scanstack/ScanHome';

const ScanStack = createStackNavigator();
const Scan = () => {
  return (
    <ScanStack.Navigator>
      <ScanStack.Screen name="Scan Home" component={BarCodeScanScreen}
        options={{ headerShown: false }} />
      <ScanStack.Screen name="Detail" component={OrderDetailScreen} />
    </ScanStack.Navigator>
  );
};

export default Scan;