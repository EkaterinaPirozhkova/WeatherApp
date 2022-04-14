import React from "react";
import classes from './ThisDay.module.css';
import SharedSvgSelector from "../../../../../assets/icons/shared/SharedSvgSelector";
import Days from "../next/Days";

const ThisDay = props => {
    return (
        <div>
            <div>
                {props.city &&
                    <div className={classes.day}>
                        <div className={classes.top}>
                            <div className={classes.topWrapper}>
                                <div className={classes.curTemp}>{Math.round(props.temp)}°</div>
                                <div className={classes.thisDay}>Сегодня</div>
                            </div>
                            <SharedSvgSelector id={'sun'}/>
                        </div>
                        <div className={classes.button}>
                            <div className={classes.thisTime}>Время: <span>{props.time}</span></div>
                            <div className={classes.city}>Город: <span>{props.city}</span></div>
                        </div>

                    </div>

                }
                <p>{props.error}</p>
            </div>

        </div>
    );
}

export default ThisDay;