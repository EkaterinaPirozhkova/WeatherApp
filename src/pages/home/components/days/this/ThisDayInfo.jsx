import React from "react";
import classes from './ThisDayInfo.module.css';
import Days from "../next/Days";

const ThisDayInfo = (props) => {
    return (<div>
        {props.temp &&
            <div className={classes.thisDayInfo}>
                <div className={classes.item}>
                    <p>Температура: {props.temp}</p>
                    <p>Ощущается как: {props.feels_like}</p>
                    <p>Давление: {props.pressure}</p>
                    <p>Влажность: {props.humidity}</p>
                </div>
            </div>
        }<p>{props.error}</p>
    {/*    {props.city &&
            <div>
                <Days className={classes.days}/>
            </div>
        }*/}
    </div>);
}
export default ThisDayInfo;