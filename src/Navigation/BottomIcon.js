import React from 'react';
import { View, Image } from 'react-native';
const BottomIcon = ({ src }) => {
    return (
        <View style={{ backgroundColor: "#fff", width: "650%", height: "370%", position: "absolute", top: "-30%", alignItems: "center" }}>
            <Image style={{marginTop:"12%"}} source={src} />
        </View>
    )
}
export default BottomIcon;