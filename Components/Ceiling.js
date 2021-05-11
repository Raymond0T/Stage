import React,{useEffect, useState} from 'react';
import './Ceiling.css'
import Logo from '../images/icon-logo.png';
import Screen from './Screen.js';



function Ceiling(){

    let [option, setOption] = useState(0);
    let [temp, setTemp] = useState(0);

    const panelColor = ['black','blue','red','purple','green',];
    const time = [14000,3000,20,20,20,20,20,20,20,20,20,20,20,20,20,4000,5000,4000,5000,4000,5000,6000,20,20,20,20,20,20,20,20,20,20,20,20,20,5000,5000,5000,5000,5000,5000,29000,4000,5000,4000,5000,4000,5000,4000,5000,4000,5000,4000,5000,4000,5000,5000,6000]

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
        else if(temp === 0 || temp === 42 || temp === 50){
            const interval_id = setTimeout(()=>{
                setOption(0);
                setTemp(temp += 1);
            },time[temp]);
            console.log(time[temp] + ' ceiling'+ temp);
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
                <Screen screenWidth="75px" screenHeight="50px" logoWidth="0" logoHeight="0" radius="20px" background="black" shadow=" 0 0 40px" color={panelColor[option]}/>
            </div>

            <div className="ceiling__rightPanel">
                <Screen screenWidth="75px" screenHeight="50px" logoWidth="0" logoHeight="0" radius="20px" background="black" shadow=" 0 0 40px" color={panelColor[option]}/>
            </div>
            
        </div>
    );
}

export default Ceiling;