import React, { Component } from 'react';
import {Link as LinkRouter} from 'react-router-dom';
import decoration from '../../assets/Decoration.svg';
import icon1 from '../../assets/Icon-1.svg';
import icon2 from '../../assets/Icon-2.svg';
import icon3 from '../../assets/Icon-3.svg';
import icon4 from '../../assets/Icon-4.svg';

export class Steps extends Component {
    render() {
        return (
            <div className="steps" id="steps">
                {/* <div className="container"> */}
                    <div className="steps-title">
                        <p>Wystarczą 4 proste kroki</p>
                        <img src={decoration} alt="" />
                    </div>
                    <div className="steps-roadmap">
                        <div className="container">
                        <div className="steps-roadmap-step">
                            <img src={icon1} alt="" />
                            <p className="steps-roadmap-step-title">Wybierz rzeczy</p>
                            <div className="steps-roadmap-step-line"></div>
                            <p className="steps-roadmap-step-txt">Ubrania, zabawki,<br></br>sprzęt i inne</p>
                        </div>
                        <div className="steps-roadmap-step">
                            <img src={icon2} alt="" />
                            <p className="steps-roadmap-step-title">Spakuj je</p>
                            <div className="steps-roadmap-step-line"></div>
                            <p className="steps-roadmap-step-txt">Skorzystaj z<br></br>worków na śmieci</p>
                        </div>
                        <div className="steps-roadmap-step">
                            <img src={icon3} alt="" />
                            <p className="steps-roadmap-step-title">Zdecyduj komu<br></br>chcesz pomóc</p>
                            <div className="steps-roadmap-step-line"></div>
                            <p className="steps-roadmap-step-txt">Wybierz zaufane<br></br>miejsce</p>
                        </div>
                        <div className="steps-roadmap-step">
                            <img src={icon4} alt="" />
                            <p className="steps-roadmap-step-title">Zamów kuriera</p>
                            <div className="steps-roadmap-step-line"></div>
                            <p className="steps-roadmap-step-txt">Kurier przyjedzie<br></br>w dogodnym terminie</p>
                        </div>
                        </div>
                    </div>
                    <div className="steps-cta">
                        <LinkRouter to="/logowanie"><button className="steps-cta-btn">oddaj rzeczy</button></LinkRouter>
                    </div>
                {/* </div> */}
            </div>
        )
    }
}