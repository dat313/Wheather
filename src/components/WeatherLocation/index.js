import React, {Component} from 'react';
import Location from './Location';
import WheatherData from './WeatherData/index';
import './styles.css';
import PropTypes from 'prop-types';
import {
    SUN, WINDY,
} from '../../constants/weather';

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s',
}
const data2 = {
    temperature: 15,
    weatherState: WINDY,
    humidity: 15,
    wind: '15 m/s',
}

class WeatherLocation extends Component {
    constructor() {
        super();
        this.state = {
            city: 'Buenos Aires',
            data: data,
        }
    }

    handleUpdateClick = () => {
        console.log("actualizado")
        this.setState({
            city:'Buenos Aires!',
            data:data2
        })
    }

    render() {
        const {city, data} = this.state;
        return (
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WheatherData data={data}></WheatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
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