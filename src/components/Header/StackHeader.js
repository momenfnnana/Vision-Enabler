import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const StackHeader = ({ color }) => {
    return (
        <View style={styles.container}>
            <View style={{
                alignItems: "flex-start",
                height: 80,
                justifyContent: "center",
                paddingHorizontal: "5%"
            }}>
                <AntDesign name="arrowleft" size={24} color={color} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({})
export default StackHeader