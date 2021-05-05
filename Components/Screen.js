import React from 'react';
import './Screen.css';
import LogoOutline from '../images/logo-outline.png';
import LogoCenter from '../images/logo-center.png';

function Screen({screenWidth,screenHeight, logoWidth, logoHeight, radius,  background, color}){
    return(
        <div className="screen">
            <div className="screen__size" style={{width: screenWidth, height:screenHeight, borderRadius: radius,  backgroundColor: background, color: color }}>
                <img 
                    className="screen__fullLogo"
                    style={{width: logoWidth, height: logoHeight, }}
                    src={LogoCenter}
                    alt=""
                />
                <img 
                    className="screen__outlineLogo"
                    style={{width: logoWidth, height: logoHeight}}
                    src={LogoOutline}
                    alt=""
                />
            </div>
        </div>
    );
}


export default Screen;
