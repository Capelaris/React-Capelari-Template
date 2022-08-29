import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    ComponentsListScreen,
    ButtonsScreen,
    CardsScreen,
    CodesScreen,
    DividersScreen,
    InputsScreen,
    LinksScreen,
    LoadingsScreen,
    SocialButtonsScreen,
} from '_scenes/components';

const Components = createNativeStackNavigator();

class ComponentsStack extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
            <Components.Navigator
                initialRouteName={'ComponentsListScreen'}
                screenOptions={{
                    contentStyle: {
                        width: '100%',
                    },
                    lazy        : false,
                    orientation : 'portrait',
                }}
            >
                <Components.Screen
                    options={{
                        title: 'Componentes',
                    }}
                    name={'ComponentsListScreen'}
                    component={ComponentsListScreen}
                />
                <Components.Screen
                    options={{
                        title: 'Botões',
                    }}
                    name={'ButtonsScreen'}
                    component={ButtonsScreen}
                />
                <Components.Screen
                    options={{
                        title: 'Cartões',
                    }}
                    name={'CardsScreen'}
                    component={CardsScreen}
                />
                <Components.Screen
                    options={{
                        title: 'Códigos',
                    }}
                    name={'CodesScreen'}
                    component={CodesScreen}
                />
                <Components.Screen
                    options={{
                        title: 'Divisas',
                    }}
                    name={'DividersScreen'}
                    component={DividersScreen}
                />
                <Components.Screen
                    options={{
                        title: 'Entradas de Dados',
                    }}
                    name={'InputsScreen'}
                    component={InputsScreen}
                />
                <Components.Screen
                    options={{
                        title: 'Links',
                    }}
                    name={'LinksScreen'}
                    component={LinksScreen}
                />
                <Components.Screen
                    options={{
                        title: 'Carregamentos',
                    }}
                    name={'LoadingsScreen'}
                    component={LoadingsScreen}
                />
                <Components.Screen
                    options={{
                        title: 'Botões Sociais',
                    }}
                    name={'SocialButtonsScreen'}
                    component={SocialButtonsScreen}
                />
            </Components.Navigator>
		);
	}
}

export default ComponentsStack;
export { Components };