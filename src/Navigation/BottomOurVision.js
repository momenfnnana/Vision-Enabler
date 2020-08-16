import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import BottomIcon from './BottomIcon';
import OurVision from '@MainFlow/OurVision/OurVision';
import ChooseQuestionnaire from '@QuestionsAuthFlow/ChooseQuestionnaire/ChooseQuestionnaire';
import Setting from '@QuestionsAuthFlow/Setting/Setting';

const Tab = createMaterialBottomTabNavigator();
const BottomOurVision = () => {
    return (
        <Tab.Navigator inactiveColor="#000">
            <Tab.Screen
                options={{
                    tabBarLabel: null,
                    tabBarIcon: ({ color }) => (<BottomIcon src={require('@Assets/images/Home.png')} />),
                    tabBarColor: "#000"
                }} name="Home" component={OurVision} />
            <Tab.Screen options={{
                tabBarLabel: null,
                tabBarIcon: ({ color }) => (<BottomIcon src={require('@Assets/images/ChooseQuestionainer.png')} />),
                tabBarColor: "#000"
            }} name="ChooseQuestionainer" component={ChooseQuestionnaire} />
            <Tab.Screen options={{
                tabBarLabel: null,
                tabBarIcon: ({ color }) => (<BottomIcon src={require('@Assets/images/settingsTab.png')} />),
                tabBarColor: "#000"
            }} name="Setting" component={Setting} />
        </Tab.Navigator>
    )
}
export default BottomOurVision