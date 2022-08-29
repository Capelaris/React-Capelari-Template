import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { Atoms } from '_components';
import { Spacing } from '_styles';

class IllnessListScreen extends React.Component {
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
                                this.props.navigation.navigate('ButtonsScreen')
                            }}
                            title={'Botões'}
                        />
                        <Atoms.Card
                            style={[Spacing.BS_COL_4]}
                            onPress={() => {
                                this.props.navigation.navigate('CardsScreen')
                            }}
                            title={'Cartões'}
                        />
                        <Atoms.Card
                            style={[Spacing.BS_COL_4]}
                            onPress={() => {
                                this.props.navigation.navigate('CodesScreen')
                            }}
                            title={'Códigos'}
                        />
                        <Atoms.Card
                            style={[Spacing.BS_COL_4]}
                            onPress={() => {
                                this.props.navigation.navigate('DividersScreen')
                            }}
                            title={'Divisas'}
                        />
                        <Atoms.Card
                            style={[Spacing.BS_COL_4]}
                            onPress={() => {
                                this.props.navigation.navigate('InputsScreen')
                            }}
                            title={'Entradas de Dados'}
                        />
                        <Atoms.Card
                            style={[Spacing.BS_COL_4]}
                            onPress={() => {
                                this.props.navigation.navigate('LinksScreen')
                            }}
                            title={'Links'}
                        />
                        <Atoms.Card
                            style={[Spacing.BS_COL_4]}
                            onPress={() => {
                                this.props.navigation.navigate('LoadingsScreen')
                            }}
                            title={'Carregamentos'}
                        />
                        <Atoms.Card
                            style={[Spacing.BS_COL_4]}
                            onPress={() => {
                                this.props.navigation.navigate('SocialButtonsScreen')
                            }}
                            title={'Botões Sociais'}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default IllnessListScreen;