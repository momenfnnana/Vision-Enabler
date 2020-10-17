import Color from '@Assets/Constant';
import { StyleSheet } from 'react-native'
const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            width: "100%",
            backgroundColor: Color.white
        },
        title1: {
            color: `${Color.secondary}`,
            fontSize: 16,
            fontFamily: "Altissimo_bold",
            alignSelf: "flex-start",
            marginLeft:"7%"
        },
        title2: {
            color: `${Color.primary}`,
            fontSize: 30,
            fontFamily: "Altissimo",
            fontWeight: "bold",
            alignSelf: "flex-start",
            marginLeft: "7%"            
        },
        headSection: {
            flex: 1,
            marginTop: "5%"
        },
    }
)
export default styles;