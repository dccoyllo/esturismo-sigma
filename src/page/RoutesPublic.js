import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Login } from './publicas/Login';
import { Registrate } from './publicas/Registrate';
import { Search } from './publicas/Search';
import { Footer } from './layout/Footer';
import {Header } from './layout/Header';




export class RoutesPublic extends Component {
    render() {
        return (
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/registrate" component={Registrate} />
                <div>
                    <Header />
                    <Route path="/search" component={Search} />
                    <Footer />
                </div>
            </Switch>
        )
    }
}

export default RoutesPublic;
