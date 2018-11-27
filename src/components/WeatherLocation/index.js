import React from 'react';
import Location from './Location';
import WheatherData from './WeatherData/index';
import './styles.css';

const WeatherLocation =()=>(
    <div className="weatherLocationCont">
    <Location city={"Barcelona"}></Location>
    <WheatherData></WheatherData>    
    </div>
    );
export default WeatherLocation;