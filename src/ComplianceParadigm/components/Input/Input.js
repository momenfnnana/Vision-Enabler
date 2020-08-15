import React, { useState } from "react";
import { View, TextInput } from "react-native";
import styles from './Input.style';
const Input = (props) => {
  const [isFocused, setFocused] = useState(false);

  const onFocusChange = () => setFocused(true);
  const onFocusFalse = () => setFocused(false);
  return (
    <View
      style={[
        styles.containInput,
        isFocused ? { borderColor: "#22E0D7" } : { borderColor: "#E3E4F6" },
      ]}
    >
      <TextInput
        onFocus={onFocusChange}
        onEndEditing={onFocusFalse}
        {...props}
        placeholderTextColor="#B3B5D7"
        style={[{ flex: 1 }, isFocused ? { color: '#313BD0' } : { color: '#38465F' }]}
      />
      {props.rightIcon}
    </View>
  );
};

export default Input;