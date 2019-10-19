import React from 'react';
import { Navigation } from './Navigation';
import { Welcome } from './Welcome';
import { About } from './About';
import { Contact } from './Contact';
import { Slider } from './Slider';
import { Statistics } from './Statistics';
import {Steps} from './Steps';
// import { LogIn} from '../LogIn/LogIn';

const LandingPage = () => (
    <>
      <Navigation/>
      <Welcome/>
      <Statistics/>
      <Steps/>
      <About/>
      <Slider/>
      <Contact/>
    </>
)

export default LandingPage;