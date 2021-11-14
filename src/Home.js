import { useState, useEffect } from "react";
import React from "react";
import "./App.css";
import Quote from "./Components/Quote";
import axios from "axios";
import DisplayDate from "./Components/DisplayDate";
import { format, formatRelative, subDays } from "date-fns";
import DisplayTime from "./Components/DisplayTime";

function Home(props) {
    const { states, fetchStatus, img } = props;
    return (
        <div>
            <div
                style={{
                    position: "absolute",
                    backgroundImage: `url(${img})`,
                    backgroundSize: "100%",
                    width: "100%",
                    height: "100%",
                    backgroundRepeat: "no-repeat",
                    overflow: "hidden",
                }}>
                <DisplayDate date={states.date} />
                <div
                    style={{
                        margin: "auto",
                        height: "35%",
                        display: "flex",
                    }}>
                    <DisplayTime time={states.time} />
                </div>
                <Quote quote={states.quote} />
            </div>
        </div>
    );
}

export default Home;
