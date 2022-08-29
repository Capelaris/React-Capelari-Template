import * as React from 'react';
import { Text, View } from 'react-native';
import { Typography, Mixins, Colors } from '_styles';

class Divider extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View
                {...{
                    style: {
                        width: '100%',
                        ...this.props.style,
                    },
                    ...this.props,
                }}
            >
                <View
                    {...{
                        style: {
                            width: '100%',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexWrap: 'nowrap',
                        },
                    }}
                >
                    <View style={{
                        flex: 1,
                        height: Mixins.scaleSize(1),
                        backgroundColor: Colors.DEFAULT_BORDER_COLOR,
                    }}></View>
                    <Text style={[
                        {
                            color: Colors.DEFAULT_BORDER_COLOR,
                            textAlign: 'center',
                            marginHorizontal: Mixins.scaleSize(16),
                            maxWidth: '80%',
                        },
                        Typography.CALLOUT,
                    ]}>
                        {this.props.label}
                    </Text>
                    <View style={{
                        flex: 1,
                        height: Mixins.scaleSize(1),
                        backgroundColor: Colors.DEFAULT_BORDER_COLOR,
                    }}></View>
                </View>
            </View>
        );
    }
}

export default Divider;