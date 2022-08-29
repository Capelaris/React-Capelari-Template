import * as React from 'react';
import { Animated, Pressable, Text, View } from 'react-native';
import { Typography, Spacing, Mixins, Colors } from '_styles';
import { Icons } from '_assets';

class SocialButton extends React.Component {
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
                            Colors.COMPONENTS.socialButton[this.props.from],
                            {
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: this.state.color.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [
                                        Colors.COMPONENTS.socialButton[this.props.from].backgroundColor,
                                        Colors.COMPONENTS.socialButton[this.props.from].pressBackground,
                                    ],
                                }),
                                aspectRatio: this.props.type == 'onlyLogo' ? (1 / 1) : undefined,
                                width: this.props.type == 'onlyLogo' ? 50 : this.props.style.width,
                                marginHorizontal: this.props.type == 'onlyLogo' ? (Spacing.HORIZONTAL_GAP_COL / 2) : this.props.style.marginHorizontal,
                            },
                            this.props.disabled ? Colors.COMPONENTS.socialButton.disabled : Colors.COMPONENTS.socialButton.enabled,
                            Spacing.BR_100,
                        ]}
                    >
                        {this.props.from == 'apple' ?
                            <Icons.AppleLogo size={30} color={Colors.COMPONENTS.socialButton[this.props.from].color} />
                        : this.props.from == 'facebook' ?
                            <Icons.FacebookLogo size={30} color={Colors.COMPONENTS.socialButton[this.props.from].color} />
                        : this.props.from == 'google' ?
                            <Icons.GoogleLogo size={30} color={Colors.COMPONENTS.socialButton[this.props.from].color} />
                        :
                        null}
                        
                    </Animated.View>
                </Pressable>
            </View>
        );
    }
}

export default SocialButton;