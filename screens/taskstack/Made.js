import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView,Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { TouchableRipple } from 'react-native-paper'
import { Ionicons, AntDesign, MaterialIcons, FontAwesome5,FontAwesome } from '@expo/vector-icons';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const WaitReceipt = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={styles.container}
                contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }} >
                <View>
                    <TouchableRipple onPress={() => { }} style={styles.menu}>
                        <View style={styles.menuItem}>
                            <Text style={styles.textCode}>Mã đơn: 123123</Text>
                            <Text>Nguyễn Văn A</Text>
                            <AntDesign name="phone" size={15} color="black" />
                            <Text>0986878356</Text>
                            <FontAwesome name="map-marker" size={15} color="black" />
                            <Text>Hẻm 1c, đường 22, quận 9, tp Thủ Đức,Hồ Chí Minh</Text>
                        </View>
                    </TouchableRipple>
                    <TouchableRipple onPress={() => { }} style={styles.menu}>
                        <View style={styles.menuItem}>
                            <Text style={styles.textCode}>Mã đơn: 123123</Text>
                            <Text>Nguyễn Văn A</Text>
                            <AntDesign name="phone" size={15} color="black" />
                            <Text>0986878356</Text>
                            <FontAwesome name="map-marker" size={15} color="black" />
                            <Text>Hẻm 1c, đường 22, quận 9, tp Thủ Đức,Hồ Chí Minh</Text>
                        </View>
                    </TouchableRipple>
                    
                </View>
                
            </ScrollView>
        </SafeAreaView>
    );
};

export default WaitReceipt;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingHorizontal: 10,
        paddingHorizontal: 10
    },
    menu: {
        borderRadius: 5,
        backgroundColor: '#fff',
        height: 120,
        width: windowWidth - 20,
        marginTop: 15,
        shadowOpacity: 0.5,
        
        
    },
    menuItem: {
        
    },
    textCode: {
        backgroundColor: 'orange',
        height: 30,
        alignItems: 'center',
        // padding: 10
    }
});