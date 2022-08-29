import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '_styles';
import {
    HomeScreen,
} from '_scenes/home';
import {
    LayoutStack,
    ComponentsStack,
    StyleStack,
    UserStack,
} from './flow_stacks';

const Tab = createBottomTabNavigator();

class RootNavigator extends React.Component {
	constructor(props) {
		super(props);

		this.navigation = React.createRef(null);
		this.navigate = this.navigate.bind(this);
	}

	navigate(screen) {
		this.navigation.navigate(screen);
	}

	render() {
		return (
            <NavigationContainer
                ref={ref => this.navigation = ref}
                theme={Colors.COMPONENTS.navigation.theme}
            >
                <Tab.Navigator
                    initialRouteName={'Home'}
                    screenOptions={{
                        tabBarActiveTintColor: Colors.DEFAULT_FOCUS_COLOR,
                        tabBarInactiveTintColor: Colors.DEFAULT_BORDER_COLOR,
                        tabBarActiveBackgroundColor: Colors.WHITE,
                        tabBarInactiveBackgroundColor: Colors.WHITE,
                        lazy: false,
                        headerShown: false,
                    }}
                >
                    <Tab.Screen 
                        name="Home"
                        component={HomeScreen}
                        options={{
                            headerShown: true,
                            title: 'Início',
                        }}
                    />
                    <Tab.Screen 
                        name="Layout"
                        component={LayoutStack}
                    />
                    <Tab.Screen 
                        name="Components"
                        component={ComponentsStack}
                    />
                    <Tab.Screen 
                        name="Style"
                        component={StyleStack}
                    />
                    <Tab.Screen 
                        name="User"
                        component={UserStack}
                    />
                </Tab.Navigator>
            </NavigationContainer>
		);
	}
}

export default RootNavigator;