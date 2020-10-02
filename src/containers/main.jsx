import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Results from './results';

const Main = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/results" component={Results} />
    </Switch>
  </>
);

export default Main;
