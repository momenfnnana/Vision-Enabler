import React from 'react';
import {
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import styles from './Styles'
const Header = ({ OpenDrawer }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={OpenDrawer}
            >
                <Image source={require('@Assets/images/LeftIcon.png')}
                />
            </TouchableOpacity>
            <Image
                style={styles.logo}
                source={require('@Assets/images/AppLogo.png')} />
        </View>
    )
}
export default Header