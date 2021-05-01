import React from 'react';
import './RightSpeaker.css';
import Speaker from './Speaker.js';

function RightSpeaker(){
    return(
        <div className="rightSpeaker">
            <Speaker position="-10px"/>
            <Speaker position="-5px"/>
            <Speaker position="0px"/>
            <Speaker position="5px"/>
            <Speaker position="10px"/>
            <Speaker position="10px"/>
            <Speaker position="5px"/>
            <Speaker position="0px"/>
            <Speaker position="-5px"/>
            <Speaker position="-10px"/>
        </div>
    );
}

export default RightSpeaker;