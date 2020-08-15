// 
import React from 'react';
import Color from '@Assets/Constant';
import { View, Text, ScrollView } from 'react-native';
import HeaderStack from '@ParadigmComponents/header/headerStack/HeaderStack';
import List from './List';
import styles from './StatementsAttribute.style';
import Footer from '@ParadigmComponents/Footer/Footer';
const StatementsAttribute = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: Color.white }}>
            <HeaderStack
                borderBottomWith={1}
                color={Color.primary}
                goBack={() => navigation.goBack()}
                backgroundColor={Color.white}
            />
            <ScrollView style={{ flex: 1, backgroundColor: Color.white }}>
                <Text style={styles.screenTitle}>
                    Statements
                <Text style={styles.screenTitle2}>
                        Attributes
                </Text>
                </Text>
                <List />
            </ScrollView>
            <Footer
                goBack={() => navigation.goBack()}
                next={() => navigation.navigate('StatementsAttribute2')}
                backgroundColor1={Color.primary}
                backgroundColor2={Color.secondary}
                backgroundColor3={Color.secondary}
                backgroundColor4={Color.secondary}
                backgroundColor5={Color.secondary}
                backgroundColor6={Color.secondary}
                backgroundColor7={Color.secondary}
                height1={10}
                width1={10}
                height2={5}
                width2={5}
                height3={5}
                width3={5}
                height4={5}
                width4={5}
                height5={5}
                width5={5}
                height6={5}
                width6={5}
                height7={5}
                width7={5}
            />
        </View>
    )
}
export default StatementsAttribute;