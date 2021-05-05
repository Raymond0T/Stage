import React from 'react';
import './Speaker.css';

function Speaker({position}){
    return(
        <div className="speaker" style={{marginLeft:position}}>
            <div className="speaker__box">
                <div className="speaker__box__leftSub">
                    <div className="speaker__box__leftSub__inner"></div>
                </div>
                <div className="speaker__box__rightSub">
                    <div className="speaker__box__rightSub__inner"></div>
                </div>
            </div>

        </div>
    );
}

export default Speaker;