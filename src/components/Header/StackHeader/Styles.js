import { Platform } from 'react-native';
const styles = {
    container: {
        alignItems: "flex-start",
        height: 80,
        justifyContent: "center",
        paddingHorizontal: "5%",
        marginTop: Platform.OS === "android" ? "0%" : "5%"
    },
    touchableOpacity: {
        height: 50,
        width: 50,
        justifyContent: "center",
        alignItems: 'center',
    }
}
export default styles