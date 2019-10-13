import React, { Component } from 'react';
import decoration from '../../assets/Decoration.svg';

export class Slider extends Component {
    render() {
        return (
            <div className="slider" id="organizations">
            <div className="container">
                <div className="slider-title">
                    <p>Komu pomagamy?</p>
                    <img src={decoration} alt="" />
                </div>
                <div className="slider-nav">
                    <button className="slider-nav-btn">Fundacjom</button>
                    <button className="slider-nav-btn">Organizacjom pozarządowym</button>
                    <button className="slider-nav-btn">Lokalnym zbiórkom</button>
                </div>
                <div className="slider-info">
                    <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z<br></br>którymi współpracujemy. Możesz sprawdzić czym się zajmują,<br></br>komu pomagają i czego potrzebują.</p>
                </div>
                <div className="slider-list">
                    lista
                </div>
            </div>
            </div>
        )
    }
}