import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native-gesture-handler';



const OrderDetail = ({route}) => {
  const { itemId, otherParam }= route.params;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.container}
        contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
      >
        <StatusBar style="dark" />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Chi tiết mã đơn hàng</Text>
        <View>
          <Text>Mã QRCode: {JSON.stringify(itemId)}</Text>
        </View>
        <View style={styles.viewT}>
          <Text>Người nhận: </Text>
          <Text>Vũ Văn Thanh</Text>
        </View>
        <View style={styles.viewT}>
          <Text>Người giao: </Text>
          <Text>Nguyễn Định</Text>
        </View>
        <View style={styles.viewT}>
          <Text>Địa chỉ: </Text>
          <Text>Đường 22 cuối hẻm 1C, phường Phước Long B, Quận 9, TP.Thủ Đức</Text>
        </View>
        <View style={styles.viewT}>
          <Text>Loại dịch vụ: </Text>
          <Text>COD</Text>
        </View>
        <View style={styles.viewT}>
          <Text>Ghi chú: </Text>
          <Text>Điện thoại cho tôi trước khi đến địa chỉ nhé</Text>
        </View>
        <View style={styles.viewT}>
          <Text>Trọng lượng</Text>
        </View>
        <View style={styles.viewT}>
          <TextInput
            style={styles.inputStyle}
            placeholder="Nhập trọng lượng"
            placeholderTextColor="#8b9cb5"
            autoCapitalize="none"
            keyboardType="numeric"
          />
        </View>
        <View>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            onPress={() => { }}
          >
            <Text style={styles.buttonTextStyle}>Cập Nhật</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OrderDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  viewT: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: 390

  },
  inputStyle: {
    // flex: 1,
    color: '#000',
    // paddingLeft: 200,
    // paddingRight: 15,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#dadae8',
    height: 30,
    width: 380
  },
  buttonStyle: {
    backgroundColor: 'orange',
    borderWidth: 0,
    // borderColor: 'orange',
    height: 40,
    // alignItems: 'center',
    alignContent: 'center',
    borderRadius: 5,
    marginLeft: 100,
    marginRight: 100,
    width: 90
    // marginTop: 10,
    // marginBottom: 10,
  },
  buttonTextStyle: {
    color: '#000',
    // alignContent: 'center',
    // alignContent: 'center',
    // paddingVertical: 10,
    padding: 10,
    fontSize: 16,
  },
});