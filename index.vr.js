import React from 'react';
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
import MainMenu from './Components/Scenes/MainMenu';
import MovieTheater from './Components/Scenes/MovieTheater';
import SceneSelect from './Components/Scenes/SceneSelect';

export default class VRTheater extends React.Component {
    constructor() {
        super();
        this.state={mainMenu: true, sceneSelect: false};
    }


    updateScene(scene) {
        switch(scene) {
            case 2:
                this.setState({ mainMenu: false, sceneSelect: true});
                break;
            case 3:
                this.setState({ mainMenu: false, sceneSelect: false});
                break;
        }
    }

    render() {
        const mainMenu = this.state.mainMenu;
        const sceneSelect = this.state.sceneSelect;
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
                {
                    mainMenu ? (
                        <MainMenu text={"Movie Theater"}
                                  buttonText={"Select a Movie"}
                                  updateScene={this.updateScene.bind(this)}
                                  scene={1}
                        />
                    ) : (
                        sceneSelect ? (
                            <SceneSelect text={"Scene Select"}
                                         buttonText={"Fireplace"}
                                         updateScene={this.updateScene.bind(this)}
                                         scene={2}
                            />
                        ) : (
                            <MovieTheater/>
                        )
                    )
                }
            </View>
        );
    }
};

AppRegistry.registerComponent('VRTheater', () => VRTheater);
