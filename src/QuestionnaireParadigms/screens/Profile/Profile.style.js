import { StyleSheet } from 'react-native';
import Color from '@Assets/Constant';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.white
    },
    screenTitle: {
        color: Color.white,
        fontSize: 16,
        alignSelf: "center",
        marginTop: "20%",
    },
    ProfileImage: {
        height: 100,
        width: 100,
        borderRadius: 50,
        alignSelf: "center",
        marginTop: "8%"
    },
    personalName: {
        fontSize: 22,
        color: Color.white,
        fontFamily: "Altissimo_bold",
        alignSelf: "center",
        marginTop: "5%"
    },
    job: {
        color: Color.secondary,
        alignSelf: "center",
        marginTop: "2%",
        marginBottom: "28%"
    },
    firstCardContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginVertical: "5%",
        padding: "5%",
        borderRadius: 10,
        backgroundColor: Color.white,
        shadowColor: Color.primary,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 4,
        width: "90%",
        justifyContent: 'space-around'
    },
    firstCard: {
        color: Color.primary
    },
    number: {
        color: Color.black + 90,
        marginLeft: "3%"
    },
    forthCardContainer: {
        alignSelf: "center",
        marginVertical: "5%",
        padding: "5%",
        borderRadius: 10,
        backgroundColor: Color.white,
        shadowColor: Color.primary,
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 4,
        width: "90%",
        justifyContent: 'space-around',
        alignItems: "center"
    },
    lastPayment: {
        fontSize: 12,
        color: Color.black + 90
    },
    SeeAll: {
        color: Color.primary
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
export default styles;