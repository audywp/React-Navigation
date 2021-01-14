import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Login(props) {
  return (
    <View>
      <TouchableOpacity onPress={() => props.navigation.navigate('Main')}>
        <Text>CLick me to login</Text>
      </TouchableOpacity>
    </View>
  );
}
