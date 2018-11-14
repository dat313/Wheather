import React from 'react';
import PropTypes from 'prop-types';
import WheatherTemperature from "../../WheatherTemperature";
const WheatherExtrainfo=({humidity, wind})=>(

    <div>
<span>{humidity + "% -"}</span>
<span>{wind+ " viento"}</span>
    </div>
);
WheatherExtrainfo.propTypes={
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
}

export default WheatherExtrainfo;