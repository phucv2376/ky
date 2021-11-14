import "./DisplayTime.css";

const DisplayTime = (props) => {
    const { time } = props;
    return (
        <div className="DisplayTime-container">
            <h1 className="DisplayTime-text">{time}</h1>
        </div>
    );
};

export default DisplayTime;
