import * as React from 'react';
import { Animated, Pressable, Text, View } from 'react-native';
import { Typography, Spacing, Mixins, Colors } from '_styles';

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: new Animated.Value(0),
        }
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
                <Pressable
                    style={{width: '100%'}}
                    onPressIn={() => {
                        if (!this.props.disabled) {
                            Animated.timing(this.state.color, {
                                toValue        : 1,
                                duration       : 100,
                                useNativeDriver: false,
                            }).start();
                        }
                    }}
                    onPressOut={() => {
                        if (!this.props.disabled) {
                            Animated.timing(this.state.color, {
                                toValue        : 0,
                                duration       : 100,
                                useNativeDriver: false,
                            }).start();

                            if (this.props.onPress) {
                                this.props.onPress();
                            }
                        }
                    }}
                >
                    <Animated.View
                        style={[
                            {
                                paddingHorizontal: Mixins.scaleSize(24),
                                paddingVertical: Mixins.scaleSize(16),
                                backgroundColor: this.state.color.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [
                                        Colors.COMPONENTS.button[this.props.type ?? 'primary'].backgroundColor,
                                        Colors.COMPONENTS.button[this.props.type ?? 'primary'].pressBackground,
                                    ],
                                }),
                                borderColor: Colors.COMPONENTS.button[this.props.type ?? 'primary'].borderColor,
                                borderWidth: Colors.COMPONENTS.button[this.props.type ?? 'primary'].borderWidth,
                            },
                            this.props.disabled ? Colors.COMPONENTS.button.disabled : Colors.COMPONENTS.button.enabled,
                            Spacing.BR_100,
                        ]}
                    >
                        <Text style={[
                            {
                                color: Colors.COMPONENTS.button[this.props.type ?? 'primary'].color,
                                textAlign: 'center'
                            },
                            Typography.BUTTON,
                        ]}>
                            {this.props.label}
                        </Text>
                    </Animated.View>
                </Pressable>
            </View>
        );
    }
}

export default Button;