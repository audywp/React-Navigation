import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text} from 'react-native';
import Home from '../Features/Home/Home';
import About from '../Features/About/About';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function Navigation({navigation, route}) {
  console.log(route);
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen
        name="AboutScreen"
        component={About}
        options={{
          headerShown: true,
          title: 'About Ajah',
          headerTitleAlign: 'center',
          headerTintColor: 'red',
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate('HomeScreen')}>
                <Text>Humberger</Text>
              </TouchableOpacity>
            );
          },
        }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
