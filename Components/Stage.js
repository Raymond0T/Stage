import React from 'react';
import './Stage.css';
import Screen from './Screen.js';


function Stage(){
    return(
        <div className="stage">
            <div className="stage__mainDisplay">
                <Screen screenWidth="300px" screenHeight="150px" logoWidth="200px" logoHeight="200px" radius="2px" background="black" shadow=" 0 0 20px lightblue"/>
            </div>
            <div className="stage__leftDisplay">
                <Screen screenWidth="200px" screenHeight="125px" logoWidth="150px" logoHeight="125px" radius="2px" background="black" shadow=" 0 0 20px lightblue"/>
            </div>
            <div className="stage__rightDisplay">
                <Screen screenWidth="200px" screenHeight="125px" logoWidth="150px" logoHeight="125px" radius="2px" background="black" shadow=" 0 0 20px lightblue"/>
            </div>
            <div className="stage__booth">
               <Screen screenWidth="150px" screenHeight="30px" logoWidth="100px" logoHeight="30px" radius="2px" background="black" shadow=" 0 0 20px lightblue"/>
            </div>
        </div>
    );
}

export default Stage;