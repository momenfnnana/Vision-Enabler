import React from 'react';
import {
    ScrollView,
    View,
    Text,
    Image
} from 'react-native';
import styles from './Table.style'
import Color from '@Assets/Constant';

const Table = () => {
    return (
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
    )
}
export default Table;