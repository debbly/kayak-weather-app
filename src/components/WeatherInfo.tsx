// src/components/WeatherInfo.tsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css';
import { OPENWEATHER_API_KEY } from '../config';

interface WeatherData {
  main: {
    temp: number;
  };
  wind: {
    speed: number;
  };
}

const WeatherInfo: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      console.log(OPENWEATHER_API_KEY);
      try {
        //lat, long set for Oakland, CA
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?lat=37.8&lon=-122.2&appid=${OPENWEATHER_API_KEY}&units=imperial`
        );
        console.log(response.data);
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, []);

  return (
    <div>
      {weatherData && (
        <div>
          {weatherData.wind.speed < 12 && weatherData.main.temp > 60 ? (
            <div>
              <h1> 😊 </h1>
              <p>Conditions are good for kayaking!</p>
            </div>
          ) : (
            <div>
              <h1> 🍃 </h1>
              <p>No!</p>
            </div>
          )}
          <h2>Oakland, CA</h2>
          <h3>Current Weather</h3>
          <p>Temperature: {weatherData.main.temp}°F</p>
          <p>Wind Speed: {weatherData.wind.speed} miles/hr</p>
        </div>
      )}
    </div>
  );
};

export default WeatherInfo;
