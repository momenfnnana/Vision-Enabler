import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import HeaderStack from '@ParadigmComponents/header/headerStack/HeaderStack';
import Color from '@Assets/Constant';
import List from './List2';
import styles from './StatementsAttribute.style';
import Footer from '@ParadigmComponents/Footer/Footer';
const StatementsAttribute2 = ({ navigation }) => {
    return (
        <View
            style={[
                styles.container,
                { backgroundColor: Color.white }
            ]}
        >
            <HeaderStack
                borderBottomWith={1}
                color={Color.primary}
                goBack={() => navigation.goBack()}
            />
            <ScrollView>
                <Text
                    style={styles.screenTitle}
                >
                    Statements <Text style={styles.screenTitle2}>
                        Attributes
                </Text>
                </Text>
                <List />
            </ScrollView>
            <Footer
                goBack={() => navigation.goBack()}
                next={() => navigation.navigate("DiversityMatrix")}
                backgroundColor1={Color.secondary}
                backgroundColor2={Color.primary}
                backgroundColor3={Color.secondary}
                backgroundColor4={Color.secondary}
                backgroundColor5={Color.secondary}
                backgroundColor6={Color.secondary}
                backgroundColor7={Color.secondary}
                height1={5}
                width1={5}
                height2={10}
                width2={10}
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
export default StatementsAttribute2;