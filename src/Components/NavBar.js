import { useState } from "react";
import Weather from "./Weather";
import "./NavBar.css";
import { useSpring, animated } from "react-spring";
import { Grid } from "@mui/material";

const NavBar = (props) => {
    const { weather } = props;
    const [isHovering, setIsHovering] = useState({
        weather: false,
    });

    const handleIsHovering = (id, hovering) => {
        console.log(id);
        setIsHovering((prevIsHovering) => ({
            ...prevIsHovering,
            [id]: hovering,
        }));
    };

    const aniProps = useSpring({
        to: {
            filter: isHovering.weather ? "brightness(1)" : "brightness(1)",
            position: "relative",
            top: isHovering.weather ? -5 : 0,
        },
        onRest: () => handleIsHovering("weather", false),
        config: { duration: 150, decay: -0.71 },
    });

    return (
        <Grid container xs={12} className="navbar-container">
            <Grid item xs={10} alignSelf="center">
                <ul className="navbar">
                    <li>
                        <a className="navLink" href="/">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="navLink" href="/a">
                            Calendar
                        </a>
                    </li>
                    <li>
                        <a className="navLink" href="/b">
                            Journal
                        </a>
                    </li>
                    <li>
                        <a className="navLink" href="/c">
                            Notes
                        </a>
                    </li>
                </ul>
            </Grid>
            <Grid item xs={2}>
                <animated.div className={`weather-container`} style={aniProps}>
                    <Weather
                        id="weather"
                        onMouseEnter={(e) =>
                            handleIsHovering(e.target.id, true)
                        }
                        isHovering={isHovering.weather}
                        weather={weather}
                    />
                </animated.div>
            </Grid>
        </Grid>
    );
};

export default NavBar;
