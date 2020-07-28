import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity,
    Button
} from 'react-native';
import StackHeader from '@Components/Header/StackHeader/StackHeader';
import Color from '@Assets/Constant';
import SectionTitle from '@Components/SectionTitle/SectionTitle/SectionTitle';
import SectionDescription from '@Components/SectionTitle/SectionDescription/SectionDescription';
import styles from './Styles';
import Modal from 'react-native-modal';

const Diversity = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    return (
        <ScrollView style={styles.container}>
            <StackHeader
                goBack={() => navigation.goBack()}
                color={Color.primary}
                borderBottomWith={1}
            />
            <Image style={styles.image} source={require('@Assets/images/DiversityHeaderCorner.png')} />
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
                <TouchableOpacity
                    onPress={() => {
                        setModalVisible(true)
                    }}
                >
                    <Image
                        style={styles.imageButton}
                        source={require('@Assets/images/Diversity.png')} />
                </TouchableOpacity>
                <View
                    style={{ marginTop: "2%" }}
                >
                    <SectionTitle
                        title1="Diversity"
                        title2="Strategy"
                    />
                </View>
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
            <Modal
                isVisible={isModalVisible}
                onBackdropPress={() => setModalVisible(false)}
                onSwipeComplete={() => setModalVisible(false)}
                swipeDirection="down"
            >
                <View style={{
                    backgroundColor: "#fff",
                    position: "absolute",
                    bottom: "-3%",
                    left: "-5%",
                    right: "-5%",
                    borderTopRightRadius: 20,
                    borderTopLeftRadius: 20
                }}>
                    <Text
                        style={styles.modalTitle}
                    >Increase Organisational</Text>
                    <Text
                        style={styles.subTitle}
                    >Increase organizational effectiveness with training and executive coaching.</Text>
                    <Text
                        style={styles.description}
                    >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.

                        If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.

All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</Text>
                </View>
            </Modal>
        </ScrollView>
    )
}
export default Diversity