import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./forecast.css";

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const Forecast = ({ data }) => {
  const dayInWeek = new Date().getDay();
  const forCasteDays = weekDays
    .splice(dayInWeek, weekDays.length)
    .concat(weekDays.splice(0, dayInWeek));
  return (
    <>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    alt="weather"
                    className="icon-small"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="day">{forCasteDays[index]}</label>
                  <label className="description">
                    {" "}
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {item.main.temp_min}°C / ${item.main.temp_max}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Pressure: </label>
                  <label> {item.main.pressure} hPa</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Humidity: </label>
                  <label> {item.main.humidity} %</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Clouds: </label>
                  <label> {item.clouds.all} %</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Wind Speed: </label>
                  <label> {item.wind.speed} m/s</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Sea level: </label>
                  <label> {item.main.sea_level} m</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Feels Like: </label>
                  <label> {Math.round(item.main.feels_like)} °C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
};

export default Forecast;
