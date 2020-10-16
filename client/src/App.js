import React from 'react';

import Head from './components/Head/Head'
import ArticleDashboard from './components/ArticleDashboard/ArticleDashboard'

import './sass/App.sass';


function App() {
  return <div className='page-wrapper'>
    <Head />
    <ArticleDashboard />
  </div>;
}

export default App;
