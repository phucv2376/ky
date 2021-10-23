import React from "react";
import "./DateTime.css";
import { useSpring, animated } from "react-spring";

const DateTime = (props) => {
    const { date } = props;
    const aniProps = useSpring({
        from: { opacity: 0, margin: "-200px", color: "white" },
        to: { opacity: 1, margin: "50px", color: "white" },
    });

    return (
        <animated.div style={aniProps}>
            <h1 className="DateTime__text">{date}</h1>
        </animated.div>
    );
};

export default DateTime;
