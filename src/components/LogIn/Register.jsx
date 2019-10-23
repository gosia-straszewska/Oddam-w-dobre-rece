import React, { Component } from 'react';
import { Navigation } from '../LandingPage/Navigation';
import decoration from '../../assets/Decoration.svg';
import {Link as LinkRouter} from 'react-router-dom';

const initialState = {
    mail: '',
    password: '',
    secondPassword: '',
    mailError: '',
    passwordError: '',
    secondPasswordError: '',
}


export class Register extends Component {
    state = initialState;
    

    handleChange = e => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
          [name]: value
        });
    };

    validate = () => {
        if(!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.mail)){
            this.setState({
                mailError: 'Podany email jest nieprawidłowy',
            }); 
            return false
        } if(this.state.password.length <= 5 ){
            this.setState({
                passwordError: 'Podane hasło jest za krótkie!',
            });
            return false
        } if (this.state.password !== this.state.secondPassword){
            this.setState({
                secondPasswordError: 'Hasła muszą być takie same!',
            });
            return false
        } 
        return true
    }

    handleSubmit = e => {
        e.preventDefault();
        
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state, "zarejestrowano")
            //clear the form
            this.setState(
                initialState
            );

        } else console.log("nie zarejestrowano")
};



    render() {
        const { mail, password, secondPassword, mailError, passwordError, secondPasswordError} = this.state;
        return (
            <div>
                <Navigation />
                <div className="log-in">
                    <div className="container">
                        <div className="log-in-header">
                            <p>Załóż konto</p>
                            <img src={decoration} alt="" />
                        </div>

                        <form action="" className="log-in-form" onSubmit={this.handleSubmit}>
                            <div className="log-in-form-details">
                                <div className="log-in-form-mail">
                                    <label htmlFor="">Email</label>
                                    <input type="text" value={mail} onChange={this.handleChange} name="mail"/>
                                    <div className="log-in-input-error">{mailError}</div>
                                </div>
                                <div className="log-in-form-password">
                                    <label htmlFor="">Hasło</label>
                                    <input type="password" value={password} onChange={this.handleChange} name="password" />
                                    <div className="log-in-input-error">{passwordError}</div>
                                </div>
                                <div className="log-in-form-password">
                                    <label htmlFor="">Powtórz hasło</label>
                                    <input type="password" value={secondPassword} onChange={this.handleChange} name="secondPassword"/>
                                    <div className="log-in-input-error">{secondPasswordError}</div>
                                </div>
                            </div>
                            <div className="log-in-btns">
                                <div className="log-in-form-btn-login">
                                    <LinkRouter to='/logowanie'><input type="submit" value="Zaloguj się"/></LinkRouter>
                                </div>
                                <div className="log-in-form-btn-login">
                                    <input type="submit" value="Załóż konto"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}    