import React from "react";
import classes from './Weather.module.css';

const Weather = props => (
    <div>
        {props.city &&
           /* <div>
                <p>Местоположение: {props.city}, {props.country}</p>
                <p>Температура: {props.temp}</p>
                <p>Ощущается как: {props.feels_like}</p>
                <p>Давление: {props.pressure}</p>
                <p>Влажность: {props.humidity}</p>
            </div>*/
            <header className={classes.day}>
                <div className={classes.top}>
                    <div className={classes.curTemp}>{props.temp}°</div>
                    <div className={classes.thisDay}>Сегодня</div>
                </div>
                <div className={classes.button}>
                    <div className={classes.thisTime}>Время: <span>21:54</span></div>
                    <div className={classes.city}>Город: <span>{props.city}</span></div>
                </div>
            </header>
        }
        <p>{props.error}</p>
    </div>
);

export default Weather;