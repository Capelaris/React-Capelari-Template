import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
    LoginScreen
} from '_scenes/user';

const User = createNativeStackNavigator();

class UserStack extends React.Component {
	constructor(props) {
		super(props);
	}
	
	render() {
		return (
            <User.Navigator
                initialRouteName={'LoginScreen'}
                screenOptions={{
                    contentStyle: {
                        width: '100%',
                    },
                    lazy: false,
                    orientation : 'portrait',
                    /*header: (props) => (
                        <Molecules.HeaderNavigation {...props} showBackButton={true} filter={this.state.activeFilter} navigationControl={this.props.navigation} />
                    ),*/
                }}
            >
                <User.Screen
                    name={'LoginScreen'}
                    options={{
                        title      : "Login",
                        headerShown: false,
                    }}
                    component={LoginScreen}
                />
            </User.Navigator>
		);
	}
}

export default UserStack;
export { User };