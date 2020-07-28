import React, { useState, useContext } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
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
import Footer from '@Footer/LoginFooter/LoginFooter'

import styles from './Styles';
const CELL_COUNT = 4;

const ActiveAccount = ({ navigation }) => {
    const { login } = useContext(AuthContext)
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    return (
        <View style={styles.container}>
            <StackHeader
                color={Color.primary}
                goBack={() => navigation.goBack()}
            />
            <View style={styles.headSection}>
                <Text
                    style={styles.title1}
                >{'activate'.toUpperCase()}</Text>
                <Text
                    style={styles.title2}
                >{'your account'.toUpperCase()}</Text>
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
                <Text style={styles.date}>01:25</Text>
                <TouchableOpacity
                    style={styles.resendCode}
                >
                    <Text
                        style={styles.resendCodeText}
                    >Resend Code</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={login}
                    style={styles.button}
                >
                    <Text style={styles.SignupText}>Activate</Text>
                </TouchableOpacity>
                <Footer />
            </View>
        </View>
    )
}
export default ActiveAccount