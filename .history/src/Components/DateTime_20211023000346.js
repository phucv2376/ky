import React from "react";
import "./DateTime.css";

const DateTime = (props) => {
    const { date } = props;

    return (
        <div className="Date-container">
            <h1 className="Date-text">{date}</h1>
        </div>
    );
};

export default DateTime;
