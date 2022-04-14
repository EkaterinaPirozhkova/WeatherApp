import React from "react";
import sun from '../sun.svg'
import logo from '../logo.svg'
import rain from '../rain.svg'
import rainbow from '../rainbow.svg'
import storm from '../storm .svg'

interface Props {
    id: string
}

const SharedSvgSelector = ({id}: Props) => {
    switch (id) {
        case 'logo':
            return (<img src={logo} alt='logo'/>)
        case 'облачно с прояснениями':
            return (<img src={logo} alt='logo'/>)
        case 'Clouds':
            return (<img src={logo} alt='logo'/>)
        case 'Sun':
            return (<img src={sun} alt='sun'/>)
        case 'rain':
            return (<img src={rain} alt='rain'/>)
        case 'облачно':
            return (<img src={rainbow} alt='rainbow'/>)
        case 'пасмурно':
            return (<img src={storm} alt='storm'/>)
        default:
            return (<img src={rainbow} alt='rainbow'/>);
    }
}
export default SharedSvgSelector;


