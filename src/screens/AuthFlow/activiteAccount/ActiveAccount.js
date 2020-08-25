import React, { useState, useContext } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    AsyncStorage
} from 'react-native';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Color from '@Assets/Constant';
import StackHeader from '@Components/Header/StackHeader/StackHeader';
import { Context as AuthContext } from '../../../Context/AuthContext';
import Footer from '@Footer/LoginFooter/LoginFooter';
import { activeAccount } from "@Services/AuthServices";
import LoadingDialog from '@Components/LoadingDialog/LoadingDialog';
import CountDown from 'react-native-countdown-component';

import styles from './Styles';
const CELL_COUNT = 4;

const ActiveAccount = ({ navigation }) => {
    const { loginToken } = useContext(AuthContext)
    const [value, setValue] = useState('');
    const [totalDuration,setTotalDuration] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const [isLoading, setIsLoading] = useState(false);
    const doLogin = async () => {
        setIsLoading(true);
        try {
            const response = await activeAccount(value);
            // await AsyncStorage.setItem("accessToken", response.data.token);
            if (response.status === true) {
                navigation.navigate('Drawer');
            } else {
                alert("virification code not correct");
            }
            setIsLoading(false);
        } catch (e) {
            console.log(e);
            setIsLoading(false);
            setTimeout(() => {
                alert("Please Enter code");
            }, 300);
        }
    };
    return (
        <>
            {isLoading === true ? <LoadingDialog /> : (
                <View style={styles.container}>
                    <StackHeader color={Color.primary} goBack={() => navigation.goBack()} />
                    <View style={styles.headSection}>
                        <Text style={styles.title1}>{'activate'.toUpperCase()}</Text>
                        <Text style={styles.title2}>{'your account'.toUpperCase()}</Text>
                        <CodeField
                            ref={ref}
                            {...props}
                            value={value}
                            onChangeText={setValue}
                            cellCount={CELL_COUNT}
                            rootStyle={styles.codeFieldRoot}
                            keyboardType="number-pad"
                            textContentType="oneTimeCode"
                            renderCell={({ index, symbol, isFocused }) => (
                                <Text
                                    key={index}
                                    style={[styles.cell, isFocused && styles.focusCell]}
                                    onLayout={getCellOnLayoutHandler(index)}>
                                    {symbol || (isFocused ? <Cursor /> : null)}
                                </Text>
                            )}
                        />
                        {/* <CountDown
                            until={85}
                            onFinish={() => alert('finished')}
                            onPress={() => alert('hello')}
                            size={20}
                        /> */}
                        <CountDown
                            until={30}
                            size={30}
                            onFinish={() => alert('Finished')}
                            digitStyle={{ backgroundColor: '#FFF' }}
                            digitTxtStyle={{ color: Color.secondary,fontSize:30 }}
                            timeToShow={['M', 'S']}
                            timeLabels={{ m: '', s: '' }}
                        />
                        <TouchableOpacity style={styles.resendCode}>
                            <Text style={styles.resendCodeText}>Resend Code</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={doLogin}>
                            <Text style={styles.SignupText}>Activate</Text>
                        </TouchableOpacity>
                        <KeyboardAvoidingView behavior='height' keyboardVerticalOffset={0}>
                            <Footer />
                        </KeyboardAvoidingView>
                    </View>
                </View>
            )}
        </>
    )
}
export default ActiveAccount;