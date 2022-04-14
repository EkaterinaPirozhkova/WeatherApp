import React from "react";
import classes from "./next.module.css"
import Card from "./Card";
import sun from "../../../../../assets/icons/sun.svg"
import fewclouds from "../../../../../assets/icons/fewclouds.svg"
import clouds from "../../../../../assets/icons/clouds.svg"
import showerrain from "../../../../../assets/icons/showerrain.svg"
import rain from "../../../../../assets/icons/rain.svg"
//import storm from "../../../../../assets/icons/storm.svg"
import snow from "../../../../../assets/icons/snow.svg"
import mist from "../../../../../assets/icons/mist.svg"

export interface Day {
    day: string,
    data: string,
    icon_id: string,
    temp_day: string,
    temp_night: string,
    info: string,
}

const Days = (props) => {
   /* let map = new Map();
    map.set("01d", sun)
    map.set("02d", fewclouds)
    map.set("03d", clouds)
    map.set("04d", clouds)
    map.set("09d", showerrain)
    map.set("10d", rain)
   // map.set("11d", storm)
    map.set("13d", snow)
    map.set("50d", mist)*/
    const daysArr: Day[5] = [];
    if (props.days !== undefined) {
        props.days.map(item => {
            console.log(item.weather[0].icon);
            daysArr.push({
                data: item.dt_txt,
                icon_id: item.weather[0].icon,
                temp_day: item.main.temp_max,
                temp_night: item.main.temp_min,
                info: item.weather[0].description
            })
        })
    }
    return (< div className={classes.days}>
            {daysArr.map((day: Day) => (
                <Card day={day}/>
            ))}
        < /div>
    );
};
export default Days;
