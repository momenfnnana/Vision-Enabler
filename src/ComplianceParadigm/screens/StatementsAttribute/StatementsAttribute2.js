import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import HeaderStack from '@ParadigmComponents/header/headerStack/HeaderStack';
import Color from '@Assets/Constant';
import List from './List2';
import styles from './StatementsAttribute.style';
import Footer from '@ParadigmComponents/Footer/Footer';
const StatementsAttribute2 = () => {
    return (
        <View
            style={styles.container}>
            <HeaderStack
                borderBottomWith={1}
                color={Color.primary}
            />
            <ScrollView>
                <Text
                    style={styles.screenTitle}
                >
                    Statements <Text
                        style={styles.screenTitle2}
                    >
                        Attributes
                </Text>
                </Text>
                <List />
                <Footer />
            </ScrollView>
        </View>
    )
}
export default StatementsAttribute2;