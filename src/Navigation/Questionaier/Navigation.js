import React, { useContext } from 'react';
import QuestionnaireActiveAccount from '@QuestionsAuthFlow/AuthFlow/AccountActivation/AccountActivation';
import QuestionnaireResetPassword from '@QuestionsAuthFlow/AuthFlow/ForgotPassword/ResetPassword';
import QuestionnaireLogin from '@QuestionsAuthFlow/AuthFlow/login/login';
import QuestionnaireSignUp from '@QuestionsAuthFlow/AuthFlow/SignUp/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Context as AuthContext } from "../../Context/AuthContext";
import Drawer from './Drawer';
const Stack = createStackNavigator();
const Navigator = () => {
    const { state } = useContext(AuthContext)
    return (
        <NavigationContainer>
            {
                state.token === false ? (
                    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="QuestionnaireLogin">
                        <Stack.Screen name="QuestionnaireSignUp" component={QuestionnaireSignUp} />
                        <Stack.Screen name="QuestionnaireLogin" component={QuestionnaireLogin} />
                        <Stack.Screen name="QuestionnaireResetPassword" component={QuestionnaireResetPassword} />
                        <Stack.Screen name="QuestionnaireActiveAccount" component={QuestionnaireActiveAccount} />
                    </Stack.Navigator>
                ) : (
                        <Drawer />
                    )
            }
        </NavigationContainer>
    )
}
export default Navigator;