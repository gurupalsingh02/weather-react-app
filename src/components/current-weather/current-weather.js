import "./current-weather.css";
const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <p className="city">{data.city}</p>
        <p className="weather-description">{data.weather[0].description}</p>

        <img
          src={`icons/${data.weather[0].icon}.png`}
          alt="weather"
          className="weather-icon"
        />
      </div>
      <div className="bottom">
        <p className="temperature">{`${Math.round(data.main.temp)}°C`}</p>
        <div className="details">
          <div className="parameter-row">
            <span className="paramater-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="paramater-label">Feels Like </span>
            <span className="paramater-value">{`${Math.round(
              data.main.feels_like
            )}°C`}</span>
          </div>
          <div className="parameter-row">
            <span className="paramater-label">Wind </span>
            <span className="paramater-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="paramater-label">Humidity </span>
            <span className="paramater-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="paramater-label">Pressure </span>
            <span className="paramater-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
