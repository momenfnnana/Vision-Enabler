import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import StackHeader from '../../../components/Header/StackHeader'
import Color from '../../../../assets/Constant'
import SectionTitle from '../../../components/SectionTitle/SectionTitle'
import SectionDescription from '../../../components/SectionTitle/SectionDescription'
import ApproachCard from '../../../components/card/ApprochCard'
import ApprochStep from '../../../components/card/ApprochStep'
const Help = () => {
    return (
        <View>
            <StackHeader color={Color.primary} />
            <ScrollView style={styles.container}>
                <SectionTitle
                    title1="How"
                    title2="we can help"
                />
                <SectionDescription
                    text="Vision Enabler is a diversity-consulting firm, and a leading advisor on diversity-powered performance."
                />
                <SectionTitle
                    title1="Our"
                    title2="Mission"
                />
                <SectionDescription
                    text="Our mission is to help global organisations improve their performance and organisational capability by taking advantage of their diverse workforce."
                />
                <SectionTitle
                    title1="What"
                    title2="We do"
                />
                <SectionDescription
                    text="We help organisations turn the common understanding of social diversity into a business advantage, improving performance by designing inclusive, highly effective diversity strategies."
                />
                <SectionDescription
                    text="We reveal and unlock diversity's potential, delivering ground-breaking insights about its economical potential. We provide a platform and framework within organisations to improve financial performance through the capabilities and talent base of your diverse workforce."
                />
                <SectionDescription
                    text="We are experts in the field of diversity, working with some of the most forward thinking companies in France (CAC 40) and in the UK (FTSE 100)."
                />
                <View style={{ backgroundColor: "#F9FAFE", marginTop: "15%" }}>
                    <SectionTitle
                        title1="Our"
                        title2="Approach"
                    />
                    <SectionDescription
                        text="At Vision Enabler we are committed to a few simple principles:"
                    />
                    <ApproachCard />
                </View>
                <SectionTitle
                    title1="Our"
                    title2="Methodology"
                />
                <SectionDescription
                    text="We have developed an insightful frame of reference for all strategic and operational decisions to help our clients put their vision into action. These decisions form the basis of a plan of action - starting with your key stakeholders and ultimately impacting your entire organisation."
                />
                <SectionDescription
                    text="Diversity is a tremendously complex issue and because all organisations have different needs, we help you to define your diversity themes and select processes relevant only to your organisation. This allows us to design tailored working programmes and offer bespoke, end-to-end business solutions."
                />
                <SectionTitle
                    title1="3 Step"
                    title2="Approach"
                />
                <SectionDescription
                    text="Our three step process helps you:"
                />
                <ApprochStep />
                <SectionTitle
                    title1="The"
                    title2="Diversity Matrix"
                />
                <SectionDescription
                    text="The Diversity matrix is simple, yet immensely powerful. It will help you to define your business priorities by connecting the diversity themes - disability, gender, ethnicity, age, with your HR Process - recruitment, training, learning and development."
                />
                <SectionDescription
                    text="Our tailor made matrix can be applied to any business theme or process, and is relevant to any organisation, anywhere in the world."
                />
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%"
    }
})
export default Help