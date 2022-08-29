import * as React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Atoms } from '_components';
import { Spacing, Typography, Colors } from '_styles';

class LinksScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={{flex: 1}}>
                <View style={Spacing.BS_COLUMN}>
                    <View style={[Spacing.BS_ROW]}>
                        <Text style={[Spacing.BS_COL_4, Typography.TITLE_2]}>Links</Text>
                        <Text style={[Spacing.BS_COL_4, Typography.BODY]}>
                           
                        </Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default LinksScreen;