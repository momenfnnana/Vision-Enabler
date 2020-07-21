import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Color from '../../../../assets/Constant'
import StackHeader from '../../../components/Header/StackHeader';
const CELL_COUNT = 4;

const ActiveAccount = () => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    return (
        <View style={styles.container}>
            <StackHeader color={Color.primary} />
            <View style={styles.headSection}>
                <Text style={styles.title1}>{'Account'.toUpperCase()}</Text>
                <Text style={styles.title2}>{'Sign up'.toUpperCase()}</Text>
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
                <TouchableOpacity style={{ alignSelf: "center", marginTop: 10 }}>
                    <Text style={{ fontSize: 14, color: `${Color.primary}` }}>Resend Code</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.SignupText}>Sign up</Text>
                </TouchableOpacity>
                <Image source={require('../../../../assets/images/pups.png')} resizeMode="cover" style={{ marginTop: "80%", marginLeft: "-18%" }} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%"
    },
    root: { flex: 1, padding: 20 },
    title: { textAlign: 'center', fontSize: 30 },
    codeFieldRoot: { marginTop: 20 },
    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        borderBottomWidth: 2,
        borderBottomColor: `${Color.black}30`,
        textAlign: 'center',
    },
    focusCell: {
        borderColor: `${Color.white}`,
    },
    button: {
        borderRadius: 50,
        backgroundColor: `${Color.primary}`,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 12,
        marginVertical: 22
    },
    SignupText: {
        color: `${Color.white}`,
        fontSize: 16
    },
    headSection: {
        flex: 1,
        marginLeft: "10%",
        marginRight: "10%",
        marginTop: "5%"
    },
    title1: {
        color: `${Color.secondary}`,
        fontSize: 16,
        fontFamily: "Altissimo_bold",
        alignSelf: "flex-start"
    },
    title2: {
        color: `${Color.primary}`,
        fontSize: 30,
        fontFamily: "Altissimo",
        fontWeight: "bold",
        alignSelf: "flex-start"
    },
    date: {
        color: `${Color.secondary}`,
        textAlign: "center",
        fontSize: 24,
        marginTop: 30
    }
})
export default ActiveAccount