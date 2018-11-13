import React from 'react';
const WheatherExtrainfo=({humidity, wind})=>(

    <div>
<span>{humidity + "% -"}</span>
<span>{wind+ " viento"}</span>
    </div>
);
export default WheatherExtrainfo;