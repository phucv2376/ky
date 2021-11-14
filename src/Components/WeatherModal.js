import React from "react";
import "./WeatherModal.css";
import Dialog from "@mui/material/Dialog";
import { Grid, DialogTitle, DialogContent } from "@mui/material";

const WeatherModal = (props) => {
    const { show, weather } = props;
    return (
        <Dialog open={show} className="dialog">
            <DialogContent style={{ overflow: "hidden"}}className="dialog-content">
                <Grid container xs={12}>
                    <Grid item>
                        <h1>{weather.current.temp_f}°F</h1>
                    </Grid>
                    <Grid item>
                        <h2>{weather.current.condition.text}</h2>
                    </Grid>
                </Grid>
            </DialogContent>
        </Dialog>
    );
};

export default WeatherModal;
