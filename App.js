import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import Navigator from './src/Navigation/Navigation';
import { Provider as AuthProvider } from './src/Context/AuthContext'
import Welcome from './src/ComplianceParadigm/screens/Welcome/Welcome';
import StatementsAttribute from './src/ComplianceParadigm/screens/StatementsAttribute/StatementsAttribute1';
import StatementsAttribute2 from './src/ComplianceParadigm/screens/StatementsAttribute/StatementsAttribute2';
import Blug from './src/screens/MainFlow/Blug/Blug';
import ChooseQuestionnaire from './src/QuestionnaireParadigms/screens/ChooseQuestionnaire/ChooseQuestionnaire';
import QuestionnaireLogin from './src/QuestionnaireParadigms/screens/AuthFlow/login/login';
import QuestionnaireSignUp from './src/QuestionnaireParadigms/screens/AuthFlow/SignUp/SignUp';
import QuestionnaireActiveAccount from './src/QuestionnaireParadigms/screens/AuthFlow/AccountActivation/AccountActivation';
import QuestionnaireResetPassword from './src/QuestionnaireParadigms/screens/AuthFlow/ForgotPassword/ResetPassword';
import PerceptionReport from './src/ComplianceParadigm/screens/PerceptionReport/PerceptionReport';
export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const fetchFonts = () => {
    return Font.loadAsync({
      'Altissimo_bold': require('@Assets/fonts/Altissimo_bold.ttf'),
      'Altissimo': require('@Assets/fonts/Altissimo.ttf'),
      'AbdoMasterNormal': require('@Assets/fonts/AbdoMasterNormal.ttf'),
      'DINNextLTProRegular': require('@Assets/fonts/DINNextLTPro-Regular.ttf')
    });
  };
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }
  return (
    <AuthProvider>
      {/* <Navigator /> */}
      {/* <Welcome /> */}
      {/* <StatementsAttribute /> */}
      {/* <StatementsAttribute2 /> */}
      {/* <Blug /> */}
      {/* <ChooseQuestionnaire /> */}
      {/* <QuestionnaireLogin /> */}
      {/* <QuestionnaireSignUp /> */}
      {/* <QuestionnaireActiveAccount /> */}
      {/* <QuestionnaireResetPassword /> */}
      <PerceptionReport />
    </AuthProvider>
  );
}
