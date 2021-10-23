import React from "react";
import { Spring } from "react-spring";

const Background = (props) => {
    const { conCode, isDay } = props;
    let img = null;
    const random = Math.ceil(Math.random() * 3);
    const handleBackground = () => {
        if (isDay === 1 && conCode === 1000) {
            img = require(`../Images/clearDay${random}.jpg`).default;
        } else if (isDay === 1 && conCode === 1003) {
        } else {
            img = require(`../Images/clearDay${random}.jpg`).default;
        }
    };

    handleBackground();

    return (
        <div style={props}>
            <img
                style={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    filter: "brightness(70%)",
                }}
                src={img}
                alt=""
            />
            <h1>test</h1>
        </div>
    );
};

export default Background;
