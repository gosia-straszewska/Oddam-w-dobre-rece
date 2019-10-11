import React, { Component } from 'react';
import decoration from '../../assets/Decoration.svg';
import signature from '../../assets/Signature.svg';


export class About extends Component {
    render() {
        return (
            <div className="about" id="about">
                <div className="about-info">
                    <div className="about-container">
                        <div className="about-info-article">
                            <p className="about-info-title">O nas</p>
                            <img src={decoration} alt="" />
                            <p className="about-info-txt">Lorem ipsum dolor sit amet consectetur <br></br>adipisicing elit. Maxime ipsum veniam omnis<br></br>harum! Aut mollitia nemo,<br></br>placeat praesentium quo numquam.</p>
                        </div>
                        <div className="about-info-sign">
                        <img src={signature} alt="" />
                        </div>
                    </div>
                </div>
                <div className="about-img">
                </div>
            </div>
        )
    }
}