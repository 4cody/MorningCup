import React from 'react';

import Head from './components/Head'
import ArticleDashboard from './components/ArticleDashboard/ArticleDashboard'

import './sass/App.sass';


function App() {
  return <div className='App'>
    <Head />
    <ArticleDashboard />
  </div>;
}

export default App;
