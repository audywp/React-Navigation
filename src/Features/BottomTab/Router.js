import React from 'react';
import {View, Text} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
// component
import Home from './Home';
import About from './About/About';
import Profile from './Profile/Profile';
// icon
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BottomTab = createMaterialBottomTabNavigator();

export const BottomTabs = () => {
  return (
    <>
      <BottomTab.Navigator labeled={false} initialRouteName="Profile">
        <BottomTab.Screen
          name="AboutScreen"
          component={About}
          options={{
            tabBarIcon: () => (
              <Feather name="info" size={20} color="lightblue" />
            ),
          }}
        />
        <BottomTab.Screen
          name="HomeScreen"
          component={Home}
          options={{
            tabBarIcon: () => (
              <Feather name="home" size={20} color="lightblue" />
            ),
          }}
        />
        <BottomTab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: () => (
              <Ionicons name="person" size={20} color="lightblue" />
            ),
          }}
        />
      </BottomTab.Navigator>
    </>
  );
};
