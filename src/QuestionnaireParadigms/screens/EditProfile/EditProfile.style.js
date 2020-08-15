import Color from '@Assets/Constant';
import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    image: {
        position: "absolute",
        top: 0,
        right: 0,
        resizeMode: "contain"
    },
    profileImage: {
        height: 100,
        width: 100,
        borderRadius: 60,
        alignSelf: "center",
        marginTop: "10%"
    },
    changePic: {
        color: Color.primary,
        fontFamily: "Altissimo_bold",
        alignSelf: "center",
        marginTop: "5%"
    },
})
export default styles