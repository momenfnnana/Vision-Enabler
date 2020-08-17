import Color from '@Assets/Constant';
import { Platform } from 'react-native';
const styles = {
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: "5%",
        paddingVertical: "5%",
        borderBottomColor: `${Color.primary}20`,
        marginTop: Platform.OS === "android" ? "0%" : "5%"
    },
}
export default styles