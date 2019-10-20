import React, { Component } from 'react';
import { Navigation } from '../LandingPage/Navigation';
import decoration from '../../assets/Decoration.svg';
import {Link as LinkRouter} from 'react-router-dom';

const initialState = {
            mail: '',
            password: '',
            mailError: '',
            passwordError: '',
}

export class LogIn extends Component {
        state = initialState;
        
    
        handleChange = e => {
            const value = e.target.value;
            const name = e.target.name;
            this.setState({
              [name]: value
            });
        };
    
        handleSubmit = e => {
            e.preventDefault();
            console.log(`mail=${this.state.mail} pass= ${this.state.password}`);
            console.log(this.state);
    
            if(!this.state.mail.includes('@')){
                this.setState({
                    mailError: 'Podany email jest nieprawidłowy',
                })
            } if(this.state.password.length <= 5 ){
                this.setState({
                    passwordError: 'Podane hasło jest za krótkie!',
                })
            } else return console.log("zarejestrowano")
            
            };

    render() {
        const { mail, password, mailError, passwordError} = this.state;

        return (
            <div>
                <Navigation />
                <div className="log-in">
                    <div className="container">
                        <div className="log-in-header">
                            <p>Zaloguj się</p>
                            <img src={decoration} alt="" />
                        </div>

                        <form action="" className="log-in-form" onSubmit={this.handleSubmit}>
                            <div className="log-in-form-details">
                                <div className="log-in-form-mail">
                                    <label htmlFor="">Email</label>
                                    <input type="text" value={mail} onChange={this.handleChange} name="mail"/>
                                    {/* type - zmienione na text zamiast email do walidacji i wyświetlenia błędu */}
                                    <div className="log-in-input-error">{mailError}</div>
                                </div>
                                <div className="log-in-form-password">
                                    <label htmlFor="">Hasło</label>
                                    <input type="password" value={password} onChange={this.handleChange} name="password"/>
                                    <div className="log-in-input-error">{passwordError}</div>
                                </div>
                            </div>
                            <div className="log-in-btns">
                                <div className="log-in-form-btn-register">
                                    <LinkRouter to='/rejestracja'><input type="" defaultValue="Załóż konto"/></LinkRouter>
                                </div>
                                <div className="log-in-form-btn-login">
                                    <input type="submit" value="Zaloguj się"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}    