import React from 'react';
import './Light.css';

function Light({posVert, posHori}){
    return(
        <div className="light">
            <div className="light__bulb">
                <div className="light__ray" style={{top:posVert,right:posHori}}>
                </div>
            </div>
        </div>
    );
}


export default Light;