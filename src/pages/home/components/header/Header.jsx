import React from "react";
import classes from "./Header.module.css"
import SharedSvgSelector from "../../../../assets/icons/shared/SharedSvgSelector";

const Header = () => (<header className={classes.header}>
        <div className={classes.wrapper}>
            <SharedSvgSelector id={'logo'}/>
            <div>Weather App</div>
        </div>
        <div></div>
    </header>
);
export default Header;