import React, { Component } from 'react';
import RoutesPrivate from './page/RoutesPrivate';
import RoutesPublic from './page/RoutesPublic';
//import App from './App';
export class Routes extends Component {
    render() {
        return (
            <div>
                {/*<App />*/}
                <RoutesPrivate />
                <RoutesPublic />
            </div>
        )
    }
}

export default Routes;
