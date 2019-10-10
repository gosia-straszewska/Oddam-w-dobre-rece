import React, { Component } from 'react';
import {Link as LinkRouter} from 'react-router-dom'

export class Steps extends Component {
    render() {
        return (
            <div className="steps" id="steps">
                <div className="container">
                    <div className="steps-title">
                        <p>Wystarczą 4 proste kroki</p>
                        {/* img */}
                    </div>
                    <div className="steps-roadmap">
                        <div className="steps-roadmap-step">
                            {/* img */}
                            <p className="steps-roadmap-step-title">Wybierz rzeczy</p>
                            <p className="steps-roadmap-step-txt">Ubrania, zabawki, sprzęt i inne</p>
                        </div>
                        <div className="steps-roadmap-step">
                            {/* img */}
                            <p className="steps-roadmap-step-title">Spakuj je</p>
                            <p className="steps-roadmap-step-txt">Skorzystaj z worków na śmieci</p>
                        </div>
                        <div className="steps-roadmap-step">
                            {/* img */}
                            <p className="steps-roadmap-step-title">Zdecyduj komu chcesz pomóc</p>
                            <p className="steps-roadmap-step-txt">Wybierz zaufane miejsce</p>
                        </div>
                        <div className="steps-roadmap-step">
                            {/* img */}
                            <p className="steps-roadmap-step-title">Zamów kuriera</p>
                            <p className="steps-roadmap-step-txt">Kurier przyjedzie w dogodnym terminie</p>
                        </div>
                    </div>
                    <div className="steps-cta">
                        <LinkRouter to="/logowanie"><button className="steps-cta-btn">oddaj rzeczy</button></LinkRouter>
                    </div>
                </div>
            </div>
        )
    }
}