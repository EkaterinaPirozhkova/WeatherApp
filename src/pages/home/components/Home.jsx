import React from "react";
import Header from "./header/Header";
import WeatherService from "../service/WeatherService";
import Days from "./days/next/Days";


const Home = () => {
        return (
            <div className="AppWrapper">
                <Header/>
                <WeatherService/>
            </div>
        );
}

export default Home;