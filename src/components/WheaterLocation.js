import React from 'react';
import Location from './Location';
import WheatherData from './WeatherData';
const WeatherLocation =()=>(
    <div>
    <Location city={"Mexico"}></Location>
    <WheatherData></WheatherData>    
    </div>
    );
export default WeatherLocation;