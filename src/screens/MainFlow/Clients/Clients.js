import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    Image,
    ScrollView,
    FlatList
} from 'react-native';
import StackHeader from '@Components/Header/StackHeader/StackHeader';
import Color from '@Assets/Constant';
import SectionTitle from '@Components/SectionTitle/SectionTitle/SectionTitle';
import SectionDescription from '@Components/SectionTitle/SectionDescription/SectionDescription';
import ClientData from '@FakeData/ClientData';
import Card from '@Components/card/ClientList/ClientsList';
import { getVisionAndValues, getClients } from "@Services/MainFlow/HomeScreen";
import LoadingDialog from '@Components/LoadingDialog/LoadingDialog';

import styles from './Styles';
const Clients = ({ navigation }) => {
    const [clients, setClients] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async function () {
            try {
                setIsLoading(true);
                const ClientsData = await getClients();
                console.log("aaa", ClientsData.data);
                setClients(ClientsData.data);
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
                <View style={styles.container}>
                    <StackHeader
                        goBack={() => navigation.goBack()}
                        color={Color.primary}
                        borderBottomWith={1}
                    />
                    <ScrollView>
                        <View style={styles.headSection}>
                            <View style={{ width: "60%" }}>
                                <View style={{ marginLeft: "3%" }}>
                                    <SectionTitle
                                        title1="Our"
                                        title2="Clients List"
                                    />
                                </View>
                                <View style={styles.description}>
                                    <SectionDescription text="At Vision Enabler we believe that diversity should be at the core of every forward thinking company’s management strategy." />
                                </View>
                            </View>
                            <View style={{ marginTop: "-18%" }}>
                                <Image style={styles.clients} source={require('@Assets/images/Clients.png')} />
                                <Image
                                    style={styles.underClients}
                                    source={require('@Assets/images/underClients.png')}
                                />
                            </View>
                        </View>
                        <FlatList
                            data={clients}
                            keyExtractor={id => id.id}
                            renderItem={item => <Card data={item} />}
                            numColumns={2}
                            style={{ marginTop: "15%" }}
                        />
                        <SectionTitle title1="British" title2="Petroleum" />
                        <SectionDescription
                            text="“I recently worked on a project with Hamid Senni from Vision Enabler restructuring the group function for which I am responsible. Hamid's responsibilities were to lead and manage the change process of my group of people and their processes."
                        />
                        <SectionDescription
                            text="“Hamid demonstrated that he is a very capable person who delivers his projects with a high level of energy and enthusiasm. Prepared to challenge and provide constructive input was very beneficial."
                        />
                        <SectionDescription
                            text="“His ability to rapidly become inclusive in the team was a quality welcomed by all staff who would then not be afraid to confide in him."
                        />
                        <SectionDescription
                            text="“His ability to rapidly become inclusive in the team was a quality welcomed by all staff who would then not be afraid to confide in him."
                        />
                        <SectionDescription
                            text="David T. Anderson, Head of BP Insurance Risk Solutions"
                        />
                        <SectionTitle
                            title1="Case"
                            title2="Study"
                        />
                        <Text style={styles.title}>THE DIVERSITY CLUB®: OUR THINK TANK</Text>
                        <SectionDescription
                            text="The Diversity Club® Paris was established in October 2007 and ran for two years from 2008 to 2009."
                        />
                        <SectionDescription
                            text="Through the Diversity Club® model, we created a think tank environment, bringing together some of the most forward thinking companies in France to work on a common diversity approach and share best-practice. Working together, we invented new solutions and created a framework for driving performance through diversity."
                        />
                        <SectionDescription
                            text="We focused on gender, ethnicity, disability and age to understand in what way the HR process could be based on individual merit to guarantee fairness and equal opportunity."
                        />
                        <SectionDescription
                            text="All our findings and conclusions formed the foundations of a diversity and performance course, at Sciences Po Paris (HR Masters)."
                        />
                        <SectionDescription
                            text="The founding members along with L’Oréal were Blue Link (Air France Group), Ernst&Young, Groupama, La Banque Postale (La Poste Group), RATP, Sanofi Aventis and VIP International."
                        />
                        <SectionDescription
                            text="The club in Paris also included some of the leading companies in the diversity field: Accenture, Acsé, Airbus (EADS Group), Assystem, AXA, BNP Paribas, Danone, Gaz de France, M6 Television, Opcalia, Pitney Bowes, Renault, Schneider Electric, Société Générale, Total, Unilever, Vedior and Vente Privée."
                        />
                    </ScrollView>
                </View>
            )}
        </>
    )
}

export default Clients