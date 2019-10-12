import React, { Component } from 'react';
import decoration from '../../assets/Decoration.svg';
import facebook from '../../assets/Facebook.svg';
import instagram from '../../assets/Instagram.svg';

export class Contact extends Component {
    render() {
        return (
            <div>
                <div id="contact" className="contact">
                    <div className="contact-box">
                        <div className="contact-img"></div>
                        <div className="contact-container">
                            <p className="contact-title"> Skontaktuj się z nami</p>
                            <img src={decoration} alt="" />
                            <div className="contact-form">
                                <form action="">
                                    <div className="contact-form-details">
                                        <div className="contact-form-name">
                                            <label htmlFor="">Wpisz swoje imię</label>
                                            <input type="text" />
                                        </div>
                                        <div className="contact-form-mail">
                                            <label htmlFor="">Wpisz swój email</label>
                                            <input type="email" />
                                        </div>
                                    </div>
                                    <div className="contact-form-msg">
                                        <label htmlFor="">Wpisz swoją wiadomość</label>
                                        <textarea name="" id="" cols="40" rows="4"></textarea>
                                    </div>
                                    <div className="contact-form-btn">
                                        <input type="submit" value="Wyślij" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="footer">
                        <div className="container">
                            <small class="page-footer-copyright">
                                &copy; Copyright by Coders Lab
                            </small>
                            <nav className="page-footer-nav">
                                <ul className="page-footer-nav-list">
                                    <li>
                                        <a href="/#"><img src={facebook} alt="" /></a>
                                    </li>
                                    <li>
                                        <a href="/#"><img src={instagram} alt="" /></a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}