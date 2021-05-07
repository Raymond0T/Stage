import React from 'react';
import './Light.css';
import Glare from'../images/glare.png';

function Light({posVert, posHori}){
    return(
        <div className="light">
            <div className="light__bulb">
                <img
                    className="light__glare"
                    src={Glare}
                    alt=""
                />
                <div className="light__ray" style={{top:posVert,right:posHori}}>
                </div>
            </div>
        </div>
    );
}


export default Light;