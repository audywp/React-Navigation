import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Header from '../../Shared/Component/Header';

const Home = (props) => {
  const actionMoveToAbout = () => {
    props.navigation.navigate('AboutScreen');
  };

  return (
    <View>
      <Header title="Home" />
      <TouchableOpacity onPress={actionMoveToAbout}>
        <Text>Move To About</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
