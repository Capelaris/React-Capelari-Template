import * as React from 'react';
import { Platform, ScrollView, StatusBar, Text, View } from 'react-native';
import { Icons } from '_assets';
import { Atoms } from '_components';
import { Spacing, Typography } from '_styles';

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    loginButton() {
        this.loading.await_function(async () => {
            return new Promise(resolve => setTimeout(resolve, 5000));
        })
    }

    render() {
        return (
            <ScrollView style={{
                flex: 1,
                marginTop: Platform.OS == 'android' ? StatusBar.currentHeight : 0,
            }}>
                <Atoms.Loading ref={(ref) => {this.loading = ref}} />
                <View style={[Spacing.BS_ROW, {justifyContent: 'center', alignItems: 'center', marginVertical: 32}]}>
                    <Icons.Logo size={150} />
                </View>
                <View style={[Spacing.BS_ROW]}>
                    <Text style={[Spacing.BS_COL_4, Typography.TITLE_1]}>Entrar</Text>
                    <Text style={[Spacing.BS_COL_4, Typography.BODY]}>Você está a alguns passos de agradar seus olhos e seu bolso</Text>
                    <Atoms.InputText
                        viewStyle={Spacing.BS_COL_4}
                        label={'E-mail'}
                        autoComplete={'email'}
                        keyboardType={'email-address'}
                        returnKeyType={'next'}
                        ref={(ref) => {this.email = ref}}
                        onSubmitEditing={() => this.password.focus()}
                    />
                    <Atoms.InputText
                        viewStyle={Spacing.BS_COL_4}
                        label={'Senha'}
                        autoComplete={'password'}
                        secureTextEntry={true}
                        ref={(ref) => {this.password = ref}}
                        onSubmitEditing={() => this.loginButton()}
                    />
                    <Atoms.Button style={[Spacing.BS_COL_4]} label={'Entrar'} onPress={() => this.loginButton()} />
                    <Atoms.Divider style={[Spacing.BS_COL_4]} label={'ou conecte-se com'} />
                </View>
                <View style={[Spacing.BS_ROW, {justifyContent: 'center', alignItems: 'center'}]}>
                    <Atoms.SocialButton style={[Spacing.BS_COL_0_75]} from={'apple'} type={'onlyLogo'} />
                    <Atoms.SocialButton style={[Spacing.BS_COL_0_75]} from={'facebook'} type={'onlyLogo'} />
                    <Atoms.SocialButton style={[Spacing.BS_COL_0_75]} from={'google'} type={'onlyLogo'} />
                </View>
                <View style={[Spacing.BS_ROW]}>
                    <Text style={[Spacing.BS_COL_4, Typography.CALLOUT, {textAlign: 'center'}]}>Ainda não possui uma conta?</Text>
                    <Atoms.Button style={[Spacing.BS_COL_4]} type={'secondary'} label={'Criar uma conta'} />
                </View>
            </ScrollView>
        );
    }
}

export default LoginScreen;