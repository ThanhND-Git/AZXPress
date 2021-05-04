import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import EditAccount from './accountstack/EditAccount';
import AccountHome from './accountstack/AccountHome';
import Settings from './accountstack/Setting';
import Support from './accountstack/Support';
const AccountStack = createStackNavigator();
const Account = () => {

    return (
        <AccountStack.Navigator>
            <AccountStack.Screen name="Tài khoản" component={AccountHome} options={{ headerShown: false }} />
            <AccountStack.Screen name="Sửa hồ sơ" component={EditAccount} />
            <AccountStack.Screen name="Cài đặt" component={Settings} />
            <AccountStack.Screen name="Liên hệ báo lỗi" component={Support} />
        </AccountStack.Navigator>
    );
};

export default Account;
