import React from "react";
import "./DateTime.css";

const DateTime = (props) => {
    const { date } = props;

    return (
        <div className="Date">
            <h1 className="DateTime-text">{date}</h1>
        </div>
    );
};

export default DateTime;
