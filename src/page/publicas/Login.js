import React, { Component } from 'react';

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
export class Login extends Component {

    render() {
        return (

            <div>
                <div className="p-d-flex p-jc-center p-mt-4">
                    <div className="p-col-12 p-sm-6 p-xl-3 p-p-3 p-shadow-8">
                        <h4 className="p-text-nowrap p-text-center p-mb-4">Iniciar Sesion</h4>
                        <div className="p-fluid">
                            <div className="p-col-12 p-md-12">
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-user"></i>
                                    </span>
                                    <InputText placeholder="Correo electrónico o teléfono" />
                                </div>
                            </div>
                            <div className="p-col-12 p-md-12">
                                <div className="p-inputgroup">
                                    <span className="p-inputgroup-addon">
                                        <i className="pi pi-unlock"></i>
                                    </span>
                                    <InputText placeholder="Constraseña" type="password" />
                                </div>
                            </div>
                            <div className="p-col-12 p-md-12 p-mt-3">
                                <Button id="lastname1" type="button" label="Ingresar" />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        );
    }
}
export default Login;