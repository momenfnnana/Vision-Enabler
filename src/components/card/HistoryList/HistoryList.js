import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import Dash from 'react-native-dash';
import OurHistory from '@FakeData/OurHistory';
import Color from '@Assets/Constant';
import styles from './Styles';
import { getHistoryEvents } from "@Services/MainFlow/AboutUsScreen";
import LoadingDialog from '@Components/LoadingDialog/LoadingDialog';

const Card = () => {
    const [HistoryEvents, setHistoryEvents] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async function () {
            try {
                setIsLoading(true);
                const historyEvents = await getHistoryEvents();
                console.log("asd", historyEvents.data);
                setHistoryEvents(historyEvents.data);
                setIsLoading(false);
            } catch (e) {
                setIsLoading(false);
                alert("We got an problem!");
            }
        })();
    }, []);
    return (
        <>
            {isLoading ? <LoadingDialog />:(
        <View>
            {
                HistoryEvents.map(i => {
                    return (
                        <View key={i.year} style={styles.container}>
                            <View style={styles.bigCircle}>
                                <View style={styles.smallCircle}>
                                    <Text style={styles.year}>{i.year}</Text>
                                </View>
                            </View>
                            <Dash
                                style={styles.dash}
                                dashGap={5}
                                dashLength={15}
                                dashColor={`${Color.secondary}50`} />
                            {
                                i.times.map(item => {
                                    return (
                                        <View
                                            key={item.id}
                                            style={styles.card}
                                        >
                                            <View style={styles.cardContainer}>
                                                <View
                                                    style={styles.imageContainer}
                                                >
                                                    <Image
                                                        source={item.img}
                                                    />
                                                </View>
                                                <Text
                                                    style={styles.title}
                                                >{item.title}</Text>
                                                <Text
                                                    style={styles.description}
                                                >{item.description}</Text>
                                            </View>
                                        </View>
                                    )
                                })
                            }
                        </View>
                    )
                })
            }
        </View>
            )}
        </>
    )
}
export default Card