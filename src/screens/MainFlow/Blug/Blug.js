import React from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Header from '@Components/Header/Header/Header';
import BlugData from '@FakeData/BlugData';
import { AntDesign } from '@expo/vector-icons';
import Color from '@Assets/Constant';
import styles from './Blug.style';

const Blug = ({ navigation }) => {
    return (
        <View
            style={styles.container}
        >
            <Header OpenDrawer={() => navigation.openDrawer()} />
            <ScrollView>
                {
                    BlugData.map(i => {
                        return (
                            <View
                                style={styles.CardContainer}
                                key={i.id}
                            >
                                <Image
                                    style={styles.img}
                                    source={i.img}
                                />
                                <TouchableOpacity
                                    style={styles.love}
                                >
                                    <AntDesign name="hearto" size={20} color={Color.secondary} />
                                    <Text
                                        style={styles.likeNumber}
                                    >{i.likeNumber}</Text>
                                </TouchableOpacity>
                                <View
                                    style={styles.cardDetails}
                                >
                                    <Text
                                        style={styles.type}
                                    >{i.type}</Text>
                                    <Text
                                        style={styles.title}
                                    >{i.title}</Text>
                                    <Text
                                        style={styles.description}
                                    >{i.description}</Text>
                                    <View
                                        style={styles.blugerDetailsContainer}
                                    >
                                        <Text
                                            style={styles.blugerName}
                                        >{i.blugerName} </Text>
                                        <View
                                            style={styles.line}
                                        />
                                        <Text
                                            style={styles.date}
                                        > {i.date}</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    }
                    )
                }
            </ScrollView>
        </View>
    )
}
export default Blug