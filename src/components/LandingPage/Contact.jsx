import React, { Component } from 'react';
import decoration from '../../assets/Decoration.svg';

export class Contact extends Component {
    render() {
        return (
            <div id="contact" className="contact">
            <div className="contact-img">
                Pusty
            </div>
            <div className="contact-container">
                <p className="contact-title"> Skontaktuj się z nami</p>
                <img src={decoration} alt="" />
                <div className="contact-form">
                <form action="">
                    <label htmlFor="">Wpisz swoje imię
                    <input type="text"/>
                    </label>
                    <label htmlFor="">Wpisz swój email
                    <input type="email"/>
                    </label>
                    <label htmlFor="">Wpisz swoją wiadomość
                    <textarea name="" id="" cols="30" rows="10">
                    </textarea>
                    </label>
                    <input type="submit" value="Wyślij" />
                </form>
                </div>
            </div>
            
            
            </div>
        )
    }
}