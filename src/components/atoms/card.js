import * as React from 'react';
import { Animated, Pressable, Text, View } from 'react-native';
import { Spacing } from '_styles';
import { Typography, Mixins, Colors } from '_styles';

class Card extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            background: new Animated.Value(0),
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
                        if ((!this.props.disabled) && this.props.onPress) {
                            Animated.timing(this.state.background, {
                                toValue        : 1,
                                duration       : 100,
                                useNativeDriver: false,
                            }).start();
                        }
                    }}
                    onPressOut={() => {
                        if ((!this.props.disabled) && this.props.onPress) {
                            Animated.timing(this.state.background, {
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
                            Mixins.shadow(1),
                            {
                                backgroundColor: this.state.background.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [
                                        Colors.COMPONENTS.card.style.backgroundColor,
                                        Colors.COMPONENTS.card.style.pressBackground,
                                    ],
                                }),
                            },
                            this.props.disabled ? Colors.COMPONENTS.card.disabled : Colors.COMPONENTS.card.enabled,
                            Spacing.BR_200,
                            {overflow: 'hidden'},
                        ]}
                    >
                        {this.props.image ? 
                            <View style={{width: '100%', padding: Mixins.scaleSize(16)}}>
                                <View style={{width: '100%', aspectRatio: 1 / 1, backgroundColor: '#000000'}} />
                            </View>
                        : null}
                        {this.props.children ?
                            <View style={{
                                width: '100%',
                                padding: Mixins.scaleSize(16),
                            }}>
                                {this.props.children}
                            </View>
                        :
                            <View style={{
                                width: '100%',
                                padding: Mixins.scaleSize(12),
                            }}>
                                {this.props.title ? <Text style={[Typography.TITLE_3, {margin: Mixins.scaleSize(4)}]}>{this.props.title}</Text> : null}
                                {this.props.description ? <Text style={[Typography.FOOTNOTE, {margin: Mixins.scaleSize(4)}]}>{this.props.description}</Text> : null}
                            </View>
                        }
                    </Animated.View>
                </Pressable>
            </View>
        );
    }
}

export default Card;