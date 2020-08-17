import Color from '@Assets/Constant';
import { Platform } from 'react-native';
const styles = {
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingHorizontal: "7%",
        height: 80,
        alignItems: "center",
        borderBottomColor: `${Color.primary}20`,
        borderBottomWidth: 1,
        marginTop: Platform.OS === "android" ? "0%" : "5%"
    },
    logo: {
        justifyContent: "center",
        width: "80%",
        resizeMode: "contain",
        marginRight: "7%"
    }
}
export default styles