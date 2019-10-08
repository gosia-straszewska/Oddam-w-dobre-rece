import React, { Component } from 'react';
import { Link } from 'react-scroll';

const options ={
    activeClass: "active",
    spy: true,
    smooth: true,
    offset: 50,
    duration: 500
}

export class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <ul>
                    <li><Link to="contact" {...options}>Nowa sekcja</Link></li>
                </ul>
            </div>
        )
    }
}