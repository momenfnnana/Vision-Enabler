import Color from '@Assets/Constant';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create(
    {
        opinion: {
            fontSize: 22,
            color: Color.white,
            fontFamily: "Altissimo_bold",
            textAlign: "center",
            marginTop: "7%"
        },
        opinionDescription: {
            color: Color.white,
            width: "80%",
            textAlign: "center",
            alignSelf: "center",
            fontFamily: "DINNextLTProRegular",
            marginTop: "7%",
            lineHeight: 20,
            fontSize: 14
        },
        downloadButton: {
            backgroundColor: Color.secondary,
            paddingVertical: "3%",
            paddingHorizontal: "5%",
            alignSelf: 'center',
            borderRadius: 50,
            marginVertical: "10%"
        },
        downloadButtonText: {
            color: Color.white,
            fontFamily: "DINNextLTProRegular",
            fontSize: 16
        },
        WantInterView: {
            color: Color.primary,
            fontSize: 20,
            fontFamily: "Altissimo_bold",
            marginTop: "10%",
            marginLeft: "7%",
            marginBottom: "3%",
            textTransform: "uppercase"
        },
        Input: {
            marginHorizontal: "8%",
            borderColor: Color.secondary,
            borderWidth: 2,
            marginVertical: "2%",
            padding: "3%",
            borderRadius: 5
        },
        PickerContainerStyle: {
            height: 60,
            width: "85%",
            alignSelf: "center",
        },
        PickerStyle: {
            backgroundColor: Color.white,
            borderColor: Color.secondary,
            borderWidth: 2,
        },
        PickerItemStyle: {
            justifyContent: 'flex-start',
        },
        dropDownStyle: {
            backgroundColor: '#fafafa',
        },
        textAreaContainer: {
            borderColor: Color.secondary,
            borderWidth: 1,
            padding: 5,
            width: "85%",
            alignSelf: "center",
            borderRadius: 5,
            marginTop: "2%"
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
        },
        privacyPolicy: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            paddingLeft: "2%",
            marginBottom: "10%",
            marginTop: "-5%",
            width: "90%",
            alignSelf: "center",
        }
    }
)
export default styles