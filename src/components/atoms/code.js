import * as React from 'react';
import { Text, View } from 'react-native';
import { Colors, Typography } from '_styles';

class Code extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View
                style={[
                    Colors.COMPONENTS.code.style,
                    this.props.style,
                ]}
            >
                <Text style={[Typography.CODE]}>
                    {this.props.children}
                </Text>
            </View>
        );
    }
}

export default Code;