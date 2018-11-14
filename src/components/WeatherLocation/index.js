import React from 'react';
import Location from './Location';
import WheatherData from './WeatherData/index';
const WeatherLocation =()=>(
    <div>
    <Location city={"Barcelona"}></Location>
    <WheatherData></WheatherData>    
    </div>
    );
export default WeatherLocation;