import React, { useState } from 'react';
import { View, Image, Easing, AsyncStorage } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '@MainFlow/Home/Home';
import Diversity from '@MainFlow/Diversity/Diversity';
import OurVision from '@MainFlow/OurVision/OurVision';
import Help from '@MainFlow/Help/Help';
import Clients from '@MainFlow/Clients/Clients';
import AboutUs from '@MainFlow/AboutUs/AboutUs';
import Contact from '@MainFlow/Contact/Contacts/Contact';
import ContactForm from '@MainFlow/Contact/ContactForm/ContactForm';
import UploadCV from '@MainFlow/UploadCV/UploadCV';
import PersonalScreen from '@MainFlow/PersonalScreen/PersonalScreen';
import Media from '@MainFlow/Media/Media';
import InterviewForm from '@MainFlow/InterviewForm/InterviewForm';
import ChooseQuestionnaire from '@QuestionsAuthFlow/ChooseQuestionnaire/ChooseQuestionnaire';
import Welcome from '../ComplianceParadigm/screens/Welcome/Welcome'
import Blug from '@MainFlow/Blug/Blug';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import StatementsAttribute from '../ComplianceParadigm/screens/StatementsAttribute/StatementsAttribute1';
import DiversityMatrix from '../ComplianceParadigm/screens/DiversityMatrix/DiversityMatrix';
import QuestionnaireA1 from '../ComplianceParadigm/screens/Questionnaire/QuestionnaireA1';
import QuestionnaireA2 from '../ComplianceParadigm/screens/Questionnaire/QuestionnaireA2';
import QuestionnaireA3 from '../ComplianceParadigm/screens/Questionnaire/QuestionnaireA3';
import QuestionnaireB1 from '../ComplianceParadigm/screens/Questionnaire/QuestionnaireB1';
import QuestionnaireB2 from '../ComplianceParadigm/screens/Questionnaire/QuestionnaireB2';
import QuestionnaireB3 from '../ComplianceParadigm/screens/Questionnaire/QuestionnaireB3';
import PerceptionReport from '../ComplianceParadigm/screens/PerceptionReport/PerceptionReport'
import InclusionOmeter from '../ComplianceParadigm/screens/InclusionOmeter/InclusionOmeter';
import PerceptionReportFormScreen from '../ComplianceParadigm/screens/PerceptionReportForm/PerceptionReportFormScreen'
import DiversityInvoiceScreen from '../ComplianceParadigm/screens/DiversityInvoice/DiversityInvoiceScreen';
import PaymentFor from '../ComplianceParadigm/screens/PaymentFor/PaymentFor';
import PerceptionQuestionnaire from '../ComplianceParadigm/screens/PerceptionQuestionnaire/PerceptionQuestionnaire';
import Setting from '@QuestionsAuthFlow/Setting/Setting';
import EditProfile from '@QuestionsAuthFlow/EditProfile/EditProfile';
import EditPassword from '@QuestionsAuthFlow/EditPassword/EditPassword';
import Profile from '@QuestionsAuthFlow/Profile/Profile';
import PaymentHistory from '@QuestionsAuthFlow/PaymentHistory/PaymentHistory';
import BottomIcon from './BottomIcon';
import Color from '@Assets/Constant';
import Animated from 'react-native-reanimated';
import BottomHome from './BottomHome.js'
import BottomDiversity from './BottomDiversity.js'
import BottomOurVision from './BottomOurVision.js'
import BottomHelp from './BottomHelp.js'
import BottomClients from './BottomClients.js'
import BottomAboutUs from './BottomAboutUs.js'
import BottomContact from './BottomContact.js'
import BottomMedia from './BottomMedia.js'
import BottomBlug from './BottomBlug.js'
// import {Context as AuthContext} from '@Context/AuthContext';
import BottomChooseQuestionnaire from './BottomChooseQuestionnaire.js'
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();
// const { signout} = useContext(AuthContext);
// const signout =  () => {
    
// }

const Screens = ({ style }) => {
    const openConfig = {
        animation: 'spring',
        config: {
            stiffness: 1000,
            damping: 50,
            mass: 3,
            overshootClamping: false,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 0.01,
        }
    }
    const closeConfig = {
        animation: 'timing',
        config: {
            duration: 500,
            easing: Easing.linear
        },
    };
    return (
        <Animated.View style={[{ flex: 1, overflow: "hidden" }, style]}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={BottomHome} />
                <Stack.Screen name="Diversity" component={BottomDiversity} />
                <Stack.Screen name="OurVision" component={BottomOurVision} />
                <Stack.Screen name="Help" component={BottomHelp} />
                <Stack.Screen name="Clients" component={BottomClients} />
                <Stack.Screen name="AboutUs" component={BottomAboutUs} />
                <Stack.Screen name="PersonalScreen" component={PersonalScreen} />
                <Stack.Screen name="Contact" component={BottomContact} />
                <Stack.Screen name="ContactForm" component={ContactForm} />
                <Stack.Screen name="UploadCV" component={UploadCV} />
                <Stack.Screen name="Media" component={BottomMedia} />
                <Stack.Screen name="InterviewForm" component={InterviewForm} />
                <Stack.Screen name="Blug" component={BottomBlug} />
                <Stack.Screen name="EditProfile" component={EditProfile} />
                <Stack.Screen name="EditPassword" component={EditPassword} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="PaymentHistory" component={PaymentHistory} />
                <Stack.Screen
                    name="ChooseQuestionnaire"
                    component={BottomChooseQuestionnaire}
                    options={{
                        gestureEnabled: true,
                        gestureDirection: "horizontal",
                        ...TransitionPresets.SlideFromRightIOS,
                        transitionSpec: {
                            open: openConfig,
                            close: closeConfig,
                        },
                    }}
                    animation="fade"
                />
                <Stack.Screen options={{
                    gestureEnabled: true,
                    gestureDirection: "horizontal",
                    ...TransitionPresets.SlideFromRightIOS,
                    transitionSpec: {
                        open: openConfig,
                        close: closeConfig,
                    },
                }}
                    name="Welcome"
                    component={Welcome}
                    animation="fade"
                />
                <Stack.Screen
                    options={{
                        gestureEnabled: true,
                        gestureDirection: "horizontal",
                        ...TransitionPresets.SlideFromRightIOS,
                        transitionSpec: {
                            open: openConfig,
                            close: closeConfig,
                        },
                    }}
                    name="StatementsAttribute"
                    component={StatementsAttribute}
                    animation="fade"
                />
                <Stack.Screen
                    options={{
                        gestureEnabled: true,
                        gestureDirection: "horizontal",
                        ...TransitionPresets.SlideFromRightIOS,
                        transitionSpec: {
                            open: openConfig,
                            close: closeConfig,
                        },
                    }}
                    name="DiversityMatrix"
                    component={DiversityMatrix}
                    animation="fade"
                />
                <Stack.Screen
                    options={{
                        gestureEnabled: true,
                        gestureDirection: "horizontal",
                        ...TransitionPresets.SlideFromRightIOS,
                        transitionSpec: {
                            open: openConfig,
                            close: closeConfig,
                        },
                    }}
                    name="QuestionnaireA1"
                    component={QuestionnaireA1}
                    animation="fade"
                />
                <Stack.Screen
                    options={{
                        gestureEnabled: true,
                        gestureDirection: "horizontal",
                        ...TransitionPresets.SlideFromRightIOS,
                        transitionSpec: {
                            open: openConfig,
                            close: closeConfig,
                        },
                    }}
                    name="QuestionnaireA2"
                    component={QuestionnaireA2}
                    animation="fade"
                />
                <Stack.Screen
                    options={{
                        gestureEnabled: true,
                        gestureDirection: "horizontal",
                        ...TransitionPresets.SlideFromRightIOS,
                        transitionSpec: {
                            open: openConfig,
                            close: closeConfig,
                        },
                    }}
                    name="QuestionnaireA3"
                    component={QuestionnaireA3}
                    animation="fade"
                />
                <Stack.Screen
                    options={{
                        gestureEnabled: true,
                        gestureDirection: "horizontal",
                        ...TransitionPresets.SlideFromRightIOS,
                        transitionSpec: {
                            open: openConfig,
                            close: closeConfig,
                        },
                    }}
                    name="QuestionnaireB1"
                    component={QuestionnaireB1}
                    animation="fade"
                />
                <Stack.Screen
                    options={{
                        gestureEnabled: true,
                        gestureDirection: "horizontal",
                        ...TransitionPresets.SlideFromRightIOS,
                        transitionSpec: {
                            open: openConfig,
                            close: closeConfig,
                        },
                    }}
                    name="QuestionnaireB2"
                    component={QuestionnaireB2}
                    animation="fade"
                />
                <Stack.Screen
                    options={{
                        gestureEnabled: true,
                        gestureDirection: "horizontal",
                        ...TransitionPresets.SlideFromRightIOS,
                        transitionSpec: {
                            open: openConfig,
                            close: closeConfig,
                        },
                    }}
                    name="QuestionnaireB3"
                    component={QuestionnaireB3}
                    animation="fade"
                />
                <Stack.Screen
                    options={{
                        gestureEnabled: true,
                        gestureDirection: "horizontal",
                        ...TransitionPresets.SlideFromRightIOS,
                        transitionSpec: {
                            open: openConfig,
                            close: closeConfig,
                        },
                    }}
                    name="PerceptionReport"
                    component={PerceptionReport}
                    animation="fade"
                />
                <Stack.Screen
                    options={{
                        gestureEnabled: true,
                        gestureDirection: "horizontal",
                        ...TransitionPresets.SlideFromRightIOS,
                        transitionSpec: {
                            open: openConfig,
                            close: closeConfig,
                        },
                    }}
                    name="InclusionOmeter"
                    component={InclusionOmeter}
                    animation="fade"
                />
                <Stack.Screen
                    options={{
                        gestureEnabled: true,
                        gestureDirection: "horizontal",
                        ...TransitionPresets.SlideFromRightIOS,
                        transitionSpec: {
                            open: openConfig,
                            close: closeConfig,
                        },
                    }}
                    name="PerceptionReportFormScreen"
                    component={PerceptionReportFormScreen}
                    animation="fade"
                />
                <Stack.Screen
                    options={{
                        gestureEnabled: true,
                        gestureDirection: "horizontal",
                        ...TransitionPresets.SlideFromRightIOS,
                        transitionSpec: {
                            open: openConfig,
                            close: closeConfig,
                        },
                    }}
                    name="DiversityInvoiceScreen"
                    component={DiversityInvoiceScreen}
                    animation="fade"
                />
                <Stack.Screen
                    options={{
                        gestureEnabled: true,
                        gestureDirection: "horizontal",
                        ...TransitionPresets.SlideFromRightIOS,
                        transitionSpec: {
                            open: openConfig,
                            close: closeConfig,
                        },
                    }}
                    name="PaymentFor"
                    component={PaymentFor}
                    animation="fade"
                />
                <Stack.Screen
                    options={{
                        gestureEnabled: true,
                        gestureDirection: "horizontal",
                        ...TransitionPresets.SlideFromRightIOS,
                        transitionSpec: {
                            open: openConfig,
                            close: closeConfig,
                        },
                    }}
                    name="PerceptionQuestionnaire"
                    component={PerceptionQuestionnaire}
                    animation="fade"
                />
            </Stack.Navigator>
        </Animated.View>
    )
}
const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView
            scrollEnabled={false}
            {...props}>
            <View style={{ backgroundColor: Color.primary }}>
                <Image
                    style={{
                        marginTop: "15%",
                        width: "100%",
                        resizeMode: "contain"
                    }}
                    source={require('@Assets/images/logo.png')}
                />
                <DrawerItem
                    labelStyle={{
                        fontSize: 16,
                        fontFamily: "Altissimo_bold",
                        color: Color.white
                    }}
                    label="Home"
                    onPress={() => props.navigation.navigate("Home")}
                />
                <DrawerItem
                    labelStyle={{
                        fontSize: 16,
                        fontFamily: "Altissimo_bold",
                        color: Color.white
                    }}
                    label="Diversity"
                    onPress={() => props.navigation.navigate("Diversity")}
                />
                <DrawerItem
                    labelStyle={{
                        fontSize: 16,
                        fontFamily: "Altissimo_bold",
                        color: Color.white
                    }}
                    label="OurVision"
                    onPress={() => props.navigation.navigate("OurVision")}
                />
                <DrawerItem
                    labelStyle={{
                        fontSize: 16,
                        fontFamily: "Altissimo_bold",
                        color: Color.white
                    }}
                    label="Help"
                    onPress={() => props.navigation.navigate("Help")}
                />
                <DrawerItem
                    labelStyle={{
                        fontSize: 16,
                        fontFamily: "Altissimo_bold",
                        color: Color.white
                    }}
                    label="Clients"
                    onPress={() => props.navigation.navigate("Clients")}
                />
                <DrawerItem
                    labelStyle={{
                        fontSize: 16,
                        fontFamily: "Altissimo_bold",
                        color: Color.white
                    }}
                    label="AboutUs"
                    onPress={() => props.navigation.navigate("AboutUs")}
                />
                <DrawerItem
                    labelStyle={{
                        fontSize: 16,
                        fontFamily: "Altissimo_bold",
                        color: Color.white
                    }}
                    label="Contact"
                    onPress={() => props.navigation.navigate("Contact")}
                />
                <DrawerItem
                    labelStyle={{
                        fontSize: 16,
                        fontFamily: "Altissimo_bold",
                        color: Color.white
                    }}
                    label="Blug"
                    onPress={() => props.navigation.navigate("Blug")}
                />
                {/* <DrawerItem
                    labelStyle={{
                        fontSize: 16,
                        fontFamily: "Altissimo_bold",
                        color: Color.white
                    }}
                    label="sign out"
                    onPress={signout}
                /> */}
                <Image
                    style={{
                        width: 260,
                        height: 250,
                        width: "100%",
                        resizeMode: "contain",
                        marginTop: "30%"
                    }}
                    source={require('@Assets/images/pups.png')}
                />
            </View>
        </DrawerContentScrollView>
    )
}
export default () => {
    const [progress, setProgress] = useState(new Animated.Value(0))
    const scale = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [1, 0.8],
    })
    const borderRadius = Animated.interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [0, 50]
    })
    const screenStyles = { borderRadius, transform: [{ scale }] };
    return (
        <View style={{ flex: 1, backgroundColor: Color.primary }}>
            <Drawer.Navigator
                contentContainerStyle={{ flex: 1 }}
                drawerStyle={{ width: "50%", backgroundColor: "transparent" }}
                initialRouteName="Home"
                drawerContent={(props) => {
                    setProgress(props.progress);
                    return <CustomDrawerContent {...props} />
                }}
                drawerType="slide"
                overlayColor="transparent"
                drawerContentOptions={{
                    activeBackgroundColor: "transparent",
                    activeTintColor: Color.secondary,
                    inactiveTintColor: Color.secondary
                }}
                sceneContainerStyle={{ backgroundColor: "transparent" }}
            >
                <Drawer.Screen name="BottomTabs">
                    {props => <Screens {...props} style={screenStyles} />}
                </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    )
}