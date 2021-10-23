import React from "react";
import "./DisplayDate.css";

const DisplayDate = (props) => {
    const { date } = props;

    return (
        <div className="Date-container">
            <h1 className="Date-text">{date}</h1>
        </div>
    );
};

export default DisplayDate;
