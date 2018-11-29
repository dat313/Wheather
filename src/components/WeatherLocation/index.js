import React, {Component} from 'react';
import Location from './Location';
import WheatherData from './WeatherData/index';
import './styles.css';
import PropTypes from 'prop-types';
import {
    SUN,
} from '../../constants/weather';

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',


}

class WeatherLocation extends Component {
    render() {
        return (
            <div className="weatherLocationCont">
                <Location city={"Barcelona"}></Location>
                <WheatherData data={data}></WheatherData>
            </div>
        )
    }

};
WheatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    })
}
export default WeatherLocation;