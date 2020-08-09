import React, { useState } from "react";
import { StyleSheet, Platform } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
const DropDownList = ({
  data,
  defaultVal,
  onChangeItem,
  placeholder,
  paddingVertical,
  containerStyle
}) => {
  const [isFocused, setFocused] = useState(false);
  const onFocusTrue = () => setFocused(true);
  const onFocusFalse = () => setFocused(false);
  return (
    <DropDownPicker
      placeholder={placeholder}
      items={data}
      defaultValue={defaultVal}
      containerStyle={containerStyle}
      itemStyle={styles.itemDropdown}
      dropDownStyle={[styles.dropDownList,isFocused?{borderColor: "#22E0D7"}:{borderColor: "#E3E4F6"}]}
      onChangeItem={onChangeItem}
      style={[styles.inputDropDown, { paddingVertical: paddingVertical },isFocused?{borderColor: "#22E0D7"}:{borderColor: "#E3E4F6"}]}
      placeholderStyle={styles.dropDownPlaceholder}
      arrowColor="#38465F"
      onOpen={onFocusTrue}
      onClose={onFocusFalse}
      activeLabelStyle={{color:'#313BD0'}}
      labelStyle={{color:'#38465F'}}
    />
  );
};

const styles = StyleSheet.create({
  containDropdownLists: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    ...(Platform.OS !== "android" && {
      zIndex: 10,
    }),
  },
  itemDropdown: {
    justifyContent: "center",
  },
  dropDownList: {
    backgroundColor: "#fff",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  inputDropDown: {
    backgroundColor: "transparent",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  dropDownPlaceholder: {
    color: "#B3B5D7",
  },
  ActiveItem:{
      color:'red'
  }
});

export default DropDownList;
