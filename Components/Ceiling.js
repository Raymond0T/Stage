import React,{useEffect, useState} from 'react';
import './Ceiling.css'
import Logo from '../images/icon-logo.png';
import Screen from './Screen.js';



function Ceiling(){

    let [option, setOption] = useState(0);
    let [temp, setTemp] = useState(0);

    const panelColor = ['blue','red','purple','green','black'];
    const time = [100,1000,1000,2000,5000,1000]

    useEffect(()=>{
        let choice = Math.floor(Math.random() * (panelColor.length - 1));
        while(option === choice){
            choice = Math.floor(Math.random() * (panelColor.length - 1));
        }

        if(temp === time.length - 1){
            const interval_id = setTimeout(()=>{
                setOption(choice);
                setTemp(temp = 0);
            },time[temp]);
            console.log(time[temp] + ' ceiling');
            return()=>{
                clearInterval(interval_id);
            }
        }
        else if(temp < time.length){
            const interval_id = setTimeout(()=>{
                setOption(choice);
                setTemp(temp+=1);
            }, time[temp]);
            console.log(time[temp] + ' ceiling');
            return()=>{
                clearInterval(interval_id);
            }
        }
    },[temp])
   

    return(
        <div className="ceiling">
            <div className="ceiling__logo">
                <img 
                    className="ceiling__logoImage"
                    src={Logo}
                    alt=""
                />
            </div>

            <div className="ceiling__leftPanel">
                <Screen screenWidth="75px" screenHeight="50px" logoWidth="0" logoHeight="0" radius="20px" background="black" shadow=" 0 0 20px blue" color={panelColor[option]}/>
            </div>

            <div className="ceiling__rightPanel">
                <Screen screenWidth="75px" screenHeight="50px" logoWidth="0" logoHeight="0" radius="20px" background="black" shadow=" 0 0 20px blue" color={panelColor[option]}/>
            </div>
            
        </div>
    );
}

export default Ceiling;