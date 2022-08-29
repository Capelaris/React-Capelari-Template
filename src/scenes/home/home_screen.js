import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { Atoms } from '_components';
import { Spacing } from '_styles';

class HomeScreen extends React.Component {
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
                                this.props.navigation.navigate('Layout')
                            }}
                            title={'Layout'}
                            description={'Algumas métricas utilizadas pelo app para definições de Layout'}
                        />
                        <Atoms.Card
                            style={[Spacing.BS_COL_4]}
                            onPress={() => {
                                this.props.navigation.navigate('Components')
                            }}
                            title={'Componentes'}
                            description={'Componentes padrões do sistema, para agilizar o serviço'}
                        />
                        <Atoms.Card
                            style={[Spacing.BS_COL_4]}
                            onPress={() => {
                                this.props.navigation.navigate('Style')
                            }}
                            title={'Estilização'}
                            description={'Configurações de estilização do app'}
                        />
                        <Atoms.Card
                            style={[Spacing.BS_COL_4]}
                            onPress={() => {
                                this.props.navigation.navigate('User')
                            }}
                            title={'Usuário'}
                            description={'Tela de Login e Registro feitas como exemplo da framework'}
                        />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default HomeScreen;