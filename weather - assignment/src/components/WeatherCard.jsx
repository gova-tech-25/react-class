const WeatherCard = ({ weather, onDelete }) => {
  if (!weather) {
    return (
      <div className="weather-card no-data">
        <h2>No weather data available</h2>
      </div>
    );
  }

  const getConditionIcon = (condition) => {
    switch (condition) {
      case 'Sunny': return '☀️';
      case 'Cloudy': return '☁️';
      case 'Rainy': return '🌧️';
      case 'Stormy': return '⛈️';
      default: return '🌤️';
    }
  };

  const getTempLabel = (temp) => {
    if (temp < 20) return 'Cool';
    if (temp <= 30) return 'Mild';
    if (temp <= 40) return 'Warm';
    return 'Hot';
  };

  return (
    <div className="weather-card">
      {onDelete && (
        <button className="delete-btn" onClick={onDelete} title="Delete">
          ×
        </button>
      )}
      <div className="weather-header">
        <h2>{weather.city}</h2>
        <span className="condition-icon">{getConditionIcon(weather.condition)}</span>
      </div>
      <div className="weather-body">
        <div className="temp-section">
          <span className="temperature">{weather.temperature}°C</span>
          <span className="temp-label">{getTempLabel(weather.temperature)}</span>
        </div>
        <div className="weather-details">
          <div className="detail">
            <span className="detail-label">Condition</span>
            <span className="detail-value">{weather.condition}</span>
          </div>
          <div className="detail">
            <span className="detail-label">Humidity</span>
            <span className="detail-value">{weather.humidity}%</span>
          </div>
          <div className="detail">
            <span className="detail-label">Wind Speed</span>
            <span className="detail-value">{weather.windSpeed} km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
