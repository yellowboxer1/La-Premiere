import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainScreen from "./screens/Main";
import FavorTeamScreen from './screens/FavorTeam';
import NotificationScreen from './screens/Notifications';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import { width, height } from "./GlobalStyles";

const Tab = createBottomTabNavigator();

function BottomTabNavigationApp() {
  return (
    <Tab.Navigator 
      initialRouteName="MainScreen"
      screenOptions={{
        tabBarStyle : {            
           backgroundColor: '#282828',
           height: height * 55,
           borderTopWidth: 0,},
        tabBarActiveTintColor: '#ffffff',
        headerShown: false,
        tabBarLabelStyle : {            
          top: height * -7,},

      }}>
      <Tab.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          title: '홈',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favor"
        component={FavorTeamScreen}
        options={{
          title: '구단',
          tabBarIcon: ({color, size}) => (
            <Icon1 name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          title: '알림',
          tabBarIcon: ({color, size}) => (
            <Icon name="notifications" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigationApp;