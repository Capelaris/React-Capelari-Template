import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    StyleListScreen,
} from '_scenes/style';

const Style = createNativeStackNavigator();

class StyleStack extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
            <Style.Navigator
                initialRouteName={'StyleListScreen'}
                screenOptions={{
                    contentStyle: {
                        width: '100%',
                        
                    },
                    lazy        : false,
                    orientation : 'portrait',
                }}
            >
                <Style.Screen
                    options={{
                        title: 'Estilos',
                    }}
                    name={'StyleListScreen'}
                    component={StyleListScreen}
                />
            </Style.Navigator>
		);
	}
}

export default StyleStack;
export { Style };