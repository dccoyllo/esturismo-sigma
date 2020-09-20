import React, { Component } from 'react';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';

export class Registrate extends Component {
   

    render() {
        return (
            <div>
                <div className="p-grid p-pt-4">
                    <div className="p-col-12 p-sm-6 p-xl-4 p-p-3 p-shadow-8">
                        <h4 className="p-text-center">Registrate</h4>
                        <div className="p-fluid">
                            <div className="p-field">
                                <label htmlFor="firstname1">Nombre</label>
                                <InputText id="firstname1" type="text" />
                            </div>
                            <div className="p-field">
                                <label htmlFor="firstname1">Apellido</label>
                                <InputText id="firstname1" type="text" />
                            </div>
                            <div className="p-field">
                                <label htmlFor="firstname1">Email</label>
                                <InputText id="firstname1" type="text" />
                            </div>
                            <div className="p-field">
                                <label htmlFor="lastname1">Password</label>
                                <InputText id="lastname1" type="password" />
                            </div>
                            <div className="p-field">
                                <Button id="lastname1" type="button" label="Registrar" />

                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Registrate
