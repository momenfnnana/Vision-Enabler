import React, { useState } from 'react'
import { View, Text, Picker, StyleSheet, TouchableOpacity } from 'react-native'
import { Input } from 'react-native-elements'
import Color from '../../../assets/Constant'
import DropDownPicker from 'react-native-dropdown-picker';

const Form = () => {
    const [selectedValue, setSelectedValue] = useState("uk");

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
                    <DropDownPicker
                        items={[
                            { label: 'UK', value: 'uk' },
                            { label: 'France', value: 'france' },
                        ]}
                        defaultValue={selectedValue}
                        containerStyle={{
                            height: 40,
                            width: 100
                        }}
                        style={{
                            backgroundColor: '#fff',
                            borderColor: "#fff",
                            borderBottomColor: `${Color.black}70`,
                        }}
                        itemStyle={{
                            justifyContent: 'flex-start',
                        }}
                        dropDownStyle={{
                            backgroundColor: '#fafafa',
                        }}
                        onChangeItem={() => setSelectedValue}
                    />
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
                <Text style={{ color: `${Color.primary}`, fontSize: 13 }}>
                    By creating account, you agree to Vision Enabler
            </Text>
                <TouchableOpacity>
                    <Text style={{ color: `${Color.secondary}` }}> Privacy Policy</Text>
                </TouchableOpacity>
                <Text style={{ color: `${Color.primary}`, fontSize: 13 }}>and</Text>
                <TouchableOpacity>
                    <Text style={{ color: `${Color.secondary}` }}>Terms of Use</Text>
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
        backgroundColor: `${Color.primary}`,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 12,
        marginVertical: 22
    },
    SignupText: {
        color: `${Color.white}`,
        fontSize: 16
    }
})
export default Form