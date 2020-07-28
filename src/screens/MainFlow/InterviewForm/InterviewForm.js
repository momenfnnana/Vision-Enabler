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
import styles from './Styles'
const InterviewForm = ({ navigation }) => {
    const [selectedValue, setSelectedValue] = useState("Select a Country");

    return (
        <ScrollView
            style={{
                backgroundColor: Color.white
            }}
        >
            <ImageBackground
                style={{
                    width: "100%",
                }}
                source={require('@Assets/images/InterviewFormHeader.png')}
            >
                <StackHeader
                    goBack={() => navigation.goBack()}
                    color={Color.white}
                />
                <Image
                    style={{
                        alignSelf: 'center',
                    }}
                    source={require('@Assets/images/interviewTV.png')}
                />
                <Text
                    style={styles.opinion}
                >Opinion</Text>
                <Text style={styles.opinionDescription}>Opinions on Diversity, Inclusion & Belonging are freely available… but visionary insights demand expertise.</Text>
                <TouchableOpacity
                    style={styles.downloadButton}
                >
                    <Text
                        style={styles.downloadButtonText}
                    >Download founder’s press book</Text>
                </TouchableOpacity>
            </ImageBackground>
            <Text
                style={styles.WantInterView}
            >Would you like an interview?</Text>
            <TextInput
                style={styles.Input}
                placeholder="First Name"
            />
            <TextInput
                style={styles.Input}
                placeholder="Last Name"
            />
            <TextInput
                style={styles.Input}
                placeholder="Work Email"
            />
            <TextInput
                style={styles.Input}
                placeholder="Phone Number"
            />
            <TextInput
                style={styles.Input}
                placeholder="Media Name"
            />
            <DropDownPicker
                items={[
                    { label: 'Select a Country', value: 'Select a Country' },
                    { label: 'America', value: 'America' },
                    { label: 'Africa', value: 'Africa' },
                    { label: 'Palestine', value: 'Palestine' },
                ]}
                defaultValue={selectedValue}
                containerStyle={styles.PickerContainerStyle}
                style={styles.PickerStyle}
                itemStyle={styles.PickerItemStyle}
                dropDownStyle={styles.dropDownStyle}
                onChangeItem={() => setSelectedValue}
            />
            <View style={styles.textAreaContainer} >
                <TextInput
                    style={styles.textArea}
                    underlineColorAndroid="transparent"
                    placeholder="Your Message"
                    placeholderTextColor="grey"
                    numberOfLines={10}
                    multiline={true}
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
        </ScrollView>
    )
}

export default InterviewForm;