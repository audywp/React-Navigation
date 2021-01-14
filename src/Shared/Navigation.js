import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// MainComponent
import Login from '../Features/Login/Login';

// Router
import {BottomTabs} from '../Features/BottomTab/Router';

const Stack = createStackNavigator();

export default function Navigation({navigation, route}) {
  console.log(route);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Main"
        component={BottomTabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
