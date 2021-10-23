import axios from "axios";

export const weatherUtils = {
    getWeather() {
        axios
            .get(
                "http://api.weatherapi.com/v1/current.json?key=b43aed78084544dc93c35759212909&q=64125&aqi=yes"
            )
            .then((res) => {
                console.log(res);
                return res;
            });
    },
};
