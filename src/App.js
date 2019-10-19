import React from 'react';
import './scss/main.scss';
import LandingPage from './components/LandingPage';
import {HashRouter, Route, Switch} from 'react-router-dom';
import { LogIn } from './components/LogIn/LogIn';
import { Register } from './components/LogIn/Register';
import { LogOut } from './components/LogIn/LogOut';

function App() {
  return (
    <HashRouter>
      <>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/logowanie' component={LogIn} />
          <Route path='/rejestracja' component={Register} />
          <Route path='/wylogowano' component={LogOut} />
        </Switch>
      </>
    </HashRouter>
  );
}

export default App;
