// src/components/WeatherCard.jsx
function WeatherCard({ weather }) {
  const {
    name,
    sys,
    main,
    weather: weatherArr,
    wind,
    dt,
  } = weather;

  const condition = weatherArr && weatherArr[0];

  const iconUrl = condition
    ? `https://openweathermap.org/img/wn/${condition.icon}@4x.png`
    : null;

  // Use API timestamp for date
  const date = dt ? new Date(dt * 1000) : new Date();
  const dayName = date.toLocaleDateString("en-CA", { weekday: "long" });
  const fullDate = date.toLocaleDateString("en-CA", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="weather-shell">
      {/* Left card – similar to big card in reference */}
      <div className="weather-main-card">
        <div className="weather-main-header">
          <span className="weather-day">{dayName}</span>
          <span className="weather-date">{fullDate}</span>
          <span className="weather-location">
            {name}, {sys?.country}
          </span>
        </div>

        <div className="weather-main-body">
          <div className="weather-temp-block">
            <span className="weather-temp">
              {Math.round(main?.temp)}°C
            </span>
            <span className="weather-condition">
              {condition?.main}
            </span>
            <span className="weather-sub">
              Feels like {Math.round(main?.feels_like)}°C
            </span>
          </div>

          {iconUrl && (
            <img
              src={iconUrl}
              alt={condition?.description}
              className="weather-main-icon"
            />
          )}
        </div>

        <div className="weather-main-footer">
          <span className="pill">
            {condition?.description}
          </span>
        </div>
      </div>

      {/* Right card – detailed metrics like the “forecast” panel in reference */}
      <div className="weather-detail-card">
        <h3 className="detail-title">Current details</h3>
        <div className="detail-grid">
          <div className="detail-item">
            <span className="detail-label">Humidity</span>
            <span className="detail-value">{main?.humidity}%</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Pressure</span>
            <span className="detail-value">{main?.pressure} hPa</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Wind</span>
            <span className="detail-value">{wind?.speed} m/s</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Min / Max</span>
            <span className="detail-value">
              {Math.round(main?.temp_min)}° / {Math.round(main?.temp_max)}°
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;

