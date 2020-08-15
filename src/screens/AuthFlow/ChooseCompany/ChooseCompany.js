import React, { useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';
import StackHeader from '@Components/Header/StackHeader/StackHeader';
import SectionTitle from '@Components/SectionTitle/SectionTitle/SectionTitle';
import SectionDescription from '@Components/SectionTitle/SectionDescription/SectionDescription';
import Color from '@Assets/Constant';
import styles from './ChooseCompany.style';
import { SearchBar } from 'react-native-elements';
import ClientData from '@FakeData/ClientData';
import Card from './Card';
const ChooseCompany = ({ navigation }) => {
    const [search, setSearch] = useState('a');
    const FirstDataAppear = () => {
        return (
            <View>
                {ClientData.map(i => {
                    return (
                        <Card key={i.id} data={i} />
                    )
                })}
            </View>
        )
    }
    return (
        <ScrollView style={{ width: "100%", backgroundColor: Color.white }}>
            <StackHeader
                goBack={() => navigation.goBack()}
                color={Color.primary}
            />
            <Image style={styles.image} source={require('@Assets/images/MediaHeadCorner.png')} />
            <SectionTitle
                title1="select"
                title2="Your company"
            />
            <SectionDescription
                text="Please select the company you are working in it , for complete all of registration stages."
            />
            <SearchBar
                placeholder="Search"
                onChangeText={(value) => setSearch(value)}
                value={search}
                containerStyle={{
                    backgroundColor: Color.white,
                    borderColor: Color.white,
                    borderTopColor: Color.white,
                    borderBottomColor: Color.white,
                    width: "94%",
                    alignSelf: "center",
                    marginTop: "3%"
                }}
                inputContainerStyle={{
                    backgroundColor: "#E3E4F6"
                }}
                round={true}
            />
            {
                search ? (
                    <FirstDataAppear />
                ) :
                    (
                        <View></View>
                    )
            }
        </ScrollView>
    )
}
export default ChooseCompany;