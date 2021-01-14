import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Header from '../../../Shared/Component/Header';

const About = () => {
  return (
    <View>
      <Header title="About" />
      <Text>About</Text>
      <TouchableOpacity>
        <Text>Move To Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default About;
