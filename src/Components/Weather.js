import React, { useState } from "react";
import "./Weather.css";
import WeatherModal from "./WeatherModal";

const Weather = (props) => {
    const { id, weather, onMouseEnter, onMouseLeave } = props;
    const [showModal, setShowModal] = useState(false);

    const handleExpandWeather = () => {
        setShowModal(true);
    };

    return (
        <div
            id={id}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className="weather-wrapper"
            onClick={handleExpandWeather}>
            <img
                id={id}
                src={weather.current.condition.icon}
                alt=""
                className="weather-img"
            />
            <h3 id={id} className="weather-text">
                {weather.current.temp_f}°F
            </h3>
            <WeatherModal weather={weather} show={showModal} />
        </div>
    );
};

export default Weather;
