import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import HeaderStack from '@ParadigmComponents/header/headerStack/HeaderStack';
import Color from '@Assets/Constant';
import styles from './PerceptionQuestionnaire.style';
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import Footer from '@ParadigmComponents/Footer/Footer';
import { Ionicons } from '@expo/vector-icons';
const PerceptionQuestionnaire = () => {
    return (
        <View style={{ flex: 1, backgroundColor: Color.white }}>
            <HeaderStack
                borderBottomWith={1}
                color={Color.primary}
                goBack={() => navigation.goBack()}
            />
            <Text style={styles.title}>Perception Questionnaire</Text>
            <ScrollView style={{ flex: 1 }}>
                <Collapse style={styles.collapse}>
                    <CollapseHeader style={styles.collapseContainer}>
                        <View style={styles.collapseHeaderContainer}>
                            <View style={[styles.labelContainer, { backgroundColor: Color.primary }]}>
                                <Text style={styles.label}>Understanding Customers</Text>
                            </View>
                            <View style={styles.arrowContainer}>
                                <Ionicons name="ios-arrow-down" size={24} color={Color.black + 30} />
                            </View>
                        </View>
                    </CollapseHeader>
                    <CollapseBody style={styles.CollapseBody}>
                        <Collapse>
                            <CollapseHeader>
                                <ScrollView>
                                    <Text style={styles.detailsList}>Differentiated Offers</Text>
                                    <Text style={styles.detailsList}>Service Standards</Text>
                                    <Text style={styles.detailsList}>Accessibility</Text>
                                    <Text style={styles.detailsList}>Customer feedback</Text>
                                </ScrollView>
                            </CollapseHeader>
                        </Collapse>
                    </CollapseBody>
                </Collapse>
                <Collapse style={styles.collapse}>
                    <CollapseHeader style={styles.collapseContainer}>
                        <View style={styles.collapseHeaderContainer}>
                            <View style={[styles.labelContainer, { backgroundColor: Color.secondary }]}>
                                <Text style={styles.label}>Developing and Managing the Offer</Text>
                            </View>
                            <View style={styles.arrowContainer}>
                                <Ionicons name="ios-arrow-down" size={24} color={Color.black + 30} />
                            </View>
                        </View>
                    </CollapseHeader>
                    <CollapseBody style={styles.CollapseBody}>
                        <Collapse>
                            <CollapseHeader>
                                <ScrollView>
                                    <Text style={styles.detailsList}>Differentiated Offers</Text>
                                    <Text style={styles.detailsList}>Service Standards</Text>
                                    <Text style={styles.detailsList}>Accessibility</Text>
                                    <Text style={styles.detailsList}>Customer feedback</Text>
                                </ScrollView>
                            </CollapseHeader>
                        </Collapse>
                    </CollapseBody>
                </Collapse>
                <Collapse style={styles.collapse}>
                    <CollapseHeader style={styles.collapseContainer}>
                        <View style={styles.collapseHeaderContainer}>
                            <View style={[styles.labelContainer, { backgroundColor: "#F205CB" }]}>
                                <Text style={styles.label}>Delivering the Offer through People</Text>
                            </View>
                            <View style={styles.arrowContainer}>
                                <Ionicons name="ios-arrow-down" size={24} color={Color.black + 30} />
                            </View>
                        </View>
                    </CollapseHeader>
                    <CollapseBody style={styles.CollapseBody}>
                        <Collapse>
                            <CollapseHeader>
                                <ScrollView>
                                    <Text style={styles.detailsList}>Differentiated Offers</Text>
                                    <Text style={styles.detailsList}>Service Standards</Text>
                                    <Text style={styles.detailsList}>Accessibility</Text>
                                    <Text style={styles.detailsList}>Customer feedback</Text>
                                </ScrollView>
                            </CollapseHeader>
                        </Collapse>
                    </CollapseBody>
                </Collapse>
                <Collapse style={styles.collapse}>
                    <CollapseHeader style={styles.collapseContainer}>
                        <View style={styles.collapseHeaderContainer}>
                            <View style={[styles.labelContainer, { backgroundColor: "#F23827" }]}>
                                <Text style={styles.label}>Managing Dissatisfaction</Text>
                            </View>
                            <View style={styles.arrowContainer}>
                                <Ionicons name="ios-arrow-down" size={24} color={Color.black + 30} />
                            </View>
                        </View>
                    </CollapseHeader>
                    <CollapseBody style={styles.CollapseBody}>
                        <Collapse>
                            <CollapseHeader>
                                <ScrollView>
                                    <Text style={styles.detailsList}>Differentiated Offers</Text>
                                    <Text style={styles.detailsList}>Service Standards</Text>
                                    <Text style={styles.detailsList}>Accessibility</Text>
                                    <Text style={styles.detailsList}>Customer feedback</Text>
                                </ScrollView>
                            </CollapseHeader>
                        </Collapse>
                    </CollapseBody>
                </Collapse>
                <Collapse style={styles.collapse}>
                    <CollapseHeader style={styles.collapseContainer}>
                        <View style={styles.collapseHeaderContainer}>
                            <View style={[styles.labelContainer, { backgroundColor: "#F2CB05" }]}>
                                <Text style={styles.label}>Measuring Customer Satisfaction</Text>
                            </View>
                            <View style={styles.arrowContainer}>
                                <Ionicons name="ios-arrow-down" size={24} color={Color.black + 30} />
                            </View>
                        </View>
                    </CollapseHeader>
                    <CollapseBody style={styles.CollapseBody}>
                        <Collapse>
                            <CollapseHeader>
                                <ScrollView>
                                    <Text style={styles.detailsList}>Differentiated Offers</Text>
                                    <Text style={styles.detailsList}>Service Standards</Text>
                                    <Text style={styles.detailsList}>Accessibility</Text>
                                    <Text style={styles.detailsList}>Customer feedback</Text>
                                </ScrollView>
                            </CollapseHeader>
                        </Collapse>
                    </CollapseBody>
                </Collapse>
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
export default PerceptionQuestionnaire;