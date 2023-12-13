import "./current-weather.css";
const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <p className="city">Belgrade</p>
        <p className="weather-description">Sunny</p>

        <img src="icons/01d.png" alt="weather" className="weather-icon" />
      </div>
      <div className="bottom">
        <p className="temperature">18°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="paramater-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="paramater-label">Feels Like </span>
            <span className="paramater-value">22°C</span>
          </div>
          <div className="parameter-row">
            <span className="paramater-label">Wind </span>
            <span className="paramater-value">2m/s</span>
          </div>
          <div className="parameter-row">
            <span className="paramater-label">Humidity </span>
            <span className="paramater-value">15%</span>
          </div>
          <div className="parameter-row">
            <span className="paramater-label">Pressure </span>
            <span className="paramater-value">15hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
