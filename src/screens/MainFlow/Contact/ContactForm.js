import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Color from '../../../../assets/Constant';
import DropDownPicker from 'react-native-dropdown-picker';

const ContactForm = () => {
    const [selectedValue, setSelectedValue] = useState("select VE office");

    return (
        <ScrollView style={styles.container}>
            <ImageBackground
                style={{
                    width: "100%",
                    resizeMode: "cover",
                    height: 410,
                    paddingTop: "7%",
                    justifyContent: "flex-start",
                    alignItems: "center"
                }}
                width={"100%"}
                source={require('../../../../assets/images/ContactFormHeader.png')}
            >
                <AntDesign
                    style={{
                        alignSelf: "flex-start",
                        marginLeft: "5%"
                    }}
                    name="arrowleft" size={24} color={Color.white} />
                <View
                    style={{
                        height: "13%",
                        width: "18%",
                        borderRadius: 10,
                        backgroundColor: Color.white,
                        marginTop: "7%"
                    }}
                />
                <Text
                    style={{
                        fontSize: 22,
                        color: Color.white,
                        fontFamily: "Altissimo",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        marginTop: "7%"
                    }}
                >Drop us a <Text
                    style={{
                        color: Color.secondary
                    }}
                >Line</Text></Text>
                <Text
                    style={{
                        color: Color.white,
                        textAlign: "center",
                        marginTop: "7%",
                        width: "85%"
                    }}
                >Whether you have a question about features, trials, pricing, need a demo, or anything else, our team is ready to answer all your questions.</Text>
            </ImageBackground>
            <TextInput
                placeholder="firstName"
                style={{
                    borderColor: Color.secondary,
                    borderWidth: 2,
                    borderRadius: 5,
                    width: "85%",
                    alignSelf: "center",
                    marginTop: "7%",
                    paddingVertical: "3%",
                    paddingLeft: "5%"
                }}
            />
            <TextInput
                placeholder="lastName"
                style={{
                    borderColor: Color.secondary,
                    borderWidth: 2,
                    borderRadius: 5,
                    width: "85%",
                    alignSelf: "center",
                    marginTop: "7%",
                    paddingVertical: "3%",
                    paddingLeft: "5%"
                }}
            />
            <TextInput
                placeholder="EmailAddress"
                style={{
                    borderColor: Color.secondary,
                    borderWidth: 2,
                    borderRadius: 5,
                    width: "85%",
                    alignSelf: "center",
                    marginTop: "7%",
                    paddingVertical: "3%",
                    paddingLeft: "5%",
                }}
            />
            <TextInput
                placeholder="mobileNumber"
                style={{
                    borderColor: Color.secondary,
                    borderWidth: 2,
                    borderRadius: 5,
                    width: "85%",
                    alignSelf: "center",
                    marginTop: "7%",
                    paddingVertical: "3%",
                    paddingLeft: "5%"
                }}
            />
            <DropDownPicker
                items={[
                    { label: 'Select a VE Office', value: 'select VE office' },
                    { label: 'France', value: 'france' },
                ]}
                defaultValue={selectedValue}
                containerStyle={{
                    height: "7%",
                    width: "85%",
                    alignSelf: "center",
                    marginTop: "5%",
                    marginBottom: "5%",
                }}
                labelStyle={{
                    color: Color.secondary,
                }}
                style={{
                    backgroundColor: '#fff',
                    borderColor: `${Color.secondary}`,
                    borderWidth: 2,
                }}
                itemStyle={{
                    justifyContent: 'flex-start',
                    color: Color.primary,
                }}
                dropDownStyle={{
                    backgroundColor: '#fafafa',
                    color: Color.primary

                }}
                onChangeItem={() => setSelectedValue}
            />
            <View style={styles.textAreaContainer} >
                <TextInput
                    style={styles.textArea}
                    underlineColorAndroid="transparent"
                    placeholder="Your Message"
                    placeholderTextColor="grey"
                    numberOfLines={10}
                    multiline={true}
                />
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.SignupText}>Submit</Text>
            </TouchableOpacity>
            <View style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                paddingLeft: "2%",
                marginBottom: "10%",
                marginTop: "-5%",
                width: "90%",
                alignSelf: "center",
            }}>
                <Text style={{ color: `${Color.primary}`, fontSize: 13 }}>
                    By clicking on Submit, you acknowledge having read our
            </Text>
                <TouchableOpacity>
                    <Text style={{ color: `${Color.secondary}` }}> Privacy Policy</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%"
    },
    textAreaContainer: {
        borderColor: Color.secondary,
        borderWidth: 1,
        padding: 5,
        width: "85%",
        alignSelf: "center",
        borderRadius: 5
    },
    textArea: {
        height: 150,
        justifyContent: "flex-start",
    },
    button: {
        borderRadius: 50,
        backgroundColor: `${Color.primary}`,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 12,
        marginVertical: 22,
        marginBottom: "10%",
        width: "85%",
        alignSelf: "center"
    },
    SignupText: {
        color: `${Color.white}`,
        fontSize: 16
    }
})
export default ContactForm