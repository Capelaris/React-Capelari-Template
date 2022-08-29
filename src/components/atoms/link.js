import * as React from 'react';
import { Text, Animated, Pressable, Linking } from 'react-native';
import { Colors, Typography } from '_styles';

class Link extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: new Animated.Value(Colors.COMPONENTS.link.enabled.opacity),
        }
    }

    render() {
        return (
            <Pressable
                style={{width: '100%'}}
                onPressIn={() => {
                    if (!this.props.disabled) {
                        Animated.timing(this.state.color, {
                            toValue        : Colors.COMPONENTS.link.disabled.opacity,
                            duration       : 100,
                            useNativeDriver: false,
                        }).start();
                    }
                }}
                onPressOut={() => {
                    if (!this.props.disabled) {
                        Animated.timing(this.state.color, {
                            toValue        : Colors.COMPONENTS.link.enabled.opacity,
                            duration       : 100,
                            useNativeDriver: false,
                        }).start();

                        if (this.props.url && this.props.url !== '') {
                            Linking.openURL(this.props.url);
                        }
                    }
                }}
            >
                <Animated.View
                    {...{
                        style: {
                            width: '100%',
                            opacity: this.state.color,
                            ...this.props.style,
                        },
                        ...this.props,
                    }}
                >
                    <Text style={[Colors.COMPONENTS.link.style, Typography.CALLOUT]}>{this.props.label ?? this.props.url}</Text>
                </Animated.View>
            </Pressable>
        );
    }
}

export default Link;