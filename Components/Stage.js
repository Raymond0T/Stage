import React, {useState, useEffect} from 'react';

import './Stage.css';
import Screen from './Screen.js';
import Lantern from './Lantern.js';


function Stage(){
    const colorOption = ['black','#2dd3e9','#c52bab','#5ddf59','#95a034'];
    const time = [100,1000,1000,2000,5000,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,1000];
    let [color, setColor] = useState(0);
    let [temp, setTemp] = useState(0);
    useEffect(() =>{
        /*

    function ColorChange(){
        let colorChoice = Math.floor(Math.random() * (colorOption.length-1));
        while(colorChoice === color){
            colorChoice = Math.floor(Math.random() * (colorOption.length-1));
        }
        setColor(colorChoice);
    }

        */
        let colorChoice = Math.floor(Math.random() * (colorOption.length-1));
        while(colorChoice === color){
            colorChoice = Math.floor(Math.random() * (colorOption.length-1));
        }
        if(temp === time.length - 1){
            const interval_id = setTimeout(()=>{
                setColor(colorChoice);
                setTemp(temp=0);
            },time[temp]);
            console.log(time[temp] + ' stage');
            return()=>{
                clearInterval(interval_id);
            }
        }
        else if(temp < time.length){
            const interval_id = setTimeout(()=>{
                setColor(colorChoice);
                setTemp(temp += 1);
            },time[temp]);
            console.log(time[temp] + ' stage');
            return()=>{
                clearInterval(interval_id);
            }
        }
    },[temp]);


    return(
        <div className="stage">
            {/*
            <div className="stage__mainLight__left">
                <Lantern posVert="18%" posHori="44.75%"/>
                <Lantern posVert="18%" posHori="47.5%"/>
                <Lantern posVert="18%" posHori="50.5%"/>
                <Lantern posVert="18%" posHori="53.5%"/>
            </div>
            <div className="stage__mainLight__right">
                <Lantern posVert="18%" posHori="17%"/>
                <Lantern posVert="18%" posHori="20%"/>
                <Lantern posVert="18%" posHori="22.75%"/>
                <Lantern posVert="18%" posHori="25.5%"/>
            </div>
            */}
            <div className="stage__mainDisplay">
                <Screen screenWidth="300px" screenHeight="150px" logoWidth="200px" logoHeight="200px" radius="2px" background={colorOption[color]} color={colorOption[color]} shadow=" 0 0 20px "/>
            </div>
            <div className="stage__leftDisplay">
                <Screen screenWidth="200px" screenHeight="125px" logoWidth="150px" logoHeight="125px" radius="2px" background={colorOption[color]} color={colorOption[color]} shadow=" 0 0 20px "/>
            </div>
            <div className="stage__rightDisplay">
                <Screen screenWidth="200px" screenHeight="125px" logoWidth="150px" logoHeight="125px" radius="2px" background={colorOption[color]} color={colorOption[color]} shadow=" 0 0 20px "/>
            </div>
            <div className="stage__booth">
               <Screen screenWidth="150px" screenHeight="30px" logoWidth="100px" logoHeight="30px" radius="2px" background={colorOption[color]} color={colorOption[color]} shadow=" 0 0 20px "/>
            </div>
        </div>
    );
}

export default Stage;