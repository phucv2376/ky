import React, { useState, useEffect } from "react";
import DisplayDate from "./Components/DisplayDate";
import "./Journal.css";
import useKeyPress from "./hooks/useKeyPress";

const Journal = (props) => {
    const { img, date } = props;
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
    const isPressedf = useKeyPress("Control");
    const isPressedg = useKeyPress("Enter");

    const handleSubmit = () => {};

    if (isPressedf && isPressedg) {
        handleSubmit();
    }

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
            <DisplayDate date={date} />
            <div className="centerElements">
                <textarea
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
