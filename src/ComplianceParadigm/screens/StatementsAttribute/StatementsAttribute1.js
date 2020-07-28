import React from 'react';
import Color from '@Assets/Constant';
import { View, Text } from 'react-native';
import HeaderStack from '@ParadigmComponents/header/headerStack/HeaderStack';
import List from './List';
import styles from './StatementsAttribute.style';
const StatementsAttribute = () => {
    return (
        <View>
            <HeaderStack
                borderBottomWith={1}
                color={Color.primary} />
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
        </View>
    )
}
export default StatementsAttribute