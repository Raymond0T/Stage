import React, {useState, useEffect} from 'react';
import './Lantern.css';
import Glare from'../images/glare.png';

function Lantern({posVert, posHori, color}){

    let match= {
        1: 'c7750a',
        24: 'c7aa06',
        55: '2eca07',
        115: '0bd681',
        150: '0b96d6',
        250: 'b10ed1'
    }

    let change = match[color];

    return(
        <div className="lantern">
            <div className="lantern__bulb">
                <img
                    className="lantern__glare"
                    src={Glare}
                    style={{filter: `invert(43%) sepia(81%) saturate(1412%) hue-rotate(${color}deg) brightness(98%) contrast(96%) drop-shadow(0 0 1rem blue)`}}
                    alt=""
                />
                <div className="lantern__ray" style={{top:posVert,right:posHori, background: `linear-gradient(to right, #${change} 1%, transparent)`}}>
                </div>
            </div>
        </div>
    );
}


export default Lantern;