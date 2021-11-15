import React, { useState, useEffect } from "react";
import DisplayDate from "./Components/DisplayDate";
import "./Journal.css";
import Hotkeys from "react-hot-keys";
import axios from "axios";

const Journal = (props) => {
    const { img, date } = props;
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";

    const handleSubmit = () => {
        const journalLogs = document.getElementById("journalLogs").value;
        axios
            .post("https://ky-api.herokuapp.com/journals", {
                date: Date(),
                contents: journalLogs,
            })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div
            style={{
                position: "absolute",
                backgroundImage: `url(${img})`,
                backgroundSize: "100%",
                width: "100%",
                height: "100%",
                backgroundRepeat: "no-repeat",
            }}>
            <Hotkeys
                keyName="ctrl+enter"
                filter={(event) => {
                    return true;
                }}
                onKeyDown={handleSubmit}
            />
            <DisplayDate date={date} />
            <div className="centerElements">
                <textarea
                    id="journalLogs"
                    cols="100"
                    rows="20"
                    spellCheck="false"
                    style={{
                        resize: "none",
                        borderRadius: "15px",
                        backgroundColor: "rgb(0,0,0, .67)",
                        color: "red",
                        fontSize: "25px",
                        padding: "25px",
                        fontFamily: "monospace",
                        letterSpacing: "1px",
                    }}></textarea>
            </div>
        </div>
    );
};

export default Journal;
