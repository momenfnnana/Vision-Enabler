import React from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';
import styles from './Styles'
const Header = ({ OpenDrawer }) => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.lefyIcon} onPress={OpenDrawer}>
                <Image source={require('@Assets/images/LeftIcon.png')}/>
            </TouchableOpacity>
            <Image
                style={styles.logo}
                source={require('@Assets/images/AppLogo.png')} />
        </SafeAreaView>
    )
}
export default Header