import React, { useState, useContext } from 'react';
import {
    View,
    Text,
    ScrollView,
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Permissions
} from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Color from '@Assets/Constant';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './Styles';
import * as DocumentPicker from 'expo-document-picker';
import { ContactForm } from "@Services/MainFlow/ContactForm";
import LoadingDialog from '@Components/LoadingDialog/LoadingDialog';
import { Context as PDFContext } from '@Context/AuthContext'
const UploadCV = ({ navigation }) => {
    const { state, changePdf } = useContext(PDFContext);

    const [isLoading, setIsLoading] = useState(false);
    const [firstName, setFirstName] = useState('asd');
    const [lastName, setLastName] = useState('asd');
    const [emailAddress, setEmailAddress] = useState('asd@asd.com');
    const uploadCVButton = async () => {
        // await Permissions.askAsync(Permissions.CAMERA_ROLL);
        const file = await DocumentPicker.getDocumentAsync({ type: "*/*" })
        // may be add return file
        // console.log(file.uri)
        changePdf(file);
    }
    console.log("asd",state.pdf);
    const doLogin = async () => {
        setIsLoading(true);
        try {
            const response = await ContactForm({
                first_name: firstName,
                last_name: lastName,
                email: emailAddress,
                cv: state.pdf
            });
            if (response.status === true) {
                alert("Done");

                console.log("facebook hacked");
            } else {
                console.log('response: ', response)
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
            {isLoading === true ? <LoadingDialog /> : (
                <ScrollView style={styles.container}>
                    <ImageBackground
                        style={styles.headerImage}
                        width={"100%"}
                        source={require('@Assets/images/ContactFormHeader.png')}
                    >
                        <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
                            <AntDesign name="arrowleft" size={24} color={Color.white} />
                        </TouchableOpacity>
                        <View style={styles.userContainerImage}>
                            <Ionicons name="md-person" size={30} color={Color.secondary} />
                        </View>
                        <Text style={styles.upLoadCV}>upload
                    <Text style={{ color: Color.secondary }}>cv</Text>
                        </Text>
                        <Text style={styles.description}>if you interested in our work upload your CV file and we will contact you later</Text>
                    </ImageBackground>
                    <TextInput
                        placeholder="firstName"
                        style={styles.input}
                        value={firstName}
                        onChangeText={setFirstName}
                    />
                    <TextInput
                        placeholder="lastName"
                        style={styles.input}
                        value={lastName}
                        onChangeText={setLastName}
                    />
                    <TextInput
                        placeholder="EmailAddress"
                        style={styles.input}
                        value={emailAddress}
                        onChangeText={setEmailAddress}
                    />
                    <TouchableOpacity style={styles.uploadButton} onPress={uploadCVButton}>
                        <MaterialIcons style={{ marginHorizontal: "1%" }} name="cloud-upload" size={24} color={Color.primary} />
                        <Text style={styles.uploadButtonText}>Upload CV</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={doLogin}>
                        <Text style={styles.SignupText}>Send</Text>
                    </TouchableOpacity>
                </ScrollView>
            )}
        </>
    )
}

export default UploadCV;