import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HatsPage from './pages/Hats';
import AboutPage from './pages/About';
import HomePage from './pages/Homepage';
import Header from './components/Header';

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/hats" component={HatsPage} />
      <Route path="/about" component={AboutPage} />
    </Switch>
  </BrowserRouter>
);

export default App;
