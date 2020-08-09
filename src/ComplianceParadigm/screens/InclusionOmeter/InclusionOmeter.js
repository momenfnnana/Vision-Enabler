import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView
} from 'react-native';
import Color from '@Assets/Constant';
import HeaderStack from '@ParadigmComponents/header/headerStack/HeaderStack'
import styles from './InclusionOmeter.style'
import RNSpeedometer from 'react-native-speedometer';
import InclusionOmeterData from '@ParadigmFakeData/InclusionOmeter.Data'
import Footer from '@ParadigmComponents/Footer/Footer'
import Carousel from 'react-native-snap-carousel';
const InclusionOmeter = ({ navigation }) => {
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
            <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ height: "23%", marginTop: "20%" }}>
                {
                    InclusionOmeterData.map(i => {
                        return (
                            <View key={i.id}>
                                {/* <Swiper autoplay={true} key={i.id} showsButtons={true}>
                                    <View style={styles.slide3}>
                                        <Text style={styles.text}>And simple</Text>
                                    </View>
                                    <View style={styles.slide1}>
                                        <Text style={styles.text}>Hello Swiper</Text>
                                    </View>
                                    <View style={styles.slide2}>
                                        <Text style={styles.text}>Beautiful</Text>
                                    </View> */}
                                {/* <Carousel
                    data={InclusionOmeterData}
                    renderItem={(data) => <RenderItem i={data} />}
                    sliderWidth={100}
                    itemWidth={100}
                /> */}
                                <View key={i.id} style={[
                                    styles.View,
                                    { backgroundColor: i.backgroundColor }
                                ]}>
                                    <View style={styles.head}>
                                        <Text style={styles.headTitle}>{i.title}</Text>
                                        <Text style={styles.headRange}>{i.from}% - {i.to}%</Text>
                                    </View>
                                    <View style={styles.line} />
                                    <View style={styles.descriptionContainer}>
                                        <Text style={styles.description}>{i.description}</Text>
                                        <Text style={styles.description}>{i.completeDescription}</Text>
                                    </View>
                                </View>
                                {/* </Swiper> */}
                            </View>
                        )
                    })
                }
            </ScrollView>
            <Footer
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
export default InclusionOmeter