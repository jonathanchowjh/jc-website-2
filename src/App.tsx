import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import './App.css';
import Header from './components/Header'
import IntroScreen from './components/IntroScreen'

function App() {
  React.useEffect(() => {
    window.addEventListener("hashchange", (e) => {
      let element = document.getElementById(window.location.hash.substring(1))
      if (element !== null) {
        window.scrollTo(0, element.offsetTop - 100);
      }
    })
  }, [])
  return (
    <div className="container-lg App">
      <Header />
      <IntroScreen />
    </div>
  );
}

export default App;
