import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Persons from '@FakeData/Persons';
import styles from './Styles'
const PersonCard = ({ openPersonalScreen }) => {
    return (
        <ScrollView
            style={styles.fullContainer}
            horizontal
        >
            {
                Persons.map(i => {
                    return (
                        <View
                            style={styles.container}
                            key={i.id}
                        >
                            <TouchableOpacity
                                onPress={openPersonalScreen}
                            >
                                <View
                                    style={styles.backgroundCard}
                                />
                                <ImageBackground
                                    style={styles.backgroundImage}
                                    source={i.img}
                                >
                                    <View
                                        style={styles.details}
                                    >
                                        <Text
                                            style={styles.name}
                                        >{i.name}</Text>
                                        <Text
                                            style={styles.job}
                                        >{i.Job}</Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        </View>
                    )
                })
            }
        </ScrollView>
    )
}
export default PersonCard