import React, { Component } from 'react';
import { Navigation } from '../LandingPage/Navigation';
import decoration from '../../assets/Decoration.svg';
import {Link as LinkRouter} from 'react-router-dom';



export class Register extends Component {
    state = {
        mail: '',
        password: '',
        secondPassword:'',
        mailError: '',
        passwordError:'',
        secondPasswordError: '',
    }
    

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
        } if (this.state.password !== this.state.secondPassword){
            this.setState({
                secondPasswordError: 'Hasła muszą być takie same!',
            })
        } else return console.log("zarejestrowano")
        
        
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
                                <div className="log-in-form-btn-register">
                                    <LinkRouter to='/logowanie'><input type="" defalutvalue="Zaloguj"/></LinkRouter>
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