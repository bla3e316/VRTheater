import React from 'react';
import {
    Text,
    View,
    VrButton
} from 'react-vr';

//Element
class Button extends React.Component {
    render() {
        return (
            <View style={{ margin: 0.1, height: 0.3, backgroundColor: '#bb13f7'}}>
                <VrButton>
                    <Text style={{fontSize: 0.2, fontWeight: '400', textAlign: 'center'}}>
                        Select a Movie
                    </Text>
                </VrButton>
            </View>
        )
    }
}

module.exports = Button;