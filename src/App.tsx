// src/App.tsx

import React from 'react';
import WeatherInfo from './components/WeatherInfo';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Will I have a good time kayaking right now?</h1>
      <WeatherInfo />
    </div>
  );
};

export default App;
