import Color from '@Assets/Constant'

const styles = {
    container: {
        marginTop: "10%",
        marginRight: "8%",
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
    }
}
export default styles