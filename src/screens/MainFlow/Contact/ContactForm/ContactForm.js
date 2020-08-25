import React, { useState } from 'react';
import {
    View,
    Text,
    ImageBackground,
    TextInput,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Color from '@Assets/Constant';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './Styles';
const ContactForm = ({ navigation }) => {
    const [office, setOffice] = useState("select VE office");
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [textArea, setTextArea] = useState('');
    return (
        <ScrollView style={styles.container}>
            <ImageBackground
                style={styles.ImageBackground}
                width={"100%"}
                source={require('@Assets/images/ContactFormHeader.png')}
            >
                <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
                    <AntDesign name="arrowleft" size={24} color={Color.white} />
                </TouchableOpacity>
                <View style={styles.headTitleContainer} />
                <Text style={styles.headTitle}>Drop us a
                    <Text style={styles.headTitleLine}>Line</Text>
                </Text>
                <Text style={styles.headDescription}>Whether you have a question about features, trials, pricing, need a demo, or anything else, our team is ready to answer all your questions.</Text>
            </ImageBackground>
            <TextInput
                placeholder="firstName"
                style={styles.firstName}
                value={firstName}
                onChangeText={(val) => setFirstName(val)}
            />
            <TextInput
                placeholder="lastName"
                style={styles.lastName}
                value={lastName}
                onChangeText={(val) => setLastName(val)}
            />
            <TextInput
                placeholder="EmailAddress"
                style={styles.email}
                value={email}
                onChangeText={(val) => setEmail(val)}
            />
            <TextInput
                placeholder="mobileNumber"
                style={styles.mobileNumber}
                value={mobileNumber}
                onChangeText={(val) => setMobileNumber(val)}
            />
            <DropDownPicker
                items={[
                    { label: 'Select a VE Office', value: 'select VE office' },
                    { label: 'France', value: 'france' },
                ]}
                defaultValue={office}
                containerStyle={styles.dropDownPickerContainer}
                labelStyle={{
                    color: Color.secondary,
                }}
                style={styles.dropDownStyle}
                itemStyle={styles.itemPickerStyle}
                dropDownStyle={{
                    backgroundColor: '#fafafa',
                    color: Color.primary
                }}
                onChangeItem={() => setOffice}
            />
            <View style={styles.textAreaContainer} >
                <TextInput
                    style={styles.textArea}
                    underlineColorAndroid="transparent"
                    placeholder="Your Message"
                    placeholderTextColor="grey"
                    numberOfLines={10}
                    multiline={true}
                    value={textArea}
                    onChangeText={setTextArea}
                />
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.SignupText}>Submit</Text>
            </TouchableOpacity>
            <View style={styles.privacyPolicy}>
                <Text style={{ color: `${Color.primary}`, fontSize: 13 }}>
                    By clicking on Submit, you acknowledge having read our
            </Text>
                <TouchableOpacity>
                    <Text style={{ color: `${Color.secondary}` }}> Privacy Policy</Text>
                </TouchableOpacity>
            </View>
        </ScrollView >
    )
}
export default ContactForm