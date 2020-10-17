import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
    TextInput,
} from 'react-native';
import StackHeader from '@Components/Header/StackHeader/StackHeader';
import Color from '@Assets/Constant';
import DropDownPicker from 'react-native-dropdown-picker';
import styles from './Styles';
import { InterviewFormPost } from "@Services/MainFlow/InterviewForm";
import LoadingDialog from '@Components/LoadingDialog/LoadingDialog';
import ScrollableHeader from '@Components/Header/ScrollableHeader/ScrollableHeader';

const InterviewForm = ({ navigation }) => {
    const [country, setCountry] = useState("Select a Country");
    const [firstName, setFirstName] = useState('first_name');
    const [lastName, setLastName] = useState('emad');
    const [workEmail, setWorkEmail] = useState('email@h.com');
    const [phoneNumber, setPhoneNumber] = useState('+95348523');
    const [mediaName, setMediaName] = useState('media_name');
    const [messege, setMessege] = useState('my request ');
    const [isLoading, setIsLoading] = useState(false);
    const [yOffset, setYOffset] = useState(false);

    const handleScroll = function (event) {
        if (event.nativeEvent.contentOffset.y > 77) {
            setYOffset(true);
        } else {
            setYOffset(false);
        }
    };
    const doLogin = async () => {
        setIsLoading(true);
        try {
            const response = await InterviewFormPost({
                first_name: firstName,
                last_name: lastName,
                email: workEmail,
                phone_no: phoneNumber,
                media_name: mediaName,
                country: country,
                request_title: messege
            });
            if (response.status === true) {
                alert("Done");
                console.log("facebook hacked");
            } else {
                alert("some inputs empty");
            }
            setIsLoading(false);
        } catch (e) {
            console.log(e);
            setIsLoading(false);
            setTimeout(() => {
                alert(e);
            }, 300);
        }
    };
    return (
        <>
            {isLoading === true ? <LoadingDialog /> :
                (
                    <>
                        {
                            yOffset ? (
                                <ScrollableHeader name="Interview Form" goBack={() => navigation.goBack()} />) : null
                        }
                        <ScrollView onScroll={handleScroll} style={{ backgroundColor: Color.white }}>
                            <ImageBackground style={{ width: "100%" }}
                                source={require('@Assets/images/InterviewFormHeader.png')}
                            >
                                <StackHeader
                                    goBack={() => navigation.goBack()}
                                    color={Color.white}
                                />
                                <Image style={{ alignSelf: 'center' }}
                                    source={require('@Assets/images/interviewTV.png')}
                                />
                                <Text style={styles.opinion}>Opinion</Text>
                                <Text style={styles.opinionDescription}>Opinions on Diversity, Inclusion & Belonging are freely available… but visionary insights demand expertise.</Text>
                                <TouchableOpacity style={styles.downloadButton}>
                                    <Text style={styles.downloadButtonText} >Download founder’s press book</Text>
                                </TouchableOpacity>
                            </ImageBackground>
                            <Text style={styles.WantInterView}>Would you like an interview?</Text>
                            <TextInput
                                style={styles.Input}
                                placeholder="First Name"
                                value={firstName}
                                onChangeText={setFirstName}
                            />
                            <TextInput
                                style={styles.Input}
                                placeholder="Last Name"
                                value={lastName}
                                onChangeText={setLastName}
                            />
                            <TextInput
                                style={styles.Input}
                                placeholder="Work Email"
                                value={workEmail}
                                onChangeText={setWorkEmail}
                                keyboardType="email-address"
                            />
                            <TextInput
                                style={styles.Input}
                                placeholder="Phone Number"
                                value={phoneNumber}
                                onChangeText={setPhoneNumber}
                                keyboardType="numeric"
                            />
                            <TextInput
                                style={styles.Input}
                                placeholder="Media Name"
                                value={mediaName}
                                onChangeText={setMediaName}
                            />
                            <DropDownPicker
                                items={[
                                    { label: 'Select a Country', value: 'Select a Country' },
                                    { label: 'America', value: 'America' },
                                    { label: 'Africa', value: 'Africa' },
                                    { label: 'Palestine', value: 'Palestine' },
                                ]}
                                defaultValue={country}
                                containerStyle={styles.PickerContainerStyle}
                                style={styles.PickerStyle}
                                itemStyle={styles.PickerItemStyle}
                                dropDownStyle={styles.dropDownStyle}
                                onChangeItem={() => setCountry}
                            />
                            <View style={styles.textAreaContainer} >
                                <TextInput
                                    style={styles.textArea}
                                    underlineColorAndroid="transparent"
                                    placeholder="Your Request"
                                    placeholderTextColor="grey"
                                    numberOfLines={10}
                                    multiline={true}
                                    value={messege}
                                    onChangeText={setMessege}
                                />
                            </View>
                            <TouchableOpacity style={styles.button} onPress={doLogin}>
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
                        </ScrollView>
                    </>
                )
            }
        </>
    )
}

export default InterviewForm;