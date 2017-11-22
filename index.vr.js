import React from 'react';
import MainMenu from './Components/Scenes/MainMenu';
import MovieTheater from './Components/Scenes/MovieTheater';
import {
    AppRegistry,
    asset,
    Pano,
    Text,
    View,
    Sound,
    Video,
    VideoPano
} from 'react-vr';

export default class VRTheater extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('night.jpg')}>
          {/*<VideoPano*/}
          {/*source ={*/}
            {/*asset('',*/}
                {/*{format: 'mp4', layout: 'SPHERE'}*/}
                {/*)*/}
            {/*}*/}
          {/*>*/}
          <Sound
            volume={0.8}
            loop = {true}
            source = {{mp3: asset('forest.mp3')}}
          />
          {/*</VideoPano>*/}
        </Pano>
        {/*<MainMenu/>*/}
        <MovieTheater/>
      </View>
    );
  }
};

AppRegistry.registerComponent('VRTheater', () => VRTheater);
