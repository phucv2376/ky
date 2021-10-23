import React from "react";
import "./DateTime.css";
import { useSpring, animated } from "react-spring";

const DateTime = (props) => {
    const { date } = props;

    return (
        <div>
            <h1 className="DateTime__text">{date}</h1>
    );
};

export default DateTime;
