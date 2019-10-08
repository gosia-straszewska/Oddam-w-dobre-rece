import React from 'react';
import './App.css';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Navigation } from './components/Navigation';
import { Slider } from './components/Slider';
import { Statistics } from './components/Statistics';
import {Steps} from './components/Steps'
import { Welcome } from './components/Welcome';

function App() {
  return (
    <div>
      <Navigation/>
      <Welcome/>
      <Statistics/>
      <Steps/>
      <About/>
      <Slider/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
