import React from 'react';
import './scss/main.scss';
import LandingPage from './components/LandingPage';
import {HashRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <>
        <Switch>
          <Route exact path='/' component={LandingPage} />
        </Switch>
      </>
    </HashRouter>
  );
}

export default App;
