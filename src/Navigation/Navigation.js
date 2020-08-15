import React, { useContext } from 'react';
import ActiveAccount from '@AuthFlow/activiteAccount/ActiveAccount';
import Login from '@AuthFlow/login/login';
import ResetPassword from '@AuthFlow/resetPassword/ResetPassword';
import SignUp from '@AuthFlow/signup/signup';
import ChooseCompany from '@AuthFlow/ChooseCompany/ChooseCompany';
import Splash from '../screens/splash/splash';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Context as AuthContext } from "../Context/AuthContext";
// import { createSharedElementStackNavigator } from 'react-navigation-shared-element'
import Drawer from './Drawer';
const Stack = createStackNavigator();
const Navigator = () => {
    const { state } = useContext(AuthContext)
    return (
        <NavigationContainer>
            {
                state.token === false ? (
                    <Stack.Navigator
                        screenOptions={{
                            headerShown: false
                        }}
                        initialRouteName="Splash"
                    >
                        <Stack.Screen name="Splash" component={Splash} />
                        <Stack.Screen name="SignUp" component={SignUp} />
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="ResetPassword" component={ResetPassword} />
                        <Stack.Screen name="ActiveAccount" component={ActiveAccount} />
                        <Stack.Screen name="ChooseCompany" component={ChooseCompany} />
                    </Stack.Navigator>
                ) : (
                        <Drawer />
                    )
            }
        </NavigationContainer>
    )
}
export default Navigator