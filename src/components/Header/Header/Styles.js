import Color from '@Assets/Constant';
import { Platform } from 'react-native';
const styles = {
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingHorizontal: "7%",
        height: Platform.OS === "android" ? 80 : 105,
        alignItems: "center",
        borderBottomColor: `${Color.primary}20`,
        borderBottomWidth: 1,
        marginTop: Platform.OS === "android" ? "0%" : "5%"
    },
    logo: {
        justifyContent: "center",
        width: "80%",
        resizeMode: "contain",
        marginRight: Platform.OS === "android" ? "14%" : "11%"
    },
    lefyIcon: {
        marginLeft: Platform.OS === "android" ? "0%" : "6%",
        marginRight: Platform.OS === "android" ? "10%" : "0%"
    }
}
export default styles