import React, { useState } from 'react';

function Weather() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_KEY = '4f8e795dcd6dbf7b9f5276bff095ffc1';

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const fetchWeatherData = () => {
    setLoading(true);
    setError('');

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === 200) {
          setWeatherData(data);
        } else {
          setError(data.message);
        }
        setLoading(false);
      })
      .catch((error) => {
        setError('An error occurred. Please try again.');
        setLoading(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWeatherData();
  };

  return (
    <div classname="wheather">
        
      <h1>Weather App</h1>
      
      <form onSubmit={handleSubmit}>
        <input type="text" value={city} onChange={handleInputChange} placeholder="Enter a city" required />
        <button type="submit">Get Weather</button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {weatherData && (
        <div className='data'>
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p>Temperature: {Math.round(weatherData.main.temp - 273.15)}°C</p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
