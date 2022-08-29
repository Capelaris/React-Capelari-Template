import * as React from 'react';
import { ScrollView, View } from 'react-native';
import { Atoms } from '_components';
import { Spacing } from '_styles';

class StyleListScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={{flex: 1}}>
                <View style={Spacing.BS_COLUMN}>
                    <View style={[Spacing.BS_ROW]}>
                        <Atoms.Card style={[Spacing.BS_COL_4]} onPress={() => {this.props.navigation.navigate('DefeitosRefrativosScreen')}} title={'Defeitos Refrativos'} description={'São as doenças como miopia, hipermetropia ou astigmatismo, ou seja, aquelas que levam a uma visão deficiente devido à desfocagem dos objetos na retina.'} />
                        <Atoms.Card style={[Spacing.BS_COL_4]} onPress={() => {}} title={'Miopia'} description={'Erro refrativo bastante comum em que os olhos podem ver nitidamente de perto, mas não são capazes de enxergar claramente os objetos que estão longe.'} />
                        <Atoms.Card style={[Spacing.BS_COL_4]} onPress={() => {}} title={'Hipermetropia'} description={'Erro de refração que faz com que a imagem seja focada atrás da retina. Isso causa dificuldade para enxergar o que está mais próximo dos olhos.'} />
                        <Atoms.Card style={[Spacing.BS_COL_4]} onPress={() => {}} title={'Astigmatismo'} description={'Tipo de grau/erro refrativo, num determinado eixo causado por uma alteração na curvatura da córnea'} />
                        <Atoms.Card style={[Spacing.BS_COL_4]} onPress={() => {}} title={'Presbiopia (Vista Cansada)'} description={'Problema de visão que faz parte do envelhecimento natural dos olhos.'} />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default StyleListScreen;