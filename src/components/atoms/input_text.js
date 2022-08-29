import * as React from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { Typography, Spacing, Mixins, Colors } from '_styles';
import { Icons } from '_assets';

class InputText extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value ?? '',
            focused: false,
        }

        this.input = React.createRef();

        this.focus = this.focus.bind(this);
    }

    getText() {
        return this.state.value;
    }

    focus() {
        this.input.current.focus();
    }

    render() {
        return (
            <View
                {...{
                    style: {
                        width: '100%',
                        ...this.props.viewStyle,
                    }
                }}
            >
                {this.props.label ?
                    <Text
                        style={[
                            {
                                width: '100%',
                                marginBottom: Mixins.scaleSize(2),
                            },
                            this.props.disabled ? Colors.COMPONENTS.label.disabled : Colors.COMPONENTS.label.enabled,
                            Typography.CALLOUT,
                        ]}
                    >
                        {this.props.label}
                    </Text>
                : null}
                <Pressable
                    {...{
                        style: [
                            this.props.disabled ? Colors.COMPONENTS.inputText.disabled : Colors.COMPONENTS.inputText.enabled,
                            {
                                paddingVertical: 8,
                                paddingHorizontal: (['valid', 'invalid'].includes(this.props.style) || this.state.focused) ? 12 : 13,
                                marginVertical: (['valid', 'invalid'].includes(this.props.style) || this.state.focused) ? 0 : 1,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'flex-start',
                                borderWidth: (['valid', 'invalid'].includes(this.props.style) || this.state.focused) ? 2 : 1,
                            },
                            this.state.focused ? {borderColor: Colors.PRIMARY} : this.props.style == 'valid' ? {borderColor: Colors.SUCCESS} : this.props.style == 'invalid' ? {borderColor: Colors.ERROR} : {},
                            Spacing.BR_100,
                            this.props.style,
                        ],
                        onPress: () => this.input.focus()
                    }}
                >
                    <TextInput
                        {...{
                            ...this.props,
                            ...{
                                placeholderTextColor: Colors.DEFAULT_BORDER_COLOR,
                                style: {
                                    ...{
                                        ...Typography.BODY,
                                        flex: 1,
                                        color: Colors.DEFAULT_TEXT_COLOR,
                                    },
                                },
                                ref: this.input,
                                editable: this.props.disabled ? false : true,
                                onFocus: () => {
                                    this.setState({
                                        focused: true,
                                    });
                                },
                                onBlur: () => {
                                    this.setState({
                                        focused: false,
                                    });
                                },
                                onChangeText: (value) => {
                                    this.setState({
                                        value: value,
                                    });
                                    if (this.props.setValue) {
                                        this.props.setValue(value);
                                    }
                                },
                            }
                        }}
                    />
                    {this.props.style == 'invalid' ?
                        <View
                            style={{
                                height: 29,
                                width: 41,
                                paddingLeft: 12,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Icons.Invalid size={20} color={Colors.ERROR} />
                        </View>
                    : this.props.style == 'valid' ?
                        <View
                            style={{
                                height: 29,
                                width: 41,
                                paddingLeft: 12,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Icons.Valid size={20} color={Colors.SUCCESS} />
                        </View>
                    : null}
                </Pressable>
                <View
                    style={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row-reverse',
                    }}
                >
                    {this.props.charCount ?
                        <Text
                            style={[
                                {
                                    color: this.props.style == 'invalid' ? Colors.ERROR : Colors.DEFAULT_BORDER_COLOR,
                                    marginTop: Mixins.scaleSize(2),
                                },
                                Typography.CAPTION_1,
                            ]}
                        >
                            {this.props.maxLength > 0 ?
                                this.state.value.length + '/' + this.props.maxLength
                            : this.state.value.length}
                        </Text>
                    : null
                    }
                    {this.props.helper ?
                        <Text
                            style={[
                                {
                                    color: this.props.style == 'invalid' ? Colors.ERROR : Colors.DEFAULT_BORDER_COLOR,
                                    flex: 1,
                                    marginTop: Mixins.scaleSize(2),
                                },
                                Typography.CAPTION_1,
                            ]}
                        >
                            {this.props.helper}
                        </Text>
                    : null}
                </View>
            </View>
        );
    }
}

export default InputText;