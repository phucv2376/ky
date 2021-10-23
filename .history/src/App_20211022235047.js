import { useState, useEffect } from "react";
import React from "react";
import "./App.css";
import Quote from "./Components/Quote";
import axios from "axios";
import NavBar from "./Components/NavBar";
import DateTime from "./Components/DateTime";
import format from "date-fns/format";
import Grid from "@mui/material/Grid";

function App() {
    useEffect(() => {
        fetchQuote();
        fetchWeather();
    }, []);

    const [states, setStates] = useState({
        date: format(new Date(), "E. MMM d, yyyy"),
        weather: "",
        quote: null,
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
                "http://api.weatherapi.com/v1/current.json?key=b43aed78084544dc93c35759212909&q=64125&aqi=yes"
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
    console.log(states.weather);
    console.log(states.quote);

    if (fetchStatus.fetchWeather === true) {
        handleBackground();
    }
    return (
        <div>
            {fetchStatus.fetchWeather === true &&
            fetchStatus.fetchQuote === true ? (
                <div
                    style={{
                        position: "absolute",
                        backgroundImage: `url(${img})`,
                        backgroundSize: "100%",
                        width: "100%",
                        height: "100vh",
                        backgroundRepeat: "no-repeat",
                    }}>
                    <Grid container xs={12}>
                        <NavBar weather={states.weather} />
                    </Grid>
                    <DateTime date={states.date} />
                    <Quote quote={states.quote} />
                </div>
            ) : (
                ""
            )}
        </div>
    );
}

export default App;
