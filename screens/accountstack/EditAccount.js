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

const EditAccount = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Text>Sửa hồ sơ cá nhân</Text>
    </View>
  );
};

export default EditAccount;