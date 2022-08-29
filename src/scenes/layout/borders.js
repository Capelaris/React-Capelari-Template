import * as React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Atoms } from '_components';
import { Spacing, Typography, Colors } from '_styles';

class BordersScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollView style={{flex: 1}}>
                <View style={Spacing.BS_COLUMN}>
                    <View style={[Spacing.BS_ROW]}>
                        <Text style={[Spacing.BS_COL_4, Typography.TITLE_2]}>Bordas</Text>
                        <Text style={[Spacing.BS_COL_4, Typography.BODY]}>
                            O sistema de Bordas pode ser dividido em 3 partes: Espessura, Cor e Arredondamento. {'\n'}
                        </Text>
                        <Text style={[Spacing.BS_COL_4, Typography.TITLE_3]}>{'\n\n'}Espessura</Text>
                        <Text style={[Spacing.BS_COL_4, Typography.BODY]}>
                            A espessura das bordas é padrinizada em 10 tamanhos, seguindo uma constante definida
                            na estilização, indo de 0 até 16 vezes a constante.{'\n'}
                            E também é possivel definir o tamanho de cada um dos lados separadamente.
                        </Text>
                        <Atoms.Code style={[Spacing.BS_COL_4]}>
                            Constante: {Spacing.BORDER_WIDTH}
                        </Atoms.Code>
                    </View>
                </View>
                <View style={[Spacing.BS_COLUMN]}>
                    <View style={[Spacing.BS_ROW]}>
                        <View style={[Spacing.BS_COL_1]}>
                            <View style={[Spacing.BW_0, Colors.BC_PRIMARY, Colors.BACK_LIGHT, Spacing.FLEX, {height: 50}]} />
                        </View>
                        <View style={[Spacing.BS_COL_1]}>
                            <View style={[Spacing.BW_100, Colors.BC_PRIMARY, Colors.BACK_LIGHT, Spacing.FLEX, {height: 50}]} />
                        </View>
                        <View style={[Spacing.BS_COL_1]}>
                            <View style={[Spacing.BW_200, Colors.BC_PRIMARY, Colors.BACK_LIGHT, Spacing.FLEX, {height: 50}]} />
                        </View>
                        <View style={[Spacing.BS_COL_1]}>
                            <View style={[Spacing.BW_300, Colors.BC_PRIMARY, Colors.BACK_LIGHT, Spacing.FLEX, {height: 50}]} />
                        </View>
                        <View style={[Spacing.BS_COL_1]}>
                            <View style={[Spacing.BW_400, Colors.BC_PRIMARY, Colors.BACK_LIGHT, Spacing.FLEX, {height: 50}]} />
                        </View>
                        <View style={[Spacing.BS_COL_1]}>
                            <View style={[Spacing.BW_500, Colors.BC_PRIMARY, Colors.BACK_LIGHT, Spacing.FLEX, {height: 50}]} />
                        </View>
                        <View style={[Spacing.BS_COL_1]}>
                            <View style={[Spacing.BW_600, Colors.BC_PRIMARY, Colors.BACK_LIGHT, Spacing.FLEX, {height: 50}]} />
                        </View>
                        <View style={[Spacing.BS_COL_1]}>
                            <View style={[Spacing.BW_700, Colors.BC_PRIMARY, Colors.BACK_LIGHT, Spacing.FLEX, {height: 50}]} />
                        </View>
                        <View style={[Spacing.BS_COL_1]}>
                            <View style={[Spacing.BW_800, Colors.BC_PRIMARY, Colors.BACK_LIGHT, Spacing.FLEX, {height: 50}]} />
                        </View>
                        <View style={[Spacing.BS_COL_1]}>
                            <View style={[Spacing.BW_900, Colors.BC_PRIMARY, Colors.BACK_LIGHT, Spacing.FLEX, {height: 50}]} />
                        </View>
                    </View>
                </View>
                <View style={[Spacing.BS_COLUMN]}>
                    <View style={[Spacing.BS_ROW]}>
                        <View style={[Spacing.BS_COL_1]}>
                            <View style={[Spacing.BW_L_800, Colors.BC_PRIMARY, Colors.BACK_LIGHT, Spacing.FLEX, {height: 50}]} />
                        </View>
                        <View style={[Spacing.BS_COL_1]}>
                            <View style={[Spacing.BW_T_800, Colors.BC_PRIMARY, Colors.BACK_LIGHT, Spacing.FLEX, {height: 50}]} />
                        </View>
                        <View style={[Spacing.BS_COL_1]}>
                            <View style={[Spacing.BW_R_800, Colors.BC_PRIMARY, Colors.BACK_LIGHT, Spacing.FLEX, {height: 50}]} />
                        </View>
                        <View style={[Spacing.BS_COL_1]}>
                            <View style={[Spacing.BW_B_800, Colors.BC_PRIMARY, Colors.BACK_LIGHT, Spacing.FLEX, {height: 50}]} />
                        </View>
                    </View>
                </View>
                <View style={Spacing.BS_COLUMN}>
                    <View style={[Spacing.BS_ROW]}>
                        <Text style={[Spacing.BS_COL_4, Typography.TITLE_3]}>{'\n\n'}Cor</Text>
                        <Text style={[Spacing.BS_COL_4, Typography.BODY]}>
                            As cores das bordas seguem os padrões de cores definidas na estilização.
                        </Text>
                        <Atoms.Code style={[Spacing.BS_COL_4]}>
                            Default: {Colors.DEFAULT_BORDER_COLOR + '\n'}
                            Primary: {Colors.PRIMARY + '\n'}
                            Primary Dark: {Colors.PRIMARY_DARK + '\n'}
                            Primary Light: {Colors.PRIMARY_LIGHT + '\n'}
                            Success: {Colors.SUCCESS + '\n'}
                            Danger: {Colors.DANGER + '\n'}
                            Warning: {Colors.WARNING + '\n'}
                            Info: {Colors.INFO + '\n'}
                            Light: {Colors.LIGHT + '\n'}
                            Dark: {Colors.DARK}
                        </Atoms.Code>
                    </View>
                </View>
                <View style={[Spacing.BS_COLUMN]}>
                    <View style={[Spacing.BS_ROW]}>
                        <View style={[Spacing.BS_COL_1]}>
                            <View style={[Spacing.BW_800, Colors.BC_DEFAULT, Spacing.FLEX, {height: 50}]} />
                        </View>
                        <View style={[Spacing.BS_COL_1]}>
                            <View style={[Spacing.BW_800, Colors.BC_PRIMARY, Spacing.FLEX, {height: 50}]} />
                        </View>
                        <View style={[Spacing.BS_COL_1]}>
                            <View style={[Spacing.BW_800, Colors.BC_PRIMARY_DARK, Spacing.FLEX, {height: 50}]} />
                        </View>
                        <View style={[Spacing.BS_COL_1]}>
                            <View style={[Spacing.BW_800, Colors.BC_PRIMARY_LIGHT, Spacing.FLEX, {height: 50}]} />
                        </View>
                        <View style={[Spacing.BS_COL_1]}>
                            <View style={[Spacing.BW_800, Colors.BC_SUCCESS, Spacing.FLEX, {height: 50}]} />
                        </View>
                        <View style={[Spacing.BS_COL_1]}>
                            <View style={[Spacing.BW_800, Colors.BC_DANGER, Spacing.FLEX, {height: 50}]} />
                        </View>
                        <View style={[Spacing.BS_COL_1]}>
                            <View style={[Spacing.BW_800, Colors.BC_WARNING, Spacing.FLEX, {height: 50}]} />
                        </View>
                        <View style={[Spacing.BS_COL_1]}>
                            <View style={[Spacing.BW_800, Colors.BC_INFO, Spacing.FLEX, {height: 50}]} />
                        </View>
                        <View style={[Spacing.BS_COL_1]}>
                            <View style={[Spacing.BW_800, Colors.BC_LIGHT, Spacing.FLEX, {height: 50}]} />
                        </View>
                        <View style={[Spacing.BS_COL_1]}>
                            <View style={[Spacing.BW_800, Colors.BC_DARK, Spacing.FLEX, {height: 50}]} />
                        </View>
                    </View>
                </View>
                <View style={Spacing.BS_COLUMN}>
                    <View style={[Spacing.BS_ROW]}>
                        <Text style={[Spacing.BS_COL_4, Typography.TITLE_3]}>{'\n\n'}Arredondamento</Text>
                        <Text style={[Spacing.BS_COL_4, Typography.BODY]}>
                            O arredondamento é feito a partir da constante definida na estilização, e vai
                            de 0 até 16 vezes o seu valor.
                            Lembrando que assim como a espessura, o arredondamento pode ser definido individualmente.
                        </Text>
                        <Atoms.Code style={[Spacing.BS_COL_4]}>
                        Constante: {Spacing.BORDER_RADIUS}
                        </Atoms.Code>
                    </View>
                </View>
                <View style={[Spacing.BS_COLUMN]}>
                    <View style={[Spacing.BS_ROW]}>
                        <View style={[Spacing.BS_COL_1]}>
                            <View style={[Spacing.BW_500, Spacing.BR_0, Colors.BC_PRIMARY, Spacing.FLEX, {height: 50}]} />
                        </View>
                        <View style={[Spacing.BS_COL_1]}>
                            <View style={[Spacing.BW_500, Spacing.BR_100, Colors.BC_PRIMARY, Spacing.FLEX, {height: 50}]} />
                        </View>
                        <View style={[Spacing.BS_COL_1]}>
                            <View style={[Spacing.BW_500, Spacing.BR_200, Colors.BC_PRIMARY, Spacing.FLEX, {height: 50}]} />
                        </View>
                        <View style={[Spacing.BS_COL_1]}>
                            <View style={[Spacing.BW_500, Spacing.BR_300, Colors.BC_PRIMARY, Spacing.FLEX, {height: 50}]} />
                        </View>
                        <View style={[Spacing.BS_COL_1]}>
                            <View style={[Spacing.BW_500, Spacing.BR_400, Colors.BC_PRIMARY, Spacing.FLEX, {height: 70}]} />
                        </View>
                        <View style={[Spacing.BS_COL_1]}>
                            <View style={[Spacing.BW_500, Spacing.BR_500, Colors.BC_PRIMARY, Spacing.FLEX, {height: 70}]} />
                        </View>
                        <View style={[Spacing.BS_COL_1]}>
                            <View style={[Spacing.BW_500, Spacing.BR_600, Colors.BC_PRIMARY, Spacing.FLEX, {height: 70}]} />
                        </View>
                        <View style={[Spacing.BS_COL_1]}>
                            <View style={[Spacing.BW_500, Spacing.BR_700, Colors.BC_PRIMARY, Spacing.FLEX, {height: 70}]} />
                        </View>
                        <View style={[Spacing.BS_COL_2]}>
                            <View style={[Spacing.BW_500, Spacing.BR_800, Colors.BC_PRIMARY, Spacing.FLEX, {height: 140}]} />
                        </View>
                        <View style={[Spacing.BS_COL_2]}>
                            <View style={[Spacing.BW_500, Spacing.BR_900, Colors.BC_PRIMARY, Spacing.FLEX, {height: 140}]} />
                        </View>
                    </View>
                </View>
                <View style={[Spacing.BS_COLUMN]}>
                    <View style={[Spacing.BS_ROW]}>
                        <View style={[Spacing.BS_COL_1]}>
                            <View style={[Spacing.BW_500, Spacing.BR_TL_600, Colors.BC_PRIMARY, Spacing.FLEX, {height: 50}]} />
                        </View>
                        <View style={[Spacing.BS_COL_1]}>
                            <View style={[Spacing.BW_500, Spacing.BR_TR_600, Colors.BC_PRIMARY, Spacing.FLEX, {height: 50}]} />
                        </View>
                        <View style={[Spacing.BS_COL_1]}>
                            <View style={[Spacing.BW_500, Spacing.BR_BL_600, Colors.BC_PRIMARY, Spacing.FLEX, {height: 50}]} />
                        </View>
                        <View style={[Spacing.BS_COL_1]}>
                            <View style={[Spacing.BW_500, Spacing.BR_BR_600, Colors.BC_PRIMARY, Spacing.FLEX, {height: 50}]} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

export default BordersScreen;