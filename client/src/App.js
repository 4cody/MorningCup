import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Head from './components/Head/Head';
import ArticleDashboard from './components/ArticleDashboard/ArticleDashboard';
import Register from './components/Auth/Register';

import './sass/App.sass';

function App() {
  return (
    <div className='page-wrapper'>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Head />
            <ArticleDashboard />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
