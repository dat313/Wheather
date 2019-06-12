import React from 'react';
import WheatherExtraInfo from './WeatherExtraInfo';
import WheatherTemperature from '../../WheatherTemperature';
import {CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
} from '../../../constants/weather';
import './styles.css';

const WheatherData = ({data:{temperature, weatherState, humidity, wind}}) => {
    return (
    <div className="weatherDataCont">
        <WheatherTemperature temperature={temperature} weatherState={weatherState}/>
        <WheatherExtraInfo humidity={humidity} wind={wind}/>

    </div>


)};
export default WheatherData;
