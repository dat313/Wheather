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

const WheatherData = () => (
    <div className="weatherDataCont">
        <WheatherTemperature temperature={30} weatherState={CLOUDY}/>
        <WheatherExtraInfo humidity={80} wind={"10 m/s"}/>
    </div>


);
export default WheatherData;
