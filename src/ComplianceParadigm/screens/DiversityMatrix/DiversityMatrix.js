import React from 'react';
import {
    View,
    Text,
    ScrollView
} from 'react-native';
import HeaderStack from '@ParadigmComponents/header/headerStack/HeaderStack';
import Table from '@ParadigmComponents/Table/Table';
import Color from '@Assets/Constant';
import styles from './DiversityMatrix.style';
import Footer from '@ParadigmComponents/Footer/Footer';
const DiversityMatrix = ({ navigation }) => {
    return (
        <View style={[styles.container, { backgroundColor: Color.white }]}>
            <HeaderStack
                borderBottomWith={1}
                color={Color.primary}
                goBack={() => navigation.goBack()}
            />
            <ScrollView>
                <ScrollView>
                    <Text
                        style={styles.compalianceMatrix}
                    >Compliance Matrix ®</Text>
                    <Text
                        style={styles.awareness}
                    >Awareness & Unconscious Bias</Text>
                    <View style={styles.dotsContainer}>
                        <View style={styles.greatContainer}>
                            <View style={styles.greatDot} />
                            <Text style={styles.greatText}>Great</Text>
                        </View>
                        <View style={styles.avarageContainer}>
                            <View style={styles.avarageDot} />
                            <Text style={styles.avarageText}>Average</Text>
                        </View>
                        <View style={styles.poorContainer}>
                            <View style={styles.poorDot} />
                            <Text style={styles.poorText}>Poor</Text>
                        </View>
                    </View>
                    <Table />
                </ScrollView>
            </ScrollView>
            <View style={styles.footerContainer}>
                <Text
                    style={styles.footerTitle}
                >1. Policy & Latest Legislation</Text>
                <Text
                    style={styles.footerDescription}
                >(laws, Acts & Regulations, agreements…)</Text>
                <View style={{ position: "absolute", bottom: 0, right: 0, left: 0 }}>
                    <Footer
                        goBack={() => navigation.goBack()}
                        next={() => navigation.navigate('Questionnaire')}
                        backgroundColor1={Color.secondary}
                        backgroundColor2={Color.secondary}
                        backgroundColor3={Color.primary}
                        backgroundColor4={Color.secondary}
                        backgroundColor5={Color.secondary}
                        backgroundColor6={Color.secondary}
                        backgroundColor7={Color.secondary}
                        height1={5}
                        width1={5}
                        height2={5}
                        width2={5}
                        height3={10}
                        width3={10}
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
            </View>
        </View >
    )
}
export default DiversityMatrix;