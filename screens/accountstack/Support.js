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

const Support = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text>Rất vui lòng được hỗ trợ bạn!</Text>
    </View>
  );
};

export default Support;