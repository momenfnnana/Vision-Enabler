import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import BottomIcon from './BottomIcon';
import Home from '@MainFlow/Home/Home';
import ChooseQuestionnaire from '@QuestionsAuthFlow/ChooseQuestionnaire/ChooseQuestionnaire';
import Setting from '@QuestionsAuthFlow/Setting/Setting';

import StatementsAttribute from '../ComplianceParadigm/screens/StatementsAttribute/StatementsAttribute1';
import DiversityMatrix from '../ComplianceParadigm/screens/DiversityMatrix/DiversityMatrix'
import QuestionnaireA1 from '../ComplianceParadigm/screens/Questionnaire/QuestionnaireA1'
import QuestionnaireA2 from '../ComplianceParadigm/screens/Questionnaire/QuestionnaireA2'
import QuestionnaireA3 from '../ComplianceParadigm/screens/Questionnaire/QuestionnaireA3'
import QuestionnaireB1 from '../ComplianceParadigm/screens/Questionnaire/QuestionnaireB1'
import QuestionnaireB2 from '../ComplianceParadigm/screens/Questionnaire/QuestionnaireB2'
import QuestionnaireB3 from '../ComplianceParadigm/screens/Questionnaire/QuestionnaireB3'
import PerceptionReport from '../ComplianceParadigm/screens/PerceptionReport/PerceptionReport'
import InclusionOmeter from '../ComplianceParadigm/screens/InclusionOmeter/InclusionOmeter';
import PerceptionReportFormScreen from '../ComplianceParadigm/screens/PerceptionReportForm/PerceptionReportFormScreen'
import DiversityInvoiceScreen from '../ComplianceParadigm/screens/DiversityInvoice/DiversityInvoiceScreen';
import PaymentFor from '../ComplianceParadigm/screens/PaymentFor/PaymentFor';
import PerceptionQuestionnaire from '../ComplianceParadigm/screens/PerceptionQuestionnaire/PerceptionQuestionnaire';
import EditProfile from '@QuestionsAuthFlow/EditProfile/EditProfile';
import EditPassword from '@QuestionsAuthFlow/EditPassword/EditPassword';
import Profile from '@QuestionsAuthFlow/Profile/Profile';
import PaymentHistory from '@QuestionsAuthFlow/PaymentHistory/PaymentHistory';
import Welcome from '../ComplianceParadigm/screens/Welcome/Welcome'

const Tab = createMaterialBottomTabNavigator();
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
const Stack = createStackNavigator();

const QuestionsStack = () => {
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
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen options={{
                gestureEnabled: true,
                gestureDirection: "horizontal",
                ...TransitionPresets.SlideFromRightIOS,
                transitionSpec: {
                    open: openConfig,
                    close: closeConfig,
                },
            }}
                name="ChooseQuestionnaire"
                component={ChooseQuestionnaire}
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
    )
}

const BottomChooseQuestionnaire = () => {
    return (
        <Tab.Navigator inactiveColor="#000">
            <Tab.Screen
                options={{
                    tabBarLabel: null,
                    tabBarIcon: ({ color }) => (<BottomIcon src={require('@Assets/images/Home.png')} />),
                    tabBarColor: "#000"
                }} name="Home" component={Home} />
            <Tab.Screen options={{
                tabBarLabel: null,
                tabBarIcon: ({ color }) => (<BottomIcon src={require('@Assets/images/ChooseQuestionainer.png')} />),
                tabBarColor: "#000"
            }} name="ChooseQuestionainer" component={QuestionsStack} />
            <Tab.Screen options={{
                tabBarLabel: null,
                tabBarIcon: ({ color }) => (<BottomIcon src={require('@Assets/images/settingsTab.png')} />),
                tabBarColor: "#000"
            }} name="Setting" component={Setting} />
        </Tab.Navigator>
    )
}
export default BottomChooseQuestionnaire;