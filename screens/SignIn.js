import React, { useState, createRef } from 'react';
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    ScrollView,
    Image,
    Keyboard,
    TouchableOpacity,
    KeyboardAvoidingView,

    Alert
} from 'react-native';
import { StatusBar } from 'expo-status-bar';


import AsyncStorage from '@react-native-async-storage/async-storage';

import Loader from '../components/Loader';

const LoginScreen = ({ navigation, onSignIn }) => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState('');

    const passwordInputRef = createRef();

    const handleSubmitPress = () => {
        setErrortext('');
        if (!userEmail) {
            Alert.alert('Bạn chưa nhập tài khoản!');
            return;
        }
        if (!userPassword) {
            Alert.alert('Bạn chưa nhập mật khẩu!');
            return;
        }
        setLoading(true);
        let dataToSend = { email: userEmail, password: userPassword };
        let formBody = [];
        for (let key in dataToSend) {
            let encodedKey = encodeURIComponent(key);
            let encodedValue = encodeURIComponent(dataToSend[key]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');

        fetch(
            'http://azexpress.com.vn:8080/cpn-backup/api/?action=users&object=supperLoginApi',
            {
                method: 'POST',
                body: formBody,
                headers: {
                    //Header Definai
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Accept: '*/*',
                },
            }
        )
            .then((response) => response.json())
            .then((responseJson) => {
                //Hide Loaded
                if (responseJson.constructor === String) {
                    responseJson = JSON.parse(responseJson);
                }
                
                // If server response message same as Data Matched
                if (responseJson.success === true) {
                    AsyncStorage.setItem(
                        'user_id',
                        JSON.stringify(responseJson.data._token)
                    );
                    AsyncStorage.setItem(
                        'user_name',
                        JSON.stringify(responseJson.data.profile.level)
                    );
                    // console.log(responseJson.data.messenger);
                    navigation.replace('Home Tab');
                } else {
                    // setErrortext(responseJson.messenger);
                    
                    Alert.alert(responseJson.messenger);
                    // setTimeout(() =>{setLoading(false);},2000)
                }
            })
            .catch((error) => {
                //Hide Loader
                setLoading(false);
                console.error(error);
            });
            setLoading(false);
    };

    return (

        <View style={styles.mainBody}>
            <StatusBar backgroundColor='blue'
                barStyle='light-content' />
            <Loader loading={loading} />
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    flex: 1,
                    justifyContent: 'center',
                    alignContent: 'center',
                }}>
                <View>
                    <KeyboardAvoidingView enabled>
                        <View style={{ alignItems: 'center' }}>
                            <Image
                                source={require('../assets/logo.png')}
                                style={{
                                    width: '50%',
                                    height: 80,
                                    resizeMode: 'contain',
                                    margin: 20,
                                }}
                            />
                        </View>
                        <View style={styles.SectionStyle}>
                            <TextInput
                                style={styles.inputStyle}
                                onChangeText={(UserEmail) => setUserEmail(UserEmail)}
                                placeholder="Nhập Tài Khoản" //dummy@abc.com
                                placeholderTextColor="#8b9cb5"
                                autoCapitalize="none"
                                keyboardType="email-address"
                                returnKeyType="next"
                                onSubmitEditing={() =>
                                    passwordInputRef.current && passwordInputRef.current.focus()
                                }
                                underlineColorAndroid="#000"
                                blurOnSubmit={false}
                            />
                        </View>
                        <View style={styles.SectionStyle}>
                            <TextInput
                                style={styles.inputStyle}
                                onChangeText={(UserPassword) => setUserPassword(UserPassword)}
                                placeholder="Nhập Mật Khẩu" //12345
                                placeholderTextColor="#8b9cb5"
                                keyboardType="default"
                                ref={passwordInputRef}
                                onSubmitEditing={Keyboard.dismiss}
                                blurOnSubmit={false}
                                secureTextEntry={true}
                                underlineColorAndroid="#f000"
                                returnKeyType="next"
                            />
                        </View>

                        <TouchableOpacity
                            style={styles.buttonStyle}
                            activeOpacity={0.5}
                            onPress={handleSubmitPress}
                        >
                            <Text style={styles.buttonTextStyle}>Đăng Nhập</Text>
                        </TouchableOpacity>
                        {/* <Text
                            style={styles.registerTextStyle}
                            onPress={() => navigation.navigate('RegisterScreen')}>
                            Đăng Ký
            </Text> */}
                        {errortext != '' ? (
                            <Text style={styles.errorTextStyle}>{errortext}</Text>
                        ) : null}
                    </KeyboardAvoidingView>
                </View>
            </ScrollView>
        </View>
    );
};
export default LoginScreen;

const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
        alignContent: 'center',
    },
    SectionStyle: {
        flexDirection: 'row',
        height: 40,
        marginTop: 20,
        marginLeft: 35,
        marginRight: 35,
        margin: 10,
    },
    sectionStyle: {
        flexDirection: 'row',
        height: 56,
        width: 200,
        marginTop: 0,
        marginLeft: 25,
        marginRight: 10,
        margin: 0,

    },
    buttonStyle: {
        backgroundColor: 'orange',
        borderWidth: 0,

        borderColor: 'orange',
        height: 40,
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: 120,
        marginRight: 120,
        marginTop: 10,
        marginBottom: 10,
    },
    buttonTextStyle: {
        color: '#000',
        paddingVertical: 10,
        fontSize: 16,
    },
    inputStyle: {
        flex: 1,
        color: '#000',
        paddingLeft: 15,
        paddingRight: 15,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#dadae8',
    },
    registerTextStyle: {
        color: '#000',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 14,
        alignSelf: 'center',
        padding: 10,
    },
    errorTextStyle: {
        color: 'red',
        textAlign: 'center',
        fontSize: 14,
    },
});
