import React from 'react';
import './LeftSpeaker.css';
import Speaker from './Speaker.js';

function LeftSpeaker(){
    return(
        <div className="leftSpeaker">

            <div >
                <Speaker position="10px"/>
                <Speaker position="5px"/>
                <Speaker position="0px"/>
                <Speaker position="-5px"/>
                <Speaker position="-10px"/>
                <Speaker position="-10px"/>
                <Speaker position="-5px"/>
                <Speaker position="0px"/>
                <Speaker position="5px"/>
                <Speaker position="10px"/>
            </div>
        </div>
    );
}

export default LeftSpeaker;