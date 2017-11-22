import React from 'react';
import MainMenu from './Components/Scenes/MainMenu';
import {
    AppRegistry,
    asset,
    Pano,
    Text,
    View,
    Sound,
    VideoPano
} from 'react-vr';

export default class VRTheater extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('night.jpg')}>
          <VideoPano
          source ={
            asset('',
                {format: 'mp4', layout: 'SPHERE'}
                )
            }
          >
          <Sound
            volume={0.8}
            loop = {true}
            source = {{mp3: asset('forest3d.mp3')}}
          />
          </VideoPano>
        </Pano>
        <MainMenu/>
      </View>
    );
  }
};

AppRegistry.registerComponent('VRTheater', () => VRTheater);
