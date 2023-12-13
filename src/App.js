import "./App.css";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import { weatherApiKey, weatherApiUrl } from "./api";
import { useState } from "react";
function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  console.log(currentWeather, forecast);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(",");
    console.log(lat, lon);
    const currentWeatherFetch = fetch(
      `${weatherApiUrl}weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}`
    );
    const forecastFetch = fetch(
      `${weatherApiUrl}forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}`
    );
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (responses) => {
        const weatherResponse = await responses[0].json();
        const forcastResponse = await responses[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forcastResponse });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}{" "}
    </div>
  );
}

export default App;
