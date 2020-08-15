import React, { useState } from 'react';
import { View, Image, Easing } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer';
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
import Blug from '@MainFlow/Blug/Blug';
import ChooseQuestionnaire from '@QuestionsAuthFlow/ChooseQuestionnaire/ChooseQuestionnaire';
import Welcome from '@ComplianceParadigmScreens/Welcome/Welcome'
import StatementsAttribute from '@ComplianceParadigmScreens/StatementsAttribute/StatementsAttribute1';
import StatementsAttribute2 from '@ComplianceParadigmScreens/StatementsAttribute/StatementsAttribute2';
import DiversityMatrix from '@ComplianceParadigmScreens/DiversityMatrix/DiversityMatrix'
import Questionnaire from '@ComplianceParadigmScreens/Questionnaire/Questionnaire'
import PerceptionReport from '@ComplianceParadigmScreens/PerceptionReport/PerceptionReport'
import InclusionOmeter from '@ComplianceParadigmScreens/InclusionOmeter/InclusionOmeter';
import PerceptionReportFormScreen from '@ComplianceParadigmScreens/PerceptionReportForm/PerceptionReportFormScreen'
import Color from '@Assets/Constant';
import Animated from 'react-native-reanimated';
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
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
                <Stack.Screen
                    name="ChooseQuestionnaire"
                    component={ChooseQuestionnaire}
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
                    name="StatementsAttribute2"
                    component={StatementsAttribute2}
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
                    name="Questionnaire"
                    component={Questionnaire}
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
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Diversity" component={Diversity} />
                <Stack.Screen name="OurVision" component={OurVision} />
                <Stack.Screen name="Help" component={Help} />
                <Stack.Screen name="Clients" component={Clients} />
                <Stack.Screen name="AboutUs" component={AboutUs} />
                <Stack.Screen name="PersonalScreen" component={PersonalScreen} />
                <Stack.Screen name="Contact" component={Contact} />
                <Stack.Screen name="ContactForm" component={ContactForm} />
                <Stack.Screen name="UploadCV" component={UploadCV} />
                <Stack.Screen name="Media" component={Media} />
                <Stack.Screen name="InterviewForm" component={InterviewForm} />
                <Stack.Screen name="Blug" component={Blug} />
            </Stack.Navigator>
        </Animated.View>
    )
}
const CustomDrawerContent = (props) => {
    return (
        <DrawerContentScrollView
            scrollEnabled={false}
            {...props}>
            <View
                style={{
                    backgroundColor: Color.primary,
                }}
            >
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
                    label="Questionnaire"
                    onPress={() => props.navigation.navigate("ChooseQuestionnaire")}
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
        <View
            style={{ flex: 1, backgroundColor: Color.primary }}
        >
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
                <Drawer.Screen name="Screens">
                    {props => <Screens {...props} style={screenStyles} />}
                </Drawer.Screen>
            </Drawer.Navigator>
        </View>
    )
}