import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import "./index.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    setError(null);

    const apiKey = "0082d967e54bdc48f0f3d02016215cad";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=de`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Stadt nicht gefunden oder API-Fehler");
      }
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1>Wetter-App</h1>
      <SearchBar city={city} setCity={setCity} fetchWeather={fetchWeather} />
      {loading && <p>Lädt...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {weather && <WeatherDisplay weather={weather} />}
    </div>
  );
}

export default App;
