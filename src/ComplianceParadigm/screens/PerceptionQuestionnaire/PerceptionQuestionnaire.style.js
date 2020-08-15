import Color from '@Assets/Constant';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    title: {
        color: Color.primary,
        fontSize: 22,
        margin: "5%"
    },
    collapseContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    collapseHeaderContainer: {
        alignItems: 'center',
        width: "90%",
        backgroundColor: Color.white,
        shadowColor: Color.primary,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        borderRadius: 20,
        marginBottom: "1%"
    },
    label: {
        fontSize: 18,
        color: Color.white,
        fontFamily: "Altissimo",
        paddingVertical: "10%",
    },
    labelContainer: {
        width: "100%",
        alignItems: 'center',
        borderRadius: 20,
        justifyContent: "center",
    },
    arrowContainer: {
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: "2%",
    },
    CollapseBody: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: Color.white,
        marginBottom: "5%",
        shadowColor: Color.primary,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
        width: "90%",
        paddingVertical: "3%",
        paddingHorizontal: "3%",
        alignSelf: "center",
        borderRadius: 15,
    },
    detailsList: {
        color: "#33333E",
        fontSize: 14,
        marginVertical: "1%",
        paddingHorizontal: "30%",
        paddingVertical: "3%",
        borderRadius: 10,
        textAlign: 'center',
        backgroundColor: `${Color.black}10`
    },
    collapse: {
        marginVertical: "3%"
    }
})
export default styles;