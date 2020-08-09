import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
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
        style={[{flex:1},isFocused?{color:'#313BD0'}:{color:'#38465F'}]}
      />
      {props.rightIcon}
    </View>
  );
};

const styles = StyleSheet.create({
  containInput: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: "3%",
    paddingVertical: "4%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex:1
  },
});

export default Input;
