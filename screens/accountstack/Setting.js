import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Settings = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text>Ở đây bạn có thể cài đặt</Text>
    </View>
  );
};

export default Settings;