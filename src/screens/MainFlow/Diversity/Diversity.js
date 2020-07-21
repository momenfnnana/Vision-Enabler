import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import StackHeader from '../../../components/Header/StackHeader'
import Color from '../../../../assets/Constant'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import SectionDescription from '../../../components/SectionTitle/SectionDescription'
const Diversity = () => {
    return (
        <ScrollView style={styles.container}>
            <StackHeader color={Color.primary} />
            <Image style={styles.image} source={require('../../../../assets/images/DiversityHeaderCorner.png')} />
            <View style={{ marginTop: "20%" }}>
                <SectionTitle
                    title1="WHAT"
                    title2="DIVERSITY IS"
                />
                <SectionDescription
                    text="Simply defined, diversity is the state of being diverse or different."
                />
                <SectionDescription
                    text="Human diversity exists where there are differences in human characteristics such as gender; age; ethnicity and race or nationality; religion; social status and degree; sexual orientation; disability and health; or any other differentiating physical characteristics."
                />
                <SectionDescription
                    text="Often discussed as a political or sociological concept, diversity is a complex issue that presents a significant challenge to businesses around the world, whatever their size."
                />
                <SectionDescription
                    text="It’s all about inclusion – and inclusion comes from feeling part of the majority group, regardless of where you are in the organisational structure of the company."
                />
                <SectionDescription
                    text="Unfortunately diversity is still seen by most as a threat. But it needn’t be. At Vision Enabler we see diversity and inclusion as a powerful opportunity, to be harnessed and maximised through an efficiently designed diversity strategy."
                />
                <TouchableOpacity>
                    <Image source={require('../../../../assets/images/Diversity.png')} />
                </TouchableOpacity>
                <SectionTitle
                    title1="Diversity"
                    title2="Strategy"
                />
                <SectionDescription
                    text="The power of a diversity and inclusion strategy."
                />
                <SectionDescription
                    text="A successful diversity strategy creates an environment where all members of the organisation can work to their full potential, regardless of their human characteristics."
                />
                <SectionDescription
                    text="It is therefore all about diversity and inclusion, performance and leadership."
                />
                <SectionDescription
                    text="An efficient and inclusive diversity strategy will help you drive better business performance through the talent base of your organisation, enabling you to maximise workforce recruitment, integration, innovation, potential and creativity."
                />
                <SectionDescription
                    text="A diverse workforce is just the first step, it has to be followed by the creation of an inclusive work environment."
                />
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%"
    },
    image: {
        position: "absolute",
        top: 0,
        right: 0,
        resizeMode: "contain"
    }
})
export default Diversity