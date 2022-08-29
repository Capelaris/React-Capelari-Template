import * as React from 'react';
import { Image, View } from 'react-native';

class ContainImage extends React.Component {
    constructor(props) {
        super(props);

        const { width, height } = Image.resolveAssetSource(this.props.source);

        this.state = {
            aspectRatio: width / height,
        }
    }

    render() {
        return (
            <View
                {...{
                    style: {
                        width: '100%',
                        flexDirection: 'row',
                        ...this.props.style,
                    },
                    ...this.props,
                }}
            >
                <Image source={this.props.source} style={{flex: 1, resizeMode: 'contain', aspectRatio: this.state.aspectRatio}}  />
            </View>
        );
    }
}

export default ContainImage;