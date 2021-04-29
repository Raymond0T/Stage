import React from 'react';
import './Screen.css';
import LogoOutline from './logo-outline.png';
import LogoCenter from './logo-center.png';

function Screen({screenWidth,screenHeight, logoWidth, logoHeight}){
    return(
        <div className="screen">
            <div className="screen__size" style={{width: screenWidth, height:screenHeight}}>
                <img 
                    className="screen__fullLogo"
                    style={{width: logoWidth, height: logoHeight}}
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
