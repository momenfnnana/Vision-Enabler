import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
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
            <View style={{
                alignItems: "flex-start",
                height: "10%",
                justifyContent: "flex-end",
                paddingHorizontal: "5%"
            }}>
                <AntDesign name="arrowleft" size={24} color="#313BD0" />
            </View>
            <View style={{
                flex: 1,
                marginLeft: "10%",
                marginRight: "10%",
                marginTop: "5%"
            }}>
                <Text style={{ color: "#22E0D7", fontSize: 16, fontFamily: "Altissimo_bold", alignSelf: "flex-start" }}>{'Account'.toUpperCase()}</Text>
                <Text style={{ color: "#313BD0", fontSize: 30, fontFamily: "Altissimo", fontWeight: "bold", alignSelf: "flex-start" }}>{'Sign up'.toUpperCase()}</Text>
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
                <Text style={{ color: "#B3B5D7", textAlign: "center", fontSize: 24, marginTop: 30 }}>01:25</Text>
                <TouchableOpacity style={{ alignSelf: "center", marginTop: 10 }}>
                    <Text style={{ fontSize: 14, color: "#313BD0" }}>Resend Code</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.SignupText}>Sign up</Text>
                </TouchableOpacity>
                <Image source={require('../../../assets/images/pups.png')} resizeMode="cover" style={{ marginTop: "80%", marginLeft: "-18%" }} />
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
        borderBottomColor: '#00000030',
        textAlign: 'center',
    },
    focusCell: {
        borderColor: '#000',
    },
    button: {
        borderRadius: 50,
        backgroundColor: "#313BD0",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 12,
        marginVertical: 22
    },
    SignupText: {
        color: "#fff",
        fontSize: 16
    }
})
export default ActiveAccount