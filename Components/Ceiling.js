import React from 'react';
import './Ceiling.css'
import Logo from '../images/icon-logo.png';
import Screen from './Screen.js';



function Ceiling(){
    return(
        <div className="ceiling">
            <div className="ceiling__logo">
                <img 
                    className="ceiling__logoImage"
                    src={Logo}
                    alt=""
                />
            </div>

            <div className="ceiling__leftPanel">
                <Screen screenWidth="75px" screenHeight="50px" logoWidth="0" logoHeight="0" radius="20px" background="black" shadow=" 0 0 20px blue"/>
            </div>

            <div className="ceiling__rightPanel">
                <Screen screenWidth="75px" screenHeight="50px" logoWidth="0" logoHeight="0" radius="20px" background="black" shadow=" 0 0 20px blue"/>
            </div>
        </div>
    );
}

export default Ceiling;