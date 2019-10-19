import React, { Component } from 'react';
import { Navigation } from '../LandingPage/Navigation';
import decoration from '../../assets/Decoration.svg';
import {Link as LinkRouter} from 'react-router-dom';



export class LogIn extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <div className="log-in">
                    <div className="container">
                        <div className="log-in-header">
                            <p>Zaloguj się</p>
                            <img src={decoration} alt="" />
                        </div>

                        <form action="" className="log-in-form">
                            <div className="log-in-form-details">
                                <div className="log-in-form-mail">
                                    <label htmlFor="">Email</label>
                                    <input type="email" />
                                </div>
                                <div className="log-in-form-password">
                                    <label htmlFor="">Hasło</label>
                                    <input type="password" />
                                </div>
                            </div>
                            <div className="log-in-btns">
                                <div className="log-in-form-btn-register">
                                    <LinkRouter to='/rejestracja'><input type="" value="Załóż konto"/></LinkRouter>
                                </div>
                                <div className="log-in-form-btn-login">
                                    <input type="" value="Zaloguj się"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}    