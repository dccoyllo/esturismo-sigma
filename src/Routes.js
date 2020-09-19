import React, { Component } from 'react';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import './layout/layout.scss';
import './App.scss';
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
