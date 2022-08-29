import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    LayoutListScreen,
    GridLayoutScreen,
    BordersScreen,
} from '_scenes/layout';

const Layout = createNativeStackNavigator();

class LayoutStack extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
            <Layout.Navigator
                initialRouteName={'LayoutListScreen'}
                screenOptions={{
                    contentStyle: {
                        width: '100%',
                        
                    },
                    lazy        : false,
                    orientation : 'portrait',
                }}
            >
                <Layout.Screen
                    options={{
                        title: 'Layouts'
                    }}
                    name={'LayoutListScreen'}
                    component={LayoutListScreen}
                />
                <Layout.Screen
                    options={{
                        title: 'Grid Layout'
                    }}
                    name={'GridLayoutScreen'}
                    component={GridLayoutScreen}
                />
                <Layout.Screen
                    options={{
                        title: 'Bordas'
                    }}
                    name={'BordersScreen'}
                    component={BordersScreen}
                />
            </Layout.Navigator>
		);
	}
}

export default LayoutStack;
export { Layout };