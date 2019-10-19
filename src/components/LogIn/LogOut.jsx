import React, { Component } from 'react';
import { Navigation } from '../LandingPage/Navigation';
import decoration from '../../assets/Decoration.svg';
import {Link as LinkRouter} from 'react-router-dom';



export class LogOut extends Component {
    render() {
        return (
            <div>
                <Navigation />
                <div className="log-out">t
                    <div className="container">
                        <div className="log-out-header">
                            <p>Wylogowanie nastąpiło<br></br>pomyślnie!</p>
                            <img src={decoration} alt="" />
                        </div>
                        <div className="log-out-home-btn">
                            <LinkRouter to='/'><input type="" value="Strona Główna"/></LinkRouter>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}    