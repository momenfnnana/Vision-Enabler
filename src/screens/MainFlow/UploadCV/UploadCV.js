import React from 'react';
import {
    View,
    Text,
    ScrollView,
    ImageBackground,
    TextInput,
    TouchableOpacity
} from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Color from '@Assets/Constant';
import { MaterialIcons } from '@expo/vector-icons';
import styles from './Styles';
const UploadCV = ({ navigation }) => {
    return (
        <ScrollView style={styles.container}>
            <ImageBackground
                style={styles.headerImage}
                width={"100%"}
                source={require('@Assets/images/ContactFormHeader.png')}
            >
                <TouchableOpacity style={styles.goBack} onPress={() => navigation.goBack()}>
                    <AntDesign
                        name="arrowleft" size={24} color={Color.white} />
                </TouchableOpacity>
                <View style={styles.userContainerImage}>
                    <Ionicons name="md-person" size={30} color={Color.secondary} />
                </View>
                <Text style={styles.upLoadCV}
                >upload <Text style={{ color: Color.secondary }}>cv</Text></Text>
                <Text style={styles.description}>if you interested in our work upload your CV file and we will contact you later</Text>
            </ImageBackground>
            <TextInput placeholder="firstName" style={styles.input} />
            <TextInput placeholder="lastName" style={styles.input} />
            <TextInput placeholder="EmailAddress" style={styles.input} />
            <TouchableOpacity style={styles.uploadButton}>
                <MaterialIcons style={{ marginHorizontal: "1%" }} name="cloud-upload" size={24} color={Color.primary} />
                <Text style={styles.uploadButtonText}>Upload CV</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.SignupText}>Send</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

export default UploadCV