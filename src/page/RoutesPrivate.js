import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
//import { HashRouter } from 'react-router-dom';
import { Admin } from './privadas/Admin';
export class RoutesPrivate extends Component {
    render() {
        return (
            <Switch>
                <Route path="/admin" component={Admin} />
            </Switch>
        )
    }
}
export default RoutesPrivate;
