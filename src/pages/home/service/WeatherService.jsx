import React from "react";
import Form from "../components/header/Form";
import ThisDay from "../components/days/this/ThisDay";
import ThisDayInfo from "../components/days/this/ThisDayInfo";
import Card from "../components/days/next/Card";
import LocalStorage from "./LocalStorage";
import Days from "../components/days/next/Days";


const API_KEY = "caad68466f7eaa6981d3dc4ad9f6fa6d";

export interface Day {
    data: string,
    icon_id: string,
    temp_day: string,
    temp_night: string,
    info: string,
}

class WeatherService extends React.Component {
    state = {
        timezone: undefined,
        temp: undefined,
        city: undefined,
        country: undefined,
        feels_like: undefined,
        humidity: undefined,
        pressure: undefined,
        error: undefined
    }
    gettingCurrentWeather = async (event) => {
        event.preventDefault();
        let city = /*JSON.parse(localStorage.getItem('city'))||*/event.target.elements.city.value;
        //localStorage.setItem('city', JSON.stringify(city));
        if (city) {
            const apiCur_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
            const data1 = await apiCur_url.json();
            const time = data1.timezone / 3600;
            const date = new Date();
            let time_date;
            if (date.getMinutes() < 10) {
                time_date = date.getUTCHours() + time + ":0" + date.getMinutes();

            } else {
                time_date = date.getUTCHours() + time + ":" + date.getMinutes();
            }
            this.setState({
                timezone: time_date,
                temp: data1.main.temp,
                city: data1.name,
                country: data1.sys.country,
                feels_like: data1.main.feels_like,
                humidity: data1.main.humidity,
                pressure: data1.main.pressure,
                error: undefined
            });
            fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&lang=ru&units=metric&APPID=${API_KEY}`)
                .then(res => res.json())
                .then(data => {
                    const dailyData = data.list.filter(reading => reading.dt_txt.includes("12:00:00"))
                    this.setState({days: dailyData})
                    console.log(this.state.days)
                })
        } else {
            this.setState({
                timezone: undefined,
                temp: undefined,
                city: undefined,
                country: undefined,
                feels_like: undefined,
                humidity: undefined,
                pressure: undefined,
                error: "Введите название города!"
            })
        }
    }
    formatCards = () => {
        return this.state.days.map((day) => <Card day={day}/>)
    }
    render() {
        return (<div>
                <Form weather={this.gettingCurrentWeather}/>
                {/*<LocalStorage/>*/}
                <ThisDay
                    time={this.state.timezone}
                    temp={this.state.temp}
                    city={this.state.city}
                    country={this.state.country}
                    feels_like={this.state.feels_like}
                    humidity={this.state.humidity}
                    pressure={this.state.pressure}
                    error={this.state.error}/>
                <ThisDayInfo
                    time={this.state.timezone}
                    temp={this.state.temp}
                    city={this.state.city}
                    country={this.state.country}
                    feels_like={this.state.feels_like}
                    humidity={this.state.humidity}
                    pressure={this.state.pressure}
                    error={this.state.error}/>
                <Days
                    days={this.state.days}/>
            </div>
        );
    }
}


export default WeatherService;