import React, { Component } from 'react';
import decoration from '../../assets/Decoration.svg';
import {Link as LinkRouter} from 'react-router-dom'

export class Welcome extends Component {
    render() {
        return (
            <div className="welcome" id="start">
                <div className="container">
                    <div className="welcome-background">
                    </div>
                    <div className="welcome-cta">
                        <p className="welcome-cta-title">
                            <p>
                                Zacznij pomagać!
                                <br></br>
                                Oddaj niechciane rzeczy w zaufane ręce
                            </p>
                        </p>
                        <img src={decoration} alt="" />
                        <div className="welcome-cta-btns">
                        <LinkRouter to='/logowanie'><button className="welcome-cta-btn">Oddaj<br></br>Rzeczy</button></LinkRouter>
                        <LinkRouter to='/logowanie'><button className="welcome-cta-btn">Zorganizuj<br></br>Zbiórkę</button></LinkRouter>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}