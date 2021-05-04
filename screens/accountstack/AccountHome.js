// Import React and Component
import React, { useState } from 'react';
import { View, Text, SafeAreaView, Alert, Button, NativeModules, StyleSheet, Image, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TouchableRipple } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons, AntDesign, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';


const showAlert = () =>
    Alert.alert(
        'Cảnh báo',
        'Bạn có chắc muốn thoát?',
        [
            {
                text: 'Hủy',
                onPress: () => {
                    return null;
                },
                style: 'cancel',
            },
            {
                text: 'Đồng ý',
                onPress: () => {
                    AsyncStorage.clear();
                    // navigation.replace('Landing');
                    NativeModules.DevSettings.reload();
                },
            },
        ],
        { cancelable: false }
    );
const AccountHome = ({navigation}) => {
    const [userName, setUserName] = useState('');
    const getUseNameFunction = () => {
        // Function to get the value from AsyncStorage
        AsyncStorage.getItem('user_name').then(
            (value) =>
                // AsyncStorage returns a promise
                // Adding a callback to get the value
                // Alert.alert(value),
                setUserName(value),
            // Setting the value in Text
        );
    };
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f4f4f4' }}>
            <ScrollView
                style={styles.container}
                contentContainerStyle={{ justifyContent: 'center' }}
            >
                <View style={styles.viewInfo}>
                    <Image
                        source={{
                            uri: 'https://1.bp.blogspot.com/-_rr7BPLuTj4/XkSt4WqHCEI/AAAAAAAAVY0/PKjQBJwNCPUkQMPb6M8bHeOlw0VIS2amQCNcBGAsYHQ/s1600/hinh-nen-girl-xinh-gai-dep-hd%2B%25289%2529.jpg',
                        }}
                        style={styles.avatar}
                    />
                    <Text style={styles.userText}>Nguyễn Văn A</Text>
                </View>

                <View style={styles.menuWrapper}>
                    <TouchableRipple onPress={() => navigation.navigate('Sửa hồ sơ')}>
                        <View style={styles.menuItem}>
                            <FontAwesome5 name="user-edit" size={20} color="#ff6347" />
                            <Text style={styles.menuItemText}>Sửa hồ sơ</Text>
                        </View>
                    </TouchableRipple>
                    <View style={styles.viewT}></View>

                    <TouchableRipple onPress={() => navigation.navigate('Cài đặt')}>
                        <View style={styles.menuItem}>
                            <Ionicons name="settings-outline" size={20} color="#ff6347" />
                            <Text style={styles.menuItemText}>Cài đặt</Text>
                        </View>
                    </TouchableRipple>
                    <View style={styles.viewT}></View>

                    <TouchableRipple onPress={() => navigation.navigate('Liên hệ báo lỗi')}>
                        <View style={styles.menuItem}>
                            <MaterialIcons name="contact-support" size={20} color="#ff6347" />
                            <Text style={styles.menuItemText}>Liên hệ báo lỗi</Text>
                        </View>
                    </TouchableRipple>
                    <View style={styles.viewT}></View>

                    <TouchableRipple onPress={showAlert}>
                        <View style={styles.menuItem}>
                            <AntDesign name="logout" size={20} color="#ff6347" />
                            <Text style={styles.menuItemText}>Thoát</Text>
                        </View>
                    </TouchableRipple>

                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default AccountHome;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        padding: 5,
        paddingHorizontal: 5
    },
    viewInfo: {
        flexDirection: 'row',
        marginTop: 5,
        borderBottomColor: '#e7e7e7',
        borderBottomWidth: 1,
        height: 150,
        // backgroundColor: 'orange'
    },
    avatar: {
        width: 80,
        height: 80,
        borderRadius: 75,
        marginLeft: 10,
        marginTop: 10
    },
    userText: {
        fontSize: 18,
        fontWeight: 'normal',
        marginLeft: 20,
        marginTop: 20
    },
    menuWrapper: {
        marginTop: 0
    },
    menuItem: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    menuItemText: {
        color: '#777777',
        marginLeft: 20,
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 26
    },
    viewT: {
        height: 1,
        borderBottomColor: '#e7e7e7',
        borderBottomWidth: 1
    }

});