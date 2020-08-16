import React from 'react';
import { View, Image } from 'react-native';
const BottomIcon = ({ src }) => {
    return (
        <View style={{ backgroundColor: "#fff", width: "600%", height: "230%", position: "absolute", top: "-30%", justifyContent: "center", alignItems: "center" }}>
            <Image source={src} />
        </View>
    )
}
export default BottomIcon;