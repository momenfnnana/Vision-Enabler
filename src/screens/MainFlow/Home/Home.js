import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    Image,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Header from '@Components/Header/Header/Header';
import Card from '@Components/card/Card/Card';
import { AntDesign } from '@expo/vector-icons';
import VisionData from '@FakeData/FakeData';
import ClientData from '@FakeData/ClientData';
import Color from '@Assets/Constant';
import SectionTitle from '@Components/SectionTitle/SectionTitle/SectionTitle';
import SectionDescription from '@Components/SectionTitle/SectionDescription/SectionDescription';
import styles from './Styles';
import VisionCard from '@Components/card/VisionCard/VisionCard';
import ClientCard from '@Components/card/ClientsCard/ClientsCard';
import { getVisionAndValues, getClients } from "@Services/MainFlow/HomeScreen";
import LoadingDialog from '@Components/LoadingDialog/LoadingDialog';

const Home = ({ navigation }) => {
    const [vision, setVision] = useState(null);
    const [clients, setClients] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async function () {
            try {
                setIsLoading(true);
                // const VisionAndValues = await getVisionAndValues();
                // const ClientsData = await getClients();
                console.log("aaa", ClientsData.data);
                // setVision(VisionAndValues.data);
                // setClients(ClientsData.data);
                setIsLoading(false);
            } catch (e) {
                setIsLoading(false);
                alert("We got an problem!");
            }
        })();
    }, []);
    return (
        <>
            {isLoading ? <LoadingDialog /> : (
                <View style={{ backgroundColor: Color.white }}>
                    <Header OpenDrawer={() => navigation.openDrawer()} />
                    <ScrollView style={styles.container}>
                        <Card />
                        <View style={styles.headSection}>
                            <SectionTitle title1="WHAT IS" title2="DIVERSITY" />
                            <SectionDescription text="Simply defined, diversity is the state of being diverse or different." />
                        </View>
                        <Image
                            style={{
                                marginVertical: "10%",
                                resizeMode: "contain",
                                alignSelf: "center"
                            }}
                            source={require('@Assets/images/Diversity.png')} />
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Diversity')}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>More</Text>
                            <AntDesign name="arrowright" size={24} color={Color.white} style={styles.arrow} />
                        </TouchableOpacity>
                        <View style={styles.headSection}>
                            <SectionTitle title1="OUR" title2="VISION and VALUES" />
                            <SectionDescription text="At Vision Enabler we believe that diversity should be at the core of every forward thinking company’s management strategy." />
                        </View>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {/* {
                                vision.map(i => {
                                    return (
                                        <VisionCard key={i.id} data={i} />
                                    )
                                })
                            } */}
                        </ScrollView>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('OurVision')}
                            style={styles.button}>
                            <Text style={styles.buttonText}>More</Text>
                            <AntDesign name="arrowright" size={24} color={Color.white} style={styles.arrow} />
                        </TouchableOpacity>
                        <View style={styles.headSection}>
                            <SectionTitle
                                title1="our"
                                title2="clients"
                            />
                            <SectionDescription
                                text="At Vision Enabler we believe that diversity should be at the core of every forward thinking company’s management strategy."
                            />
                        </View>
                        <ScrollView
                            horizontal
                            style={{ marginLeft: "0%" }}
                            showsHorizontalScrollIndicator={false}
                        >
                            {/* {
                                clients.map(i => {
                                    return (
                                        <ClientCard key={i.id} data={i} />
                                    )
                                })
                            } */}
                        </ScrollView>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Clients')}
                            style={[styles.button, { marginBottom: "30%" }]}>
                            <Text style={styles.buttonText}>More</Text>
                            <AntDesign name="arrowright" size={24} color={Color.white} style={styles.arrow} />
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            )}
        </>
    )
}
export default Home