import React, { useContext, useState } from 'react';
import {
    View,
    Text,
    Image,
    KeyboardAvoidingView,
    AsyncStorage,
    ScrollView
} from 'react-native';
import Form from '@Components/LoginForm/Login';
import LoadingDialog from '@Components/LoadingDialog/LoadingDialog';
import { Context as AuthContext } from '../../../Context/AuthContext';
import styles from './Styles';
import { login } from "@Services/AuthServices";

const Login = ({ navigation }) => {
    // const { Login } = useContext(AuthContext);
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const doLogin = async () => {
        setIsLoading(true);
        try {
            const response = await login({
                email: data.email,
                password: data.password,
            });
            await AsyncStorage.setItem("accessToken", response.data.token);
            // Login(response.data.token);
            if (response.data.success == true) {
                navigation.navigate('Drawer')
            } else {
                alert("username or password not correct");
            }
            setIsLoading(false);
        } catch (e) {
            console.log(e);
            setIsLoading(false);
            setTimeout(() => {
                alert("username or password not correct");
            }, 300);
        }
    };
    return (
        <ScrollView style={styles.container}>
            {isLoading && <LoadingDialog />}
            <View style={{ flex: 3 }}>
                <View style={styles.head}>
                    <Image source={require('@Assets/images/quarter-circle-left.png')} style={{ alignSelf: "flex-start" }} resizeMode="cover" />
                    <Image source={require('@Assets/images/blue-logo.png')}
                        resizeMode="cover"
                        style={styles.logo}
                    />
                </View>
                <View style={styles.title}>
                    <View style={{ width: "90%", alignSelf: "center" }}>
                        <Text style={styles.title1}>{'Welcome to'.toUpperCase()}</Text>
                        <Text style={styles.title2}>{'Vision Enabler'.toUpperCase()}</Text>
                    </View>
                    <Form
                        Login={() => doLogin()}
                        SignUp={() => navigation.navigate('SignUp')}
                        ForgotPassword={() => navigation.navigate('ResetPassword')}
                        email={data.email}
                        password={data.password}
                        setEmail={(val) => setData({ ...data, email: val })}
                        setPassword={(val) => setData({ ...data, password: val })}
                    />
                </View>
            </View>
        </ScrollView>
    )
}
export default Login;