import { useState } from 'react';

const WeatherForm = ({ onSubmit }) => {
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState('');
  const [condition, setCondition] = useState('Sunny');
  const [humidity, setHumidity] = useState('');
  const [windSpeed, setWindSpeed] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!city.trim()) newErrors.city = 'City name is required';
    if (!temperature || temperature < -89 || temperature > 57) {
      newErrors.temperature = 'Enter a valid temperature (-89°C to 57°C)';
    }
    if (!humidity || humidity < 0 || humidity > 100) {
      newErrors.humidity = 'Enter a valid humidity (0–100%)';
    }
    if (!windSpeed || windSpeed < 0) {
      newErrors.windSpeed = 'Enter a valid wind speed (≥ 0 km/h)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    onSubmit({
      city: city.trim(),
      temperature: Number(temperature),
      condition,
      humidity: Number(humidity),
      windSpeed: Number(windSpeed),
    });

    setCity('');
    setTemperature('');
    setCondition('Sunny');
    setHumidity('');
    setWindSpeed('');
    setErrors({});
  };

  return (
    <form className="weather-form" onSubmit={handleSubmit}>
      <h3>Add Weather Data</h3>
      <div className="form-row">
        <div className="form-group">
          <label>City Name</label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="e.g. London"
          />
          {errors.city && <span className="error">{errors.city}</span>}
        </div>

        <div className="form-group">
          <label>Temperature (°C)</label>
          <input
            type="number"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            placeholder="e.g. 25"
          />
          {errors.temperature && <span className="error">{errors.temperature}</span>}
        </div>

        <div className="form-group">
          <label>Condition</label>
          <select value={condition} onChange={(e) => setCondition(e.target.value)}>
            <option value="Sunny">Sunny</option>
            <option value="Cloudy">Cloudy</option>
            <option value="Rainy">Rainy</option>
            <option value="Stormy">Stormy</option>
          </select>
        </div>

        <div className="form-group">
          <label>Humidity (%)</label>
          <input
            type="number"
            value={humidity}
            onChange={(e) => setHumidity(e.target.value)}
            placeholder="e.g. 65"
          />
          {errors.humidity && <span className="error">{errors.humidity}</span>}
        </div>

        <div className="form-group">
          <label>Wind Speed (km/h)</label>
          <input
            type="number"
            value={windSpeed}
            onChange={(e) => setWindSpeed(e.target.value)}
            placeholder="e.g. 15"
          />
          {errors.windSpeed && <span className="error">{errors.windSpeed}</span>}
        </div>
      </div>
      <button type="submit">Add Weather</button>
    </form>
  );
};

export default WeatherForm;
