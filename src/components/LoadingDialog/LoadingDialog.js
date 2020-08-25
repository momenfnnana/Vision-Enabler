import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

const LoadingDialog = () => {
    return (
        <View style={styles.view} >
            <View style={styles.popup} >
                <ActivityIndicator size="large"/>
            </View>
        </View>
    )
}

export default LoadingDialog

const styles = StyleSheet.create({
    view:{
        zIndex: 999999,
        position:'absolute',
        top:0,
        right:0,
        left:0,
        bottom:0,
        backgroundColor:'#0008',
        justifyContent:'center',
        alignItems:'center'
    },
    popup:{
        backgroundColor:'#fff',
        padding: 20,
        borderRadius:10
    }
})
