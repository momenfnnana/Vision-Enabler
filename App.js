import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import Navigator from './src/Navigation/Navigation';
// import Navigator from './src/Navigation/Questionaier/Navigation';
import { Provider as AuthProvider } from './src/Context/AuthContext';
import { Provider as MatrixProvider } from './src/Context/Matrix';
import Welcome from './src/ComplianceParadigm/screens/Welcome/Welcome';
import StatementsAttribute from './src/ComplianceParadigm/screens/StatementsAttribute/StatementsAttribute1';
import Blug from './src/screens/MainFlow/Blug/Blug';
import ChooseQuestionnaire from './src/QuestionnaireParadigms/screens/ChooseQuestionnaire/ChooseQuestionnaire';
import QuestionnaireLogin from './src/QuestionnaireParadigms/screens/AuthFlow/login/login';
import DiversityInvoiceScreen from './src/ComplianceParadigm/screens/DiversityInvoice/DiversityInvoiceScreen';
import AddPromoCodeScreen from './src/ComplianceParadigm/screens/AddPromoCode/AddPromoCodeScreen';
import PerceptionReport from './src/ComplianceParadigm/screens/PerceptionReport/PerceptionReport';
import QuestionnaireSignUp from './src/QuestionnaireParadigms/screens/AuthFlow/SignUp/SignUp';
import QuestionnaireActiveAccount from './src/QuestionnaireParadigms/screens/AuthFlow/AccountActivation/AccountActivation';
import QuestionnaireResetPassword from './src/QuestionnaireParadigms/screens/AuthFlow/ForgotPassword/ResetPassword';
import PerceptionReportFormScreen from './src/ComplianceParadigm/screens/PerceptionReportForm/PerceptionReportFormScreen';
import DiversityMatrix from './src/ComplianceParadigm/screens/DiversityMatrix/DiversityMatrix';
import QuestionnaireA1 from './src/ComplianceParadigm/screens/Questionnaire/QuestionnaireA1';
import InclusionOmeter from './src/ComplianceParadigm/screens/InclusionOmeter/InclusionOmeter';
import Questions from './src/ComplianceParadigm/screens/Questions/Questions';
import Profile from './src/QuestionnaireParadigms/screens/Profile/Profile';
import Setting from './src/QuestionnaireParadigms/screens/Setting/Setting';
import EditProfile from './src/QuestionnaireParadigms/screens/EditProfile/EditProfile';
import PaymentFor from './src/ComplianceParadigm/screens/PaymentFor/PaymentFor';
import PerceptionQuestionnaire from './src/ComplianceParadigm/screens/PerceptionQuestionnaire/PerceptionQuestionnaire';
import EditPassword from './src/QuestionnaireParadigms/screens/EditPassword/EditPassword';
// import PerceptionReportFormScreen from '@ComplianceParadigmScreens/PerceptionReportForm/PerceptionReportFormScreen'
import Splash from './src/screens/splash/splash';
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
  // 
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
      <Navigator />
    </AuthProvider>
  );
}
