import * as React from 'react';
import { Animated, Modal, StyleSheet, Text, View } from 'react-native';
import { Typography } from '_styles';
import { Mixins, Colors, Spacing } from '_styles';

const styles = StyleSheet.create({
    ball_style: {
        width: Mixins.scaleSize(16),
        height: Mixins.scaleSize(16),
        borderRadius: Mixins.scaleSize(8),
        margin: Mixins.scaleSize(3),
    },
    ball_line: {
        flexDirection: 'row'
    },
})

class Loading extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            ball_1: new Animated.Value(1),
            ball_2: new Animated.Value(0),
            ball_3: new Animated.Value(0),
            ball_4: new Animated.Value(0),
            ball_5: new Animated.Value(0),
            ball_6: new Animated.Value(0),
            ball_7: new Animated.Value(0),
            ball_8: new Animated.Value(0),
            ball_9: new Animated.Value(1),
        }

        this.await_function = this.await_function.bind(this);
    }

    async await_function(async_function) {
        if (typeof async_function === 'function') {
            await this.setState({visible: true});
            await async_function();
            await this.setState({visible: false});
        }
    }

    animate_light(variable, delay) {
        Animated.timing(variable, {
            toValue        : 1,
            duration       : 500,
            useNativeDriver: false,
            delay          : delay,
        }).start(() => this.animate_dark(variable, 0));
    }

    animate_dark(variable, delay) {
        Animated.timing(variable, {
            toValue        : 0,
            duration       : 500,
            useNativeDriver: false,
            delay          : delay,
        }).start(() => this.animate_light(variable, 0));
    }

    componentDidMount() {
        this.animate_light(this.state.ball_1, 400);
        this.animate_light(this.state.ball_2, 300);
        this.animate_light(this.state.ball_3, 200);
        this.animate_light(this.state.ball_4, 300);
        this.animate_light(this.state.ball_5, 200);
        this.animate_light(this.state.ball_6, 100);
        this.animate_light(this.state.ball_7, 200);
        this.animate_light(this.state.ball_8, 100);
        this.animate_light(this.state.ball_9, 0);
    }

    render() {
        return (
            <View
                {...{
                    style: {
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        ...this.props.viewStyle,
                    },
                }}
            >
                <Modal
                    {...{
                        ...{
                            animationType: 'fade',
                            visible: this.state.visible,
                            transparent: true,
                        },
                        ...this.props,
                    }}
                >
                    <View
                        {...{
                            style: {
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                                position: 'relative',
                            },
                        }}
                    >
                        <View
                            style={{
                                position: 'absolute',
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                backgroundColor: Colors.BLACK_100,
                                opacity: 0.3,
                            }}
                        ></View>
                        <View
                            style={[
                                {
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    maxWidth: '75%',
                                    aspectRatio: 1 / 1,
                                    backgroundColor: Colors.WHITE,
                                    padding: Mixins.scaleSize(16),
                                },
                                Spacing.BR_200,
                            ]}
                        >
                            <View style={styles.ball_line}>
                                <Animated.View style={[
                                    {
                                        backgroundColor: this.state.ball_1.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [Colors.PRIMARY, Colors.PRIMARY_LIGHT],
                                        }),
                                    },
                                    styles.ball_style,
                                ]} />
                                <Animated.View style={[
                                    {
                                        backgroundColor: this.state.ball_2.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [Colors.PRIMARY, Colors.PRIMARY_LIGHT],
                                        }),
                                    },
                                    styles.ball_style,
                                ]} />
                                <Animated.View style={[
                                    {
                                        backgroundColor: this.state.ball_3.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [Colors.PRIMARY, Colors.PRIMARY_LIGHT],
                                        }),
                                    },
                                    styles.ball_style,
                                ]} />
                            </View>
                            <View style={styles.ball_line}>
                                <Animated.View style={[
                                    {
                                        backgroundColor: this.state.ball_4.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [Colors.PRIMARY, Colors.PRIMARY_LIGHT],
                                        }),
                                    },
                                    styles.ball_style,
                                ]} />
                                <Animated.View style={[
                                    {
                                        backgroundColor: this.state.ball_5.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [Colors.PRIMARY, Colors.PRIMARY_LIGHT],
                                        }),
                                    },
                                    styles.ball_style,
                                ]} />
                                <Animated.View style={[
                                    {
                                        backgroundColor: this.state.ball_6.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [Colors.PRIMARY, Colors.PRIMARY_LIGHT],
                                        }),
                                    },
                                    styles.ball_style,
                                ]} />
                            </View>
                            <View style={styles.ball_line}>
                                <Animated.View style={[
                                    {
                                        backgroundColor: this.state.ball_7.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [Colors.PRIMARY, Colors.PRIMARY_LIGHT],
                                        }),
                                    },
                                    styles.ball_style,
                                ]} />
                                <Animated.View style={[
                                    {
                                        backgroundColor: this.state.ball_8.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [Colors.PRIMARY, Colors.PRIMARY_LIGHT],
                                        }),
                                    },
                                    styles.ball_style,
                                ]} />
                                <Animated.View style={[
                                    {
                                        backgroundColor: this.state.ball_9.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: [Colors.PRIMARY, Colors.PRIMARY_LIGHT],
                                        }),
                                    },
                                    styles.ball_style,
                                ]} />
                            </View>
                            <Text style={Typography.HEADLINE}>Carregando</Text>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}

export default Loading;