import * as React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Atoms } from '_components';
import { Spacing, Typography, Colors } from '_styles';

class GridLayoutScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={{flex: 1}}>
                <View style={Spacing.BS_COLUMN}>
                    <View style={[Spacing.BS_ROW]}>
                        <Text style={[Spacing.BS_COL_4, Typography.TITLE_2]}>Grid Layout</Text>
                        <Text style={[Spacing.BS_COL_4, Typography.BODY]}>
                            O sistema de Grid Layout foi desenvolvido com base no sistema do bootstrap,
                            mas adaptado para a versão mobile. {'\n'}

                            O sistema consiste de três tipos de componentes: Container, Row e Column.
                        </Text>
                        <Text style={[Spacing.BS_COL_4, Typography.TITLE_3]}>{'\n\n'}Container</Text>
                        <Text style={[Spacing.BS_COL_4, Typography.BODY]}>
                            O Container é o primeiro a ser colocado, consiste basicamente de uma margem
                            vertical ao lado esquerdo e direito, com comprimento padronizado, a qual tem
                            por finalidade limitar as bordas da tela, para que os componentes nao fiquem
                            colados aos lados, para que o usuário veja que nenhuma informação está escondida.
                        </Text>
                        <Atoms.Code style={[Spacing.BS_COL_4]}>
                            width: {Spacing.HORIZONTAL_MARGIN + '\n'}
                            height: 100%
                        </Atoms.Code>
                    </View>
                </View>
                <View style={[Spacing.BS_ROW, {backgroundColor: Colors.PRIMARY}]}>
                    <View style={[Spacing.BS_COL_4, {backgroundColor: Colors.BACKGROUND_COLOR, height: 50, marginVertical: 0}]}></View>
                </View>
                <View style={Spacing.BS_COLUMN}>
                    <View style={[Spacing.BS_ROW]}>
                        <Text style={[Spacing.BS_COL_4, Typography.TITLE_3]}>{'\n\n'}Row</Text>
                        <Text style={[Spacing.BS_COL_4, Typography.BODY]}>
                            A Row vem após o Container, e tem uma margem horizontal encima e em baixo, com
                            altura padronizada de acordo com a estilização, e tem como finalidade limitar
                            as bordas superiores e inferiores de cada linha, para que os componentes nao fiquem
                            colados na parte superior e inferior.
                        </Text>
                        <Atoms.Code style={[Spacing.BS_COL_4]}>
                            width: 100%{'\n'}
                            height: {Spacing.HORIZONTAL_MARGIN}
                        </Atoms.Code>
                    </View>
                </View>
                <View style={[Spacing.BS_COLUMN, {backgroundColor: Colors.PRIMARY}]}>
                    <View style={[{width: '100%', backgroundColor: Colors.BACKGROUND_COLOR, height: 50, marginVertical: 0}]}></View>
                </View>
                <View style={Spacing.BS_COLUMN}>
                    <View style={[Spacing.BS_ROW]}>
                        <Text style={[Spacing.BS_COL_4, Typography.TITLE_3]}>{'\n\n'}Column</Text>
                        <Text style={[Spacing.BS_COL_4, Typography.BODY]}>
                            A Column vem após a Row, e funciona de um jeito um pouco mais dinâmico,
                            ela basicamente vai preencher a Row, mas pode ser subdividida em até 4
                            partes iguais, e pra cada parte, vai haver um distanciamento padrão entre
                            as partes. E cada uma dessas partes podem ser divididas em até 2 partes iguais
                        </Text>
                        <Atoms.Code style={[Spacing.BS_COL_4]}>
                            width: {Spacing.COL_WIDTH + '\n'}
                            height: AUTO
                        </Atoms.Code>
                    </View>
                </View>
                <View style={[Spacing.BS_COLUMN]}>
                    <View style={[Spacing.BS_ROW]}>
                        <View style={[Spacing.BS_COL_1, {backgroundColor: Colors.PRIMARY, height: 50}]}></View>
                        <View style={[Spacing.BS_COL_1, {backgroundColor: Colors.PRIMARY_LIGHT, height: 50}]}></View>
                        <View style={[Spacing.BS_COL_1, {backgroundColor: Colors.PRIMARY, height: 50}]}></View>
                        <View style={[Spacing.BS_COL_1, {backgroundColor: Colors.PRIMARY_LIGHT, height: 50}]}></View>
                        <View style={[Spacing.BS_COL_2, {backgroundColor: Colors.PRIMARY, height: 50}]}></View>
                        <View style={[Spacing.BS_COL_2, {backgroundColor: Colors.PRIMARY_LIGHT, height: 50}]}></View>
                        <View style={[Spacing.BS_COL_1, {backgroundColor: Colors.PRIMARY, height: 50}]}></View>
                        <View style={[Spacing.BS_COL_3, {backgroundColor: Colors.PRIMARY_LIGHT, height: 50}]}></View>
                        <View style={[Spacing.BS_COL_3, {backgroundColor: Colors.PRIMARY_LIGHT, height: 50}]}></View>
                        <View style={[Spacing.BS_COL_1, {backgroundColor: Colors.PRIMARY, height: 50}]}></View>
                        <View style={[Spacing.BS_COL_0_5, {backgroundColor: Colors.PRIMARY_LIGHT, height: 50}]}></View>
                        <View style={[Spacing.BS_COL_0_5, {backgroundColor: Colors.PRIMARY_LIGHT, height: 50}]}></View>
                        <View style={[Spacing.BS_COL_2, {backgroundColor: Colors.PRIMARY, height: 50}]}></View>
                        <View style={[Spacing.BS_COL_0_5, {backgroundColor: Colors.PRIMARY_LIGHT, height: 50}]}></View>
                        <View style={[Spacing.BS_COL_0_5, {backgroundColor: Colors.PRIMARY_LIGHT, height: 50}]}></View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default GridLayoutScreen;