import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Color from '@Assets/Constant';
import styles from './Input.style';

const Input = ({ label, placeholder }) => {
    const [isFocused, setFocused] = useState(false);

    const onFocusChange = () => setFocused(true);
    const onFocusFalse = () => setFocused(false);
    return (
        <View>
            <Text style={styles.inputTitle}>{label}</Text>
            <TextInput
                onFocus={onFocusChange}
                onEndEditing={onFocusFalse}
                style={{
                    borderColor: isFocused ? Color.secondary : "#E3E4F6",
                    borderWidth: isFocused ? 2 : 1,
                    borderRadius: 8,
                    width: "80%",
                    alignSelf: "center",
                    paddingVertical: "3%",
                    paddingLeft: "3%",
                }}
                placeholder={placeholder}
            />
        </View>
    )
}
export default Input