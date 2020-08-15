// 
import Color from '@Assets/Constant';
import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        textTransform: "uppercase",
        color: Color.primary,
        marginVertical: "7%",
        marginHorizontal: "7%"
    },
    completeTitle: {
        color: Color.secondary
    },
    head: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: "5%",
    },
    headTitle: {
        color: Color.white,
        fontSize: 23
    },
    headRange: {
        color: Color.white,
        fontSize: 18
    },
    View: {
        borderRadius: 20,
        paddingHorizontal: 25,
        margin: 10,
        paddingVertical: 20,
        justifyContent: "center"
    },
    line: {
        borderBottomColor: `${Color.white}50`,
        borderBottomWidth: 1,
        width: "90%",
        alignSelf: "center",
        paddingTop: "5%"
    },
    descriptionContainer: {
        paddingVertical: "5%"
    },
    description: {
        fontSize: 16,
        color: Color.white,
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }
})
export default styles;