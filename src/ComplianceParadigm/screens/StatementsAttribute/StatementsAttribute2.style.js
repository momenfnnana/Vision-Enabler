// 
import Color from '@Assets/Constant';
import { StyleSheet } from 'react-native';
const styles2 = StyleSheet.create(
    {
        container: {
            flex: 1,
        },
        screenTitle: {
            fontSize: 22,
            color: Color.primary,
            marginTop: "7%",
            marginBottom: "5%",
            marginLeft: "7%",
            textTransform: "uppercase"
        },
        screenTitle2: {
            color: Color.secondary
        },
        card2PercentageWithImage: {
            flexDirection: "row",
            justifyContent: "space-between",
        },
        cardContainer: {
            marginVertical: "1%",
            backgroundColor: Color.white,
            shadowColor: Color.primary,
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.30,
            shadowRadius: 4.65,
            elevation: 4,
            marginHorizontal: "5%",
            borderRadius: 20,
            padding: "5%",
        },
        percentage2: {
            alignSelf: "center",
            color: Color.secondary,
        },
        description: {
            marginTop: "5%",
            color: Color.primary,
            width: "100%"
        },
        imgContainer: {
            backgroundColor: Color.secondary,
            width: 100,
            height: 100,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 30,
        },
        textContainer: {
            justifyContent: "center",
            marginLeft: "7%",
            marginRight: "7%",
            alignItems: "flex-end",
            width: "60%"
        },
        title: {
            fontSize: 18,
            color: Color.primary,
            display: "none"
        },
        percentage: {
            color: Color.secondary
        },
        cardContainer2: {
            flexDirection: "column",
            justifyContent: "space-between",
            // marginVertical: "3%",
            backgroundColor: Color.white,
            shadowColor: Color.primary,
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.30,
            shadowRadius: 4.65,
            elevation: 4,
            marginHorizontal: "5%",
            borderRadius: 20,
            padding: "5%"
        },
        ScrollView: {
            marginTop: "7%",
        }
    }
)
export default styles2