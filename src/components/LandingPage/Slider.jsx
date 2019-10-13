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
                    <button className="slider-nav-btn">Organizacjom<br></br>pozarządowym</button>
                    <button className="slider-nav-btn">Lokalnym<br></br>zbiórkom</button>
                </div>
                <div className="slider-info">
                    <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z<br></br>którymi współpracujemy. Możesz sprawdzić czym się zajmują,<br></br>komu pomagają i czego potrzebują.</p>
                </div>
                <div className="slider-list">
                    <ul>
                        <li className="list-el">
                            <div className="list-el-about">
                                <p className="list-el-title">Fundacja "Dbam o Zdrowie"</p>
                                <p className="list-el-goal">Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej.</p>
                            </div>
                            <div className="list-el-things">
                                <p>ubrania, jedzenie, sprzęt AGD, meble, zabawki</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            </div>
        )
    }
}