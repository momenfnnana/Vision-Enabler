import Color from '@Assets/Constant'
import { StyleSheet } from 'react-native'
const styles = StyleSheet.create(
    {
        container: {
            marginTop: "10%",
            marginRight: "8%",
            width:"100%"
        },
        DropDownPickerContainer: {
            flexDirection: "row",
            marginRight: "28%"
        },
        PickerContainerStyle: {
            height: 40,
            width: 100
        },
        PickerStyle: {
            backgroundColor: Color.white,
            borderColor: Color.white,
            borderBottomColor: `${Color.black}70`,
        },
        PickerItemStyle: {
            justifyContent: 'flex-start',
        },
        dropDownStyle: {
            backgroundColor: '#fafafa',
        },
        PickerInput: {
            marginLeft: "100%"
        },
        privacyText: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            paddingLeft: "2%"
        },
        textPrimary: {
            color: `${Color.primary}`,
            fontSize: 13
        },
        textSecondary: {
            color: `${Color.secondary}`
        },
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
        },
        footer: {
            width: "100%",
            height:160
        }
    }
)
export default styles;