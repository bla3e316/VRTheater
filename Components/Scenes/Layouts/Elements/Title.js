import React from 'react';
import {
    Text,
    View,
    Animated
} from 'react-vr';
import { Easing } from 'react-native';

//Element
class Title extends React.Component {
    constructor() {
        super();
        this.state = {
            fade: new Animated.Value(0),
            slide: new Animated.Value(0)
        };
    }

    componentDidMount() {
        this.state.fade.setValue(1);
        this.state.slide.setValue(1.5);
        Animated.sequence([
            Animated.timing(
                this.state.fade,
                {
                    toValue: 0,
                    duration: 4000,
                    easing: Easing.ease
                }
            ),
            Animated.stagger(500, [
                Animated.timing(
                    this.state.fade,
                    {
                        toValue: 1,
                        duration: 2000,
                        easing: Easing.ease
                    }
                ),
                Animated.timing(
                    this.state.slide,
                    {
                        toValue: 0,
                        duration: 2000,
                        easing: Easing.ease
                    }
                )
            ])

        ]).start();
    }

    render() {
        return (
            <View style={{ margin: 0.1, height: 0.5}}>
                <Animated.Text
                    style={{
                        fontSize: 0.5,
                        opacity: this.state.fade,
                        fontWeight: '400',
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        transform: [
                            {translateY: this.state.slide}
                        ]
                    }}>
                    {this.props.text}
                </Animated.Text>
            </View>
        )
    }
}

module.exports = Title;
