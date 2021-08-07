import React, { useState, useEffect } from "react";

const Display = ({ data }) => {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        setInterval(() => setDate(new Date()), 1000);
    }, []);
    
    const {name, region, country, timeZone, windSpeed, windDirection, pressure, precipitation, humidity, temperature, text, iconLink} = data;
    return (
        <div id="display">
            <div id="displayUpperPortion">
                <div id="city">
                    <div id="cityUpperPart">{name}</div>
                    <div id="cityLowerPart">{region}, {country}</div>
                    <div id="cityDateAndTime">{date.toLocaleString('en-IN', { timeZone: timeZone })}</div>
                </div>
                <div id="weatherIcon">
                    <img src={iconLink}/>
                </div>
                <div id="temperature">
                    {temperature}&deg;C <br />
                    <div>{text}</div>
                </div>
            </div>
            <div id="displayLowerPortion">
                <div id="windSpeed" className="layout">
                    <div className="dataIcon">
                        <span className="iconify" data-icon="bx:bx-wind"></span>
                        <br /> <span className="caption">wind speed</span>
                    </div>
                    <div className="data">
                        {windSpeed} Km/H <br />
                        {windDirection}
                    </div>
                </div>
                <div id="humidity" className="layout">
                    <div className="dataIcon">
                        <span className="iconify" data-icon="carbon:humidity"></span>
                        <br /> <span className="caption" id="humidityCaption">humidity</span>
                    </div>
                    <div className="data number" id="humidity">
                        {humidity}
                    </div>
                </div>
                <div id="pressure" className="layout">
                    <div className="dataIcon">
                        <span className="iconify" data-icon="carbon:pressure-filled"></span>
                        <br /> <span className="caption" id="pressureCaption">pressure</span>
                    </div>
                    <div className="data number">
                        {pressure} <span className="inch">(inch)</span>
                    </div>
                </div>
                <div id="precipitation" className="layout">
                    <div className="dataIcon">
                        <span className="iconify" data-icon="carbon:accumulation-precipitation"></span>
                        <br /> <span className="caption">precipitation</span>
                    </div>
                    <div className="data number">
                        {precipitation} <span className="inch">(inch)</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Display
