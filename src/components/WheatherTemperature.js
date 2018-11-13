import React from 'react';
import WeatherIcons from 'react-weathericons';
const icons={
    cloud:"cloud",
    cloudy:"cloudy",
    rain:"rain",
    sunny:"day-sunny",
    fog:"day-fog",
    snow:"snow",
    windy:"windy",
};
const getWeatherIcon=weatherState=>{
    const icon= icons[weatherState];
    if(icon)
    return <WeatherIcons name={icon}  size="2x" />
    else
        return <WeatherIcons name={"day-sunny"}  size="2x" />
}
const WheatherTemperature=({temperature, weatherState})=>(
    <div>
        {getWeatherIcon(weatherState)}

        <span>{" "+temperature + "C°"}</span>
    </div>
);
export default WheatherTemperature;