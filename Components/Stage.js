import React, {useState, useEffect} from 'react';

import './Stage.css';
import Screen from './Screen.js';


function Stage(){
    const option = ['black','#2dd3e9','#c52bab','#5ddf59','#95a034'];
    const time = [1000,2000,1000,2000];
    let [color, setColor] = useState(0);

    useEffect(() =>{
        /*

    function ColorChange(){
        let colorChoice = Math.floor(Math.random() * (option.length-1));
        while(colorChoice === color){
            colorChoice = Math.floor(Math.random() * (option.length-1));
        }
        setColor(colorChoice);
    }

        */
        let colorChoice = Math.floor(Math.random() * (option.length-1));
        while(colorChoice === color){
            colorChoice = Math.floor(Math.random() * (option.length-1));
        }
        const interval_id = setTimeout(()=>{
            console.log(colorChoice);
            console.log(color);
            setColor(colorChoice);
            console.log(color);
        },1000);

        return()=>{
            clearInterval(interval_id);
        }
    },[color]);


    return(
        <div className="stage">
            <div className="stage__mainDisplay">
                <Screen screenWidth="300px" screenHeight="150px" logoWidth="200px" logoHeight="200px" radius="2px" background={option[color]} color={option[color]} shadow=" 0 0 20px "/>
            </div>
            <div className="stage__leftDisplay">
                <Screen screenWidth="200px" screenHeight="125px" logoWidth="150px" logoHeight="125px" radius="2px" background={option[color]} color={option[color]} shadow=" 0 0 20px "/>
            </div>
            <div className="stage__rightDisplay">
                <Screen screenWidth="200px" screenHeight="125px" logoWidth="150px" logoHeight="125px" radius="2px" background={option[color]} color={option[color]} shadow=" 0 0 20px "/>
            </div>
            <div className="stage__booth">
               <Screen screenWidth="150px" screenHeight="30px" logoWidth="100px" logoHeight="30px" radius="2px" background={option[color]} color={option[color]} shadow=" 0 0 20px "/>
            </div>
        </div>
    );
}

export default Stage;