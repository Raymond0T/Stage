import React from 'react';
import './Ceiling.css'
import Logo from './icon-logo.png';
function Ceiling(){
    return(
        <div className="ceiling">
            <img 
                className="ceiling__fullLogo"
                src={Logo}
                alt=""
            />
        </div>
    );
}

export default Ceiling;