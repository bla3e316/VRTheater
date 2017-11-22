import React from 'react';
import {
    Text,
    View,
    Animated
} from 'react-vr';

//Element
class Title extends React.Component {
    constructor() {
        super();
        this.state = {
            slideValue: new Animated.Value(1.5)};
    }

    componentDidMount() {
        Animated.timing(
            this.state.slideValue,
            {
                toValue: 0,
                duration: 2000,
                delay: 3000
            }
        ).start();
    }

    render() {
        return (
            <View style={{ margin: 0.1, height: 0.5}}>
                <Animated.Text
                    style={{
                        fontSize: 0.5,
                        fontWeight: '400',
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        transform: [
                            {scaleY: this.state.slideValue}
                        ]
                    }}>
                    {this.props.text}
                </Animated.Text>
            </View>
        )
    }
}

module.exports = Title;
