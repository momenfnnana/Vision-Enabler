import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import BottomIcon from './BottomIcon';
import Home from '@MainFlow/Home/Home';
import ChooseQuestionnaire from '@QuestionsAuthFlow/ChooseQuestionnaire/ChooseQuestionnaire';
import Setting from '@QuestionsAuthFlow/Setting/Setting';

const Tab = createMaterialBottomTabNavigator();
const BottomHome = () => {
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
            }} name="ChooseQuestionainer" component={ChooseQuestionnaire} />
            <Tab.Screen options={{
                tabBarLabel: null,
                tabBarIcon: ({ color }) => (<BottomIcon src={require('@Assets/images/settingsTab.png')} />),
                tabBarColor: "#000"
            }} name="Setting" component={Setting} />
        </Tab.Navigator>
    )
}
export default BottomHome