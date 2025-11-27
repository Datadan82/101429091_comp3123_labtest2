import { useEffect, useState } from "react";
import { fetchWeatherByCity } from "./api/weatherApi";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [city, setCity] = useState("Toronto");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = (newCity) => {
    setCity(newCity);
  };

  useEffect(() => {
    const loadWeather = async () => {
      try {
        setLoading(true);
        setError("");
        const data = await fetchWeatherByCity(city);
        setWeatherData(data);
      } catch (err) {
        setError("Could not fetch weather. Check city name or API key.");
        setWeatherData(null);
      } finally {
        setLoading(false);
      }
    };

    if (city) {
      loadWeather();
    }
  }, [city]);

  return (
    <div className="app">
      <h1 className="title">Weather Now</h1>
      <SearchBar onSearch={handleSearch} />

      {loading && <p className="info">Loading...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && weatherData && (
        <WeatherCard weather={weatherData} />
      )}
    </div>
  );
}

export default App;

