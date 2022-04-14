import React from "react";
import classes from "./next.module.css"
import Card from "./Card";

export interface Day {
    day: string,
    data: string,
    icon_id: string,
    temp_day: string,
    temp_night: string,
    info: string,
}

const Days = (props) => {
    const daysArr: Day[5] = [];
    if (props.days !== undefined) {
        props.days.map(item =>{
            console.log(item);
            daysArr.push({
                data: item.dt_txt,
                icon_id:item.weather[0].main,
                temp_day:item.main.temp_max,
                temp_night:item.main.temp_min,
                info:item.weather[0].description
            })
        })
    }
    return (< div className={classes.days}>
            {daysArr.map((day: Day)=> (
                <Card day={day}/>
            ))}
        < /div>
    );
};
export default Days;
