import * as React from 'react';

import { default as UserContextProvider } from './user';
import * as User from './user';

class GlobalContext extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <UserContextProvider>
                {this.props.children}
            </UserContextProvider>
        );
    }
}

export default GlobalContext;
export {
    User
};