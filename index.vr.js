import React from 'react';
import MainMenu from './Components/Scenes/MainMenu';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';

export default class VRTheater extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('night.jpg')}/>
        <MainMenu/>
      </View>
    );
  }
};

AppRegistry.registerComponent('VRTheater', () => VRTheater);
