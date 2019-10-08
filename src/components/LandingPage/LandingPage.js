import React from 'react';

import { About } from './About';
import { Contact } from './Contact';
import { Footer } from './Footer';
import { Navigation } from './Navigation';
import { Slider } from './Slider';
import { Statistics } from './Statistics';
import {Steps} from './Steps'
import { Welcome } from './Welcome';

const LandingPage = () => (
    <>
        <Navigation/>
      <Welcome/>
      <Statistics/>
      <Steps/>
      <About/>
      <Slider/>
      <Contact/>
      <Footer/>
    </>
)
export default LandingPage;