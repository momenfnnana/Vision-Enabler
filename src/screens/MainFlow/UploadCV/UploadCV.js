import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Color from '../../../../assets/Constant';
import { MaterialIcons } from '@expo/vector-icons';

const UploadCV = () => {
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
                        marginTop: "7%",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Ionicons name="md-person" size={30} color={Color.secondary} />
                </View>
                <Text
                    style={{
                        fontSize: 22,
                        color: Color.white,
                        fontFamily: "Altissimo",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        marginTop: "7%"
                    }}
                >upload <Text
                    style={{
                        color: Color.secondary
                    }}
                >cv</Text></Text>
                <Text
                    style={{
                        color: Color.white,
                        textAlign: "center",
                        marginTop: "7%",
                        width: "85%",
                        fontSize: 14
                    }}
                >if you interested in our work upload your CV file and we will contact you later</Text>
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
                    paddingLeft: "5%"
                }}
            />
            <TouchableOpacity
                style={{
                    backgroundColor: Color.white,
                    borderColor: Color.secondary,
                    borderStyle: 'dashed',
                    borderWidth: 2,
                    borderRadius: 10,
                    width: "85%",
                    alignSelf: "center",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "row",
                    padding: "3%",
                    marginTop: "5%"
                }}
            >
                <MaterialIcons
                    style={{
                        marginHorizontal: "1%"
                    }}
                    name="cloud-upload" size={24} color={Color.primary} />
                <Text
                    style={{
                        color: Color.primary,
                        fontSize: 16,
                        marginHorizontal: "1%"
                    }}
                >Upload CV</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.SignupText}>Send</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%"
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
export default UploadCV