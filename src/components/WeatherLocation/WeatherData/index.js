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

const WheatherData = () => (
    <div>
        <WheatherExtraInfo humidity={80} wind={"10 m/s"}/>
        <WheatherTemperature temperature={30} weatherState={CLOUDY}/>
    </div>


);
export default WheatherData;
