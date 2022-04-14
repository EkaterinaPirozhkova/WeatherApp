import React from "react";
import classes from './ThisDayInfo.module.css';

const ThisDayInfo = (props) => {
    return (<div>
        {props.temp &&
            <div className={classes.thisDayInfo}>
                <div className={classes.item}>
                    <p>Температура: {Math.round(props.temp)}°</p>
                    <p>Ощущается как: {Math.round(props.feels_like)}°</p>
                    <p>Давление: {props.pressure}</p>
                    <p>Влажность: {props.humidity}</p>
                </div>
            </div>
        }<p>{props.error}</p>
    </div>);
}
export default ThisDayInfo;