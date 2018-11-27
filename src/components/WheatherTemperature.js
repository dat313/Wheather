import React from 'react';
import WeatherIcons from 'react-weathericons';
import './WeatherLocation/WeatherData/styles.css';
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
    const sizeIcon="4x";
    if(icon)
    return <WeatherIcons className="wicon" name={icon}  size={sizeIcon} />
    else
        return <WeatherIcons className="wicon" name={"day-sunny"}  size={sizeIcon} />
}
const WheatherTemperature=({temperature, weatherState})=>(
    <div className="weatherTemperatureCont">
        {getWeatherIcon(weatherState)}

        <span className="temperature">{" "+temperature+ " "}</span><span className="temperatureType">C°</span>
    </div>
);
WheatherTemperature.propTypes={
    temperature:PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};
export default WheatherTemperature;