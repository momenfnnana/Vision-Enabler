import Color from '@Assets/Constant';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    image: {
        position: "absolute",
        top: 0,
        right: 0,
        resizeMode: "contain"
    },
    listContainer: {
        backgroundColor: Color.primary,
        height: 30,
        width: 30,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: "2%",
        marginLeft: "5%"
    }
})
export default styles