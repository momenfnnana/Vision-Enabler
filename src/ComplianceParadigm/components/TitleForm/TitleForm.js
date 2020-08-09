import React from "react";
import { View, Text } from "react-native";

const TitleForm = (props) => {
  return (
    <Text
      {...props}
      style={[
        props.style,
        { fontFamily: "Altissimo_bold", fontSize: 20, color: "#313BD0",marginVertical:5 },
      ]}
    >
      {props.children}
    </Text>
  );
};

export default TitleForm;
