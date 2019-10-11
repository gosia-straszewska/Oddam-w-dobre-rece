import React, { Component } from 'react';
import { Link } from 'react-scroll';
import {Link as LinkRouter} from 'react-router-dom'

const options ={
    activeClass: "active",
    spy: true,
    smooth: true,
    offset: -10,
    duration: 500
}

class Login extends Component{
    render(){
        return (
            <div className="login">
                <ul className="login-nav">
                <LinkRouter to='/logowanie'><li className="login-el">Zaloguj</li></LinkRouter>
                <LinkRouter to='/rejestracja'><li className="login-el">Załóż konto</li></LinkRouter>
                </ul>
            </div>
        )
    }
}

class Menu extends Component{
    render(){
        return (
            <div className="menu">
                <ul className="menu-nav">
                    <li className="menu-el"><Link to="start" {...options}>Start</Link></li>
                    <li className="menu-el"><Link to="steps" {...options}>O co chodzi?</Link></li>
                    <li className="menu-el"><Link to="about" {...options}>O nas</Link></li>
                    <li className="menu-el"><Link to="organizations" {...options}>Fundacja i organizacje</Link></li>
                    <li className="menu-el"><Link to="contact" {...options}>Kontakt</Link></li>
                </ul>
            </div>
        )
    }
}

export class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <div className="container">
                    <Login />
                    <Menu />
                </div>
            </div>
        )
    }
}