import React from "react";
import classes from "./next.module.css"
import type {Day} from "./Days";
import SharedSvgSelector from "../../../../../assets/icons/shared/SharedSvgSelector";

interface Props {
    day: Day
}

const Card = ({day}: Props) => {
    return (<div>
        {day.data &&
            <div className={classes.card}>
                <div className={classes.day}>{day.day}</div>
                <div className={classes.data}>{day.data}</div>
                <div className={classes.img}>
                    <SharedSvgSelector id={day.icon}/></div>
                <div className={classes.temp_day}>{Math.round(day.temp_day)}</div>
                <div className={classes.temp_night}>{Math.round(day.temp_night)}</div>
                <div className={classes.info}>{day.info}</div>
            </div>
        }
    </div>)
}
export default Card;