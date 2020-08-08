import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView
} from 'react-native';
import HeaderStack from '../../components/header/headerStack/HeaderStack';
import Color from '@Assets/Constant';
import styles from './DiversityMatrix.style';
const DiversityMatrix = () => {
    return (
        <View
            style={styles.container}
        >
            <ScrollView>
                <HeaderStack
                    borderBottomWith={1}
                    color={Color.primary}
                />
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
                <ScrollView horizontal>
                    <View style={{ flexDirection: "row" }}>
                        <View style={styles.leftColumn}>
                            <View style={styles.rowNumCol1}>
                                <Text style={styles.rowNum1}>1</Text>
                            </View>
                            <View style={styles.rowNumCol}>
                                <Text style={styles.rowNum}>2</Text>
                            </View>
                            <View style={styles.rowNumCol}>
                                <Text style={styles.rowNum}>3</Text>
                            </View>
                            <View style={styles.rowNumCol}>
                                <Text style={styles.rowNum}>4</Text>
                            </View>
                            <View style={styles.rowNumCol}>
                                <Text style={styles.rowNum}>5</Text>
                            </View>
                        </View>
                        <View>
                            <View style={styles.topRow}>
                                <Image
                                    style={styles.Image}
                                    source={require("@Assets/images/tableTitle1.png")}
                                />
                                <Image
                                    style={styles.Image}
                                    source={require("@Assets/images/tableTitle2.png")}
                                />
                                <Image
                                    style={styles.Image}
                                    source={require("@Assets/images/tableTitle3.png")}
                                />
                                <Image
                                    style={styles.Image}
                                    source={require("@Assets/images/tableTitle4.png")}
                                />
                                <Image
                                    style={styles.Image}
                                    source={require("@Assets/images/tableTitle5.png")}
                                />
                                <Image
                                    style={styles.Image}
                                    source={require("@Assets/images/tableTitle6.png")}
                                />
                                <Image
                                    style={styles.Image}
                                    source={require("@Assets/images/tableTitle7.png")}
                                />
                                <Image
                                    style={styles.Image}
                                    source={require("@Assets/images/tableTitle8.png")}
                                />
                            </View>
                            <View style={styles.table}>
                                <View>
                                    <View style={styles.circle}>
                                        <View style={styles.subCircle} />
                                    </View>
                                    <View style={styles.circle}>
                                        <View style={styles.subCircle} />
                                    </View>
                                    <View style={styles.circle}>
                                        <View style={styles.subCircle} />
                                    </View>
                                    <View style={styles.circle}>
                                        <View style={styles.subCircle} />
                                    </View>
                                    <View style={styles.circle}>
                                        <View style={styles.subCircle} />
                                    </View>
                                </View>
                                <View>
                                    <View style={styles.circle}>
                                        <View style={styles.subCircle} />
                                    </View>
                                    <View style={styles.circle}>
                                        <View style={styles.subCircle} />
                                    </View>
                                    <View style={styles.circle}>
                                        <View style={styles.subCircle} />
                                    </View>
                                    <View style={styles.circle}>
                                        <View style={styles.subCircle} />
                                    </View>
                                    <View style={styles.circle}>
                                        <View style={styles.subCircle} />
                                    </View>
                                </View>
                                <View>
                                    <View style={styles.circle}>
                                        <View style={styles.subCircle} />
                                    </View>
                                    <View style={styles.circle}>
                                        <View style={styles.subCircle} />
                                    </View>
                                    <View style={styles.circle}>
                                        <View style={styles.subCircle} />
                                    </View>
                                    <View style={styles.circle}>
                                        <View style={styles.subCircle} />
                                    </View>
                                    <View style={styles.circle}>
                                        <View style={styles.subCircle} />
                                    </View>
                                </View>
                                <View>
                                    <View style={styles.circle}>
                                        <View style={styles.subCircle} />
                                    </View>
                                    <View style={styles.circle}>
                                        <View style={styles.subCircle} />
                                    </View>
                                    <View style={styles.circle}>
                                        <View style={styles.subCircle} />
                                    </View>
                                    <View style={styles.circle}>
                                        <View style={styles.subCircle} />
                                    </View>
                                    <View style={styles.circle}>
                                        <View style={styles.subCircle} />
                                    </View>
                                </View>
                                <View>
                                    <View style={styles.circle}>
                                        <View style={styles.subCircle} />
                                    </View>
                                    <View style={styles.circle}>
                                        <View style={styles.subCircle} />
                                    </View>
                                    <View style={styles.circle}>
                                        <View style={styles.subCircle} />
                                    </View>
                                    <View style={styles.circle}>
                                        <View style={styles.subCircle} />
                                    </View>
                                    <View style={styles.circle}>
                                        <View style={styles.subCircle} />
                                    </View>
                                </View>
                                <View>
                                    <View style={styles.circle}>
                                        <View style={styles.subCircle} />
                                    </View>
                                    <View style={styles.circle}>
                                        <View style={styles.subCircle} />
                                    </View>
                                    <View style={styles.circle}>
                                        <View style={styles.subCircle} />
                                    </View>
                                    <View style={styles.circle}>
                                        <View style={styles.subCircle} />
                                    </View>
                                    <View style={styles.circle}>
                                        <View style={styles.subCircle} />
                                    </View>
                                </View>
                                <View>
                                    <View style={styles.circle}>
                                        <View style={styles.subCircle} />
                                    </View>
                                    <View style={styles.circle}>
                                        <View style={styles.subCircle} />
                                    </View>
                                    <View style={styles.circle}>
                                        <View style={styles.subCircle} />
                                    </View>
                                    <View style={styles.circle}>
                                        <View style={styles.subCircle} />
                                    </View>
                                    <View style={styles.circle}>
                                        <View style={styles.subCircle} />
                                    </View>
                                </View>
                                <View>
                                    <View style={styles.circle}>
                                        <View style={styles.subCircle} />
                                    </View>
                                    <View style={styles.circle}>
                                        <View style={styles.subCircle} />
                                    </View>
                                    <View style={styles.circle}>
                                        <View style={styles.subCircle} />
                                    </View>
                                    <View style={styles.circle}>
                                        <View style={styles.subCircle} />
                                    </View>
                                    <View style={styles.circle}>
                                        <View style={styles.subCircle} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </ScrollView>
            <View
                style={styles.footerContainer}
            >
                <Text
                    style={styles.footerTitle}
                >1. Policy & Latest Legislation</Text>
                <Text
                    style={styles.footerDescription}
                >(laws, Acts & Regulations, agreements…)</Text>
            </View>
        </View >
    )
}
export default DiversityMatrix;