import React from 'react';
import {View, Text} from 'react-native';

export default function Header({title}) {
  return (
    <View>
      <Text>Ini header nya {title}</Text>
    </View>
  );
}
