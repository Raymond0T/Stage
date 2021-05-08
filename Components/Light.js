import React, {useState, useEffect} from 'react';
import './Light.css';
import Glare from'../images/glare.png';

function Light({posVert, posHori}){

    const option = [24,55,250,1,85,150];
    const time = [100,1000,1000,2000,5000,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,1000];
    let [color, setColor] = useState(0);
    let [temp, setTemp] = useState(0);

    useEffect(()=>{
        let choice = Math.floor(Math.random() * (option.length - 1));
        while(choice === color){
            choice = Math.floor(Math.random() * (option.length - 1));
        }
        if(temp === time.length - 1){
            let interval_id = setTimeout(()=>{
                setColor(choice);
                setTemp(temp=0);
            },time[temp]);
            return()=>{
                clearInterval(interval_id);
            }
        }
        else if(temp < time.length){
            let interval_id = setTimeout(()=>{
                setColor(choice);
                setTemp(temp+=1);
            },time[temp]);
            return()=>{
                clearInterval(interval_id);
            }
        }
    },[temp])

    return(
        <div className="light">
            <div className="light__bulb">
                <img
                    className="light__glare"
                    src={Glare}
                    style={{filter: `invert(43%) sepia(81%) saturate(1412%) hue-rotate(${option[color]}deg) brightness(98%) contrast(96%) drop-shadow(0 0 1rem blue)`}}
                    alt=""
                />
                <div className="light__ray" style={{top:posVert,right:posHori}}>
                </div>
            </div>
        </div>
    );
}


export default Light;