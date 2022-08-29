import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import React from 'react';
import { Typography, Colors } from '_styles';
import RootNavigator from '_navigations';
import { LoginScreen } from '_scenes/user';
import { GlobalContext } from '_services';
import { Contexts } from '_services';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
        }
    }

    componentDidMount() {
        this._loadAppStyles();
    }

    async _loadAppStyles() {
        try {
            await SplashScreen.preventAutoHideAsync();
            await Font.loadAsync(Typography.FONTS_TO_LOAD);
        } catch (e) {
            console.warn(e);
        } finally {
            await SplashScreen.hideAsync();
            this.setState({
                isLoaded: true,
            });
        }
    }

    render() {
        return this.state.isLoaded ?
            <Contexts.User.UserContext.Consumer>
                {({ user }) => (
                    <GlobalContext>
                        <SafeAreaView
                            style={{
                                flex: 1,
                            }}
                        >
                            <StatusBar backgroundColor={Colors.PRIMARY} translucent style={Colors.STATUS_BAR_STYLE}/>
                            {user !== null ? <LoginScreen /> : <RootNavigator />}
                        </SafeAreaView>
                    </GlobalContext>
                )}
            </Contexts.User.UserContext.Consumer>
        : null;
    }
}

export default App;