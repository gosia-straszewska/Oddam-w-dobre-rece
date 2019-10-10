import React, { Component } from 'react';

export class Statistics extends Component {
    render() {
        return (
            <div className="statistics">
                <div className="container">
                    <div className="stats-info">
                    <p className="stats-info-numb">10</p>
                    <p className="stats-info-title">Oddanych worków</p>
                    <p className="stats-info-txt">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam accusamus quam, excepturi non rem natus.</p>
                    </div>
                    <div className="stats-info">
                    <p className="stats-info-numb">5</p>
                    <p className="stats-info-title">Wspartych organizacji</p>
                    <p className="stats-info-txt">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, nisi. Nulla totam alias in.</p>
                    </div>
                    <div className="stats-info">
                    <p className="stats-info-numb">7</p>
                    <p className="stats-info-title">Zorganizowanych zbiórek</p>
                    <p className="stats-info-txt">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde porro corrupti aut quibusdam placeat voluptatibus?</p>
                    </div>
                </div>
            </div>
        )
    }
}