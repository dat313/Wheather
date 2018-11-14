import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
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
WheatherTemperature.propTypes={
    temperature:PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};
export default WheatherTemperature;