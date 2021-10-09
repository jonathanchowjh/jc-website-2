import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import './App.css';
import Header from './components/Header'
import IntroScreen from './components/IntroScreen'

function App() {
  return (
    <div className="container-lg App">
      <Header />
      <IntroScreen />
    </div>
  );
}

export default App;
