// src/App.tsx

import React from 'react';
import WeatherInfo from './components/WeatherInfo';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <div className="marquee">
        <div className="marquee-inner">
          <h4>Will I have a good time kayaking?</h4>
          <h4>Will I have a good time kayaking?</h4>
          <h4>Will I have a good time kayaking?</h4>
          <h4>Will I have a good time kayaking?</h4>
          <h4>Will I have a good time kayaking?</h4>
          <h4>Will I have a good time kayaking? Will I have a good time kayaking? Will I have a good time kayaking?</h4>
        </div>
      </div>
      <WeatherInfo />
    </div>
  );
};

export default App;
