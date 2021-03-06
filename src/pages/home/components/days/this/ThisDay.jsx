import React from "react";
import classes from './ThisDay.module.css';
import SharedSvgSelector from "../../../../../assets/icons/shared/SharedSvgSelector";

const ThisDay = props => {
  /* localStorage.setItem('temp', JSON.stringify(Math.round(props.temp)));
    localStorage.setItem('time', JSON.stringify((props.time)));
    localStorage.setItem('city', JSON.stringify(props.city));*/
    return (
        <div>
            <div>
                {props.city &&
                    <div className={classes.day}>
                        <div className={classes.top}>
                            <div>
                                <div className={classes.curTemp}>{Math.round(props.temp)}°</div>
                                <div className={classes.thisDay}>Сегодня</div>
                            </div>
                            <SharedSvgSelector id={'Sun'}/>
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