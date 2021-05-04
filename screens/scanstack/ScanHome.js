import React, { useEffect, useState } from 'react';

import { Text, Button, Dimensions, StyleSheet, TouchableOpacity, View, Linking, Alert } from 'react-native';

// import { Text, View } from '../components/Themed';

import { BarCodeScanner, BarCodeScannerResult } from 'expo-barcode-scanner';

import BarcodeMask from 'react-native-barcode-mask';

const finderWidth = 280;

const finderHeight = 230;

const width = Dimensions.get('window').width;

const height = Dimensions.get('window').height;

const viewMinX = (width - finderWidth) / 2;

const viewMinY = (height - finderHeight) / 2;

const BarCodeScanScreen = ({ navigation }) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [type, setType] = useState(BarCodeScanner.Constants.Type.back);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        }
        )();
    }, []);

    //   const navi = ({navition}) => {
    //       return (
    //           navition.navigate('Detail')
    //       );
    //   };
    //   const handleBarCodeScanned = (scanningResult: BarCodeScannerResult) => {
    //     if (!scanned) {
    //       const { type, data, bounds: { origin } = {} } = scanningResult;

    //       // @ts-ignore

    //       const { x, y } = origin;

    //       if (
    //         x >= viewMinX &&
    //         y >= viewMinY &&
    //         x <= viewMinX + finderWidth / 2 &&
    //         y <= viewMinY + finderHeight / 2
    //       ) {
    //         setScanned(true);
    //         Alert.alert(
    //           'Nội dung mã QR: ',
    //           `${data}`,
    //           [
    //             {
    //               text: 'Yes',
    //               onPress: () => 
    //             //   Linking.openURL(data),
    //             navigation.navigate('Detail'),

    //             },
    //             { text: 'No', onPress: () => setScanned(false)},
    //           ],
    //           { cancellable: false }
    //         );
    //         // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    //         // Linking.openURL(data)
    //       }
    //     }
    //   };
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        // navigation.navigate('Detail', {code: data});
        // Alert.alert(
        //     'Nội dung mã QR: ',
        //     `${data}`,
        //     [
        //         {
        //             text: 'Yes',
        //                 //   Linking.openURL(data),
        //         },
        //         { text: 'No', onPress: () => setScanned(false) },
        //     ],
        //     { cancellable: false }
        // );
    };
    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={{ flex: 1 }}>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                type={type}
                barCodeTypes={[BarCodeScanner.Constants.BarCodeType.qr]}
                style={[StyleSheet.absoluteFillObject, styles.container]}
                >
                <View
                    style={{
                        backgroundColor: 'transparent',
                        flexDirection: 'row',
                    }}>
                    <TouchableOpacity
                        style={{
                            alignItems: 'flex-end',
                        }}
                        onPress={() => {
                            setType(
                                type === BarCodeScanner.Constants.Type.back
                                    ? BarCodeScanner.Constants.Type.front
                                    : BarCodeScanner.Constants.Type.back
                            );
                        }}>
                    </TouchableOpacity>
                </View>

                <BarcodeMask edgeColor="#62B1F6" showAnimatedLine />
                {scanned && (
                    <Button title="Scan Again" onPress={() => setScanned(false)} style={styles.buttonScan} />
                )}


            </BarCodeScanner>
            <Button
                title="Chuyển màn hình"
                style={styles.buttonStyle}
                onPress={() => navigation.navigate('Detail',{itemId: 'AZ123456'})} />
            {/* <TouchableOpacity
                style={styles.buttonStyle}
                onPress={() => navigation.navigation('Detail')}>
                <Text>Chuyển màn hình</Text>
            </TouchableOpacity> */}
            {/* <Text onPress={() => navigation.navigate('Detail')}>Chuyển màn hình</Text> */}
        </View>
    );
}
export default BarCodeScanScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center',

        justifyContent: 'center',
    },
    buttonScan: {
        // flex: 1,
        // alignItems: 'stretch'
    },
    buttonStyle: {
        backgroundColor: 'orange',
        borderWidth: 0,

        borderColor: 'orange',
        height: 40,
        alignItems: 'center',
        borderRadius: 5,
        // marginLeft: 120,
        // marginRight: 120,
        marginTop: 10,
        marginBottom: 10,
    },
});
