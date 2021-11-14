import React, { useEffect, useState } from "react";
import Home from "./Home";
import Journal from "./Journal";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import NavBar from "./Components/NavBar";
import { format, formatRelative, subDays } from "date-fns";
import axios from "axios";

const App = () => {
    useEffect(() => {
        fetchQuote();
        fetchWeather();
    }, []);

    const [states, setStates] = useState({
        date: format(new Date(), "E. MMM d, yyyy"),
        weather: "",
        quote: null,
        time: format(new Date(), "H:mm a"),
    });
    const [fetchStatus, setFetchStatus] = useState({
        fetchQuote: false,
        fetchWeather: false,
    });

    const fetchQuote = () => {
        axios.get("https://type.fit/api/quotes").then((res) => {
            const random = Math.ceil(Math.random() * 1600);
            const quote = res.data[random];
            setStates((prevState) => ({
                ...prevState,
                quote: quote,
            }));
            setFetchStatus((prevFetchStatus) => ({
                ...prevFetchStatus,
                fetchQuote: true,
            }));
        });
    };

    const fetchWeather = () => {
        axios
            .get(
                "https://api.weatherapi.com/v1/current.json?key=b43aed78084544dc93c35759212909&q=64125&aqi=yes"
            )
            .then((res) => {
                setStates((prevState) => ({
                    ...prevState,
                    weather: res.data,
                }));
                setFetchStatus((prevFetchStatus) => ({
                    ...prevFetchStatus,
                    fetchWeather: true,
                }));
            });
    };

    let img = null;
    const handleBackground = () => {
        const random = Math.ceil(Math.random() * 3);
        if (
            states.weather.current.is_day === 1 &&
            states.weather.current.condition.code === 1000
        ) {
            img = require(`./Images/clearDay${random}.jpg`).default;
        } else if (
            states.weather.current.is_day === 1 &&
            states.weather.current.condition.code === 1003
        ) {
        } else {
            img = require(`./Images/snowy2.jpg`).default;
        }
    };

    if (fetchStatus.fetchWeather === true) {
        handleBackground();
    }

    ////

    return (
        <div>
            {fetchStatus.fetchWeather === true &&
            fetchStatus.fetchQuote === true ? (
                <HashRouter>
                    <NavBar weather={states.weather} />
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Home
                                    fetchStatus={fetchStatus}
                                    states={states}
                                    img={img}
                                />
                            }
                        />
                        <Route
                            path="/journal"
                            element={<Journal img={img} date={states.date} />}
                        />
                    </Routes>
                </HashRouter>
            ) : (
                ""
            )}
        </div>
    );
};

export default App;
