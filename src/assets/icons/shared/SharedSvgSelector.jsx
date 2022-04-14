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
        case 'sun':
            return (<img src={sun} alt='sun'/>)
        case 'rain':
            return (<img src={rain} alt='rain'/>)
        case 'rainbow':
            return (<img src={rainbow} alt='rainbow'/>)
        case 'storm':
            return (<img src={storm} alt='storm'/>)
        default:
            return null;
    }
}
export default SharedSvgSelector;


