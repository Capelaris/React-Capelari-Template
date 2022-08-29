import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { Atoms } from '_components';
import { Spacing } from '_styles';

class LayoutListScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={{flex: 1}}>
                <View style={Spacing.BS_COLUMN}>
                    <View style={[Spacing.BS_ROW]}>
                        <Atoms.Card
                            style={[Spacing.BS_COL_4]}
                            onPress={() => {
                                this.props.navigation.navigate('GridLayoutScreen')
                            }}
                            title={'Grid Layout'}
                            description={'Guia de como funciona o sistema de Layout em grid (sistema parecido com o Bootstrap)'}
                        />
                        <Atoms.Card
                            style={[Spacing.BS_COL_4]}
                            onPress={() => {
                                this.props.navigation.navigate('BordersScreen')
                            }}
                            title={'Bordas'}
                            description={'A padronização do sistema de bordas'}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default LayoutListScreen;