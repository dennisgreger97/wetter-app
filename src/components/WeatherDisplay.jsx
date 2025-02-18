function WeatherDisplay({ weather }) {
  return (
    <div className="weather-display">
      <h2>{weather.name}</h2>
      <p>{weather.weather[0].description}</p>
      <p>Temperatur: {weather.main.temp}°C</p>
      <p>Luftfeuchtigkeit: {weather.main.humidity}%</p>
    </div>
  );
}

export default WeatherDisplay;
