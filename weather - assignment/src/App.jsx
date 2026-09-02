import { useState, useEffect } from 'react';
import ThemeContext from './contexts/ThemeContext';
import WeatherCard from './components/WeatherCard';
import WeatherForm from './components/WeatherForm';
import './App.css';

const SAMPLE_DATA = [
  { city: 'Tokyo', temperature: 18, condition: 'Cloudy', humidity: 72, windSpeed: 12 },
  { city: 'Dubai', temperature: 42, condition: 'Sunny', humidity: 25, windSpeed: 8 },
  { city: 'London', temperature: 22, condition: 'Rainy', humidity: 85, windSpeed: 20 },
  { city: 'Sydney', temperature: 28, condition: 'Sunny', humidity: 55, windSpeed: 15 },
  { city: 'Moscow', temperature: 12, condition: 'Stormy', humidity: 68, windSpeed: 25 },
  { city: 'Mumbai', temperature: 34, condition: 'Cloudy', humidity: 80, windSpeed: 10 },
  { city: 'New York', temperature: 25, condition: 'Sunny', humidity: 50, windSpeed: 18 },
  { city: 'Cairo', temperature: 38, condition: 'Sunny', humidity: 20, windSpeed: 14 },
  { city: 'Paris', temperature: 19, condition: 'Cloudy', humidity: 75, windSpeed: 16 },
  { city: 'Reykjavik', temperature: 5, condition: 'Stormy', humidity: 90, windSpeed: 30 },
];

function getThemeColor(temp) {
  if (temp < 20) return { bg: '#dbeafe', primary: '#2563eb', label: 'Cool' };
  if (temp <= 30) return { bg: '#dcfce7', primary: '#16a34a', label: 'Mild' };
  if (temp <= 40) return { bg: '#ffedd5', primary: '#ea580c', label: 'Warm' };
  return { bg: '#fee2e2', primary: '#dc2626', label: 'Hot' };
}

function App() {
  const [weatherList, setWeatherList] = useState([]);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [theme, setTheme] = useState(getThemeColor(0));
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddWeather = (data) => {
    setWeatherList((prev) => [...prev, data]);
    setCurrentWeather(data);
    setLastUpdated(new Date().toLocaleTimeString());
  };

  const handleDelete = (index) => {
    setWeatherList((prev) => prev.filter((_, i) => i !== index));
  };

  const filteredList = weatherList.filter((w) =>
    w.city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Auto-update every 5 seconds with a random city
  useEffect(() => {
    const pickRandom = () => {
      const randomIndex = Math.floor(Math.random() * SAMPLE_DATA.length);
      const randomWeather = SAMPLE_DATA[randomIndex];
      setCurrentWeather(randomWeather);
      setLastUpdated(new Date().toLocaleTimeString());
    };

    pickRandom();
    const intervalId = setInterval(pickRandom, 5000);

    return () => clearInterval(intervalId);
  }, []);

  // Update theme whenever currentWeather changes
  useEffect(() => {
    if (currentWeather) {
      setTheme(getThemeColor(currentWeather.temperature));
    }
  }, [currentWeather]);

  return (
    <ThemeContext.Provider value={theme}>
      <div className="app" style={{ backgroundColor: theme.bg }}>
        <div className="dashboard">
          <h1 style={{ color: theme.primary }}>Smart Weather Dashboard</h1>

          {lastUpdated && (
            <p className="last-updated">Last updated: {lastUpdated}</p>
          )}

          <WeatherCard weather={currentWeather} />

          <WeatherForm onSubmit={handleAddWeather} />

          {weatherList.length > 0 && (
            <div className="history-section">
              <div className="history-header">
                <h3>Submitted Weather History ({filteredList.length})</h3>
                <div className="search-box">
                  <input
                    type="text"
                    placeholder="Search city..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  {searchTerm && (
                    <button
                      className="search-clear"
                      onClick={() => setSearchTerm('')}
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>
              {filteredList.length === 0 ? (
                <p className="no-results">
                  No matching cities found for "{searchTerm}"
                </p>
              ) : (
                <div className="history-grid">
                  {filteredList.map((w, i) => (
                    <WeatherCard
                      key={`${w.city}-${i}`}
                      weather={w}
                      onDelete={() => handleDelete(i)}
                    />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
