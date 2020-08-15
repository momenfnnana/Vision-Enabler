// 
import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    ScrollView,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import Color from '@Assets/Constant';
import HeaderStack from '@ParadigmComponents/header/headerStack/HeaderStack'
import styles from './InclusionOmeter.style'
import RNSpeedometer from 'react-native-speedometer';
import InclusionOmeterData from '@ParadigmFakeData/InclusionOmeter.Data'
import Footer from '@ParadigmComponents/Footer/Footer'
import Carousel from 'react-native-anchor-carousel';

const InclusionOmeter = ({ navigation }) => {
    const width = Dimensions.get('window').width
    const carouselRef = useRef(null);
    const renderItem = ({ item, index }) => {
        const { id, title, from, to, description, completeDescription, backgroundColor } = item;
        return (
            <TouchableOpacity
                style={[
                    styles.View,
                    { backgroundColor: backgroundColor }
                ]}
                key={id}
                onPress={() => { carouselRef.current.scrollToIndex(index); }}>
                <View style={styles.head}>
                    <Text style={styles.headTitle}>{title}</Text>
                    <Text style={styles.headRange}>{from}% - {to}%</Text>
                </View>
                <View style={styles.line} />
                <View style={styles.descriptionContainer}>
                    <Text style={styles.description}>{description}</Text>
                    <Text style={styles.description}>{completeDescription}</Text>
                </View>
            </TouchableOpacity>
        )
    };
    const RenderItem = ({ i }) => {
        console.log(i);
        return (
            <View style={[
                styles.View,
                { backgroundColor: i.item.backgroundColor }
            ]}>
                <View style={styles.head}>
                    <Text style={styles.headTitle}>{i.item.title}</Text>
                    <Text style={styles.headRange}>{i.item.from}% - {i.item.to}%</Text>
                </View>
                <View style={styles.line} />
                <View style={styles.descriptionContainer}>
                    <Text style={styles.description}>{i.item.description}</Text>
                    <Text style={styles.description}>{i.item.completeDescription}</Text>
                </View>
            </View>
        )
    }
    const [val, setVal] = useState(0);
    const [lables, setLabels] = useState(InclusionOmeterData)
    const onChange = (input) => {
        setVal(input);
    }
    return (
        <View style={{ flex: 1, backgroundColor: Color.white }}>
            <HeaderStack
                color={Color.primary}
                borderBottomWith={1}
                backgroundColor={Color.white}
                goBack={() => navigation.goBack()}
            />
            <Text style={styles.title}>Inclusion <Text style={styles.completeTitle}>ometer</Text></Text>
            <RNSpeedometer
                labelNoteStyle={{
                    display: "none"
                }}
                value={20}
                size={330}
                wrapperStyle={{ marginTop: "13%" }}
                labelStyle={{ display: "none" }}
                labels={
                    InclusionOmeterData.map(i => {
                        return (
                            {
                                name: i.title,
                                labelColor: i.backgroundColor,
                                activeBarColor: i.backgroundColor
                            }
                        )
                    })
                }
                innerCircleStyle={{
                    backgroundColor: "#f7f7f7"
                }}
                easeDuration={500}
            />
            <Carousel
                data={InclusionOmeterData}
                renderItem={renderItem}
                itemWidth={width - 120}
                containerWidth={width}
                separatorWidth={-20}
                ref={carouselRef}
            />
            <Footer
                next={() => navigation.navigate("PerceptionReportFormScreen")}
                goBack={() => navigation.goBack()}
                backgroundColor1={Color.secondary}
                backgroundColor2={Color.secondary}
                backgroundColor3={Color.secondary}
                backgroundColor4={Color.secondary}
                backgroundColor5={Color.secondary}
                backgroundColor6={Color.secondary}
                backgroundColor7={Color.primary}
                height1={5}
                width1={5}
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
                height7={10}
                width7={10}
            />
        </View>
    )
}
export default InclusionOmeter;