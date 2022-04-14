import React from "react";
import sun from '../sun.svg'
import logo from '../logo.svg'
import rain from '../rain.svg'
import rainbow from '../rainbow.svg'
import storm from '../storm .svg'
import fewclouds from "../fewclouds.svg";
import clouds from "../clouds.svg";
import showerrain from "../showerrain.svg";
import snow from "../snow.svg";
import mist from "../mist.svg";

interface Props {
    id: string
}
const SharedSvgSelector = ({id}: Props) => {
    switch (id) {
        case 'logo':
            return (<img src={logo} alt='logo'/>)
        case '01d':
            return (<img src={sun} alt='sun'/>)
        case '02d':
            return (<img src={fewclouds} alt='fewclouds'/>)
        case '03d':
            return (<img src={clouds} alt='clouds'/>)
        case '04d':
            return (<img src={clouds} alt='clouds'/>)
        case '09d':
            return (<img src={showerrain} alt='showerrain'/>)
        case '10d':
            return (<img src={rain} alt='rain'/>)
        case '11d':
            return (<img src={storm} alt='storm'/>)
        case '13d':
            return (<img src={snow} alt='snow'/>)
        case '50d':
            return (<img src={mist} alt='mist'/>)
        default:
            return null;
    }
}
export default SharedSvgSelector;


