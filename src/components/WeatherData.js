import React from 'react';
import WheatherExtraInfo from './WeatherExtraInfo';
import WheatherTemperature from './WheatherTemperature';

const WheatherData = () => (
    <div>
        <WheatherExtraInfo humidity={80} wind={"10 m/s"}/>
        <WheatherTemperature temperature={30} weatherState={''}/>
    </div>


);
export default WheatherData;
