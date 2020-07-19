import React, { useState } from 'react'
import { View, Text, Picker, StyleSheet, TouchableOpacity } from 'react-native'
import { Input } from 'react-native-elements'
const Form = () => {
    const [selectedValue, setSelectedValue] = useState("+966");

    return (
        <View style={{
            marginTop: "10%",
            marginRight: "8%",
        }}>
            <Input
                style={styles.email}
                placeholder="Name"
            />
            <Input
                style={styles.password}
                placeholder="Email"
            />
            <View style={{ flexDirection: "row", marginRight: "28%" }}>
                <View>
                    <Picker
                        selectedValue={selectedValue}
                        style={{ height: 50, width: 100 }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="+966" value="java" />
                        <Picker.Item label="+972" value="js" />
                        <Picker.Item label="+966" value="java" />
                        <Picker.Item label="+972" value="js" />
                        <Picker.Item label="+966" value="java" />
                        <Picker.Item label="+972" value="js" />
                    </Picker>
                </View>
                <Input
                    style={{ marginLeft: "100%" }}
                    placeholder="0599 000 000"
                />
            </View>
            <Input
                style={{ marginLeft: "100%" }}
                placeholder="Password"
            />
            <View style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", paddingLeft: "2%" }}>
                <Text style={{ color: "#313BD0", fontSize: 13 }}>
                    By creating account, you agree to Vision Enabler
            </Text>
                <TouchableOpacity>
                    <Text style={{ color: "#22E0D7" }}> Privacy Policy</Text>
                </TouchableOpacity>
                <Text style={{ color: "#313BD0", fontSize: 13 }}>and</Text>
                <TouchableOpacity>
                    <Text style={{ color: "#22E0D7" }}>Terms of Use</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.SignupText}>Sign up</Text>
            </TouchableOpacity>
        </View >
    )
}
const styles = StyleSheet.create({
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
export default Form