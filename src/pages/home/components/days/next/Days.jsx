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
    //this.setState(props.days)
    const days: Day[] = [
        {
            day: 'Сегодня',
            data: 'Дата',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            day: 'Завтра',
            data: 'Дата',
            icon_id: 'rainbow',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            day: 'Ср',
            data: 'Дата',
            icon_id: 'storm',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            day: 'Чт',
            data: 'Дата',
            icon_id: 'rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
        {
            day: 'Пт',
            data: 'Дата',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Облачно',
        },
    ];
    return (< div className={classes.days}>
            {days.map((day: Day) => (
                <Card day={day}/>
            ))}
        < /div>
    );
};

export default Days;