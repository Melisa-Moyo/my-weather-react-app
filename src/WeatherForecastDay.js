import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = props.data && props.data.temp && props.data.temp.max ? Math.round(props.data.temp.max) : null;
    return temperature ? `${temperature}°` : '';
  }

  function minTemperature() {
    let temperature = props.data && props.data.temp && props.data.temp.min ? Math.round(props.data.temp.min) : null;
    return temperature ? `${temperature}°` : '';
  }

  function day() {
    if (props.data && props.data.dt) {
      let date = new Date(props.data.dt * 1000);
      let day = date.getDay();

      let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

      return days[day];
    }
    return '';
  }

  function getWeatherIcon() {
    if (props.data && props.data.weather && props.data.weather.length > 0 && props.data.weather[0].icon) {
      return <WeatherIcon code={props.data.weather[0].icon} size={36} />;
    }
    return null;
  }
  

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      {getWeatherIcon()}
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
