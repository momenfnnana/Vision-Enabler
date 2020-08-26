import React, { useContext, useState } from 'react';
import {
    View,
    Text,
    Image,
    KeyboardAvoidingView,
    AsyncStorage
} from 'react-native';
import Form from '@Components/LoginForm/Login';
import LoadingDialog from '@Components/LoadingDialog/LoadingDialog';
import { Context as AuthContext } from '../../../Context/AuthContext';
import styles from './Styles';
import { login } from "@Services/AuthServices";

const Login = ({ navigation }) => {
    const { loginToken } = useContext(AuthContext);
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
        <View style={styles.container}>
            {isLoading && <LoadingDialog />}
            <View style={{ flex: 3 }}>
                <View style={styles.head}>
                    <Image source={require('@Assets/images/quarter-circle-left.png')} style={{ alignSelf: "flex-start" }} resizeMode="cover" />
                    <Image source={require('@Assets/images/blue-logo.png')}
                        resizeMode="cover"
                        style={styles.logo}
                    />
                </View>
                <KeyboardAvoidingView behavior='height' keyboardVerticalOffset={0}>
                    <View style={styles.title}>
                        <Text style={styles.title1}>{'Welcome to'.toUpperCase()}</Text>
                        <Text style={styles.title2}>{'Vision Enabler'.toUpperCase()}</Text>
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
                </KeyboardAvoidingView>
            </View>
            <Image
                style={styles.footerImage}
                source={require('@Assets/images/pups.png')}
            />
        </View>
    )
}
export default Login;