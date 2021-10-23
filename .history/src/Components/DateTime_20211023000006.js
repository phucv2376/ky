import React from "react";
import "./DateTime.css";

const DateTime = (props) => {
    const { date } = props;

    return (
        <>
            <h1 className="DateTime-text">{date}</h1>
        </>
    );
};

export default DateTime;
