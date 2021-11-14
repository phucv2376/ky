import React from "react";
import "./Quote.css";

const Quote = (props) => {
    const { quote } = props;
    return (
        <div className="Quote__container">
            <h1 className="Quote__text">
                {quote.text}
                <sub className="Quote__author"> -{quote.author}</sub>
            </h1>
        </div>
    );
};

export default Quote;
