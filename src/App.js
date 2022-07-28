import React from 'react';
import Weather from './Weather';
import './App.css';

function App() {
  return (<div className="App">
    <div className="container">
      <Weather defaultCity="Dnipro" />
    <footer>
      This poject was coded by <a href="https://github.com/Sokolianska" rel="noopener">Olha Sokolianska</a> and is 
    <a href="https://github.com/Sokolianska/react-weather-app" rel="noopener"> open-sorced on GitHub
      </a>
      </footer>
      </div>
    </div>);
}

export default App;
