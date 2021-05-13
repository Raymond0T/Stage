import React, {useState, useEffect} from 'react';
import './Lantern.css';
import Glare from'../images/glare.png';

function Lantern({posVert, posHori, color, angle}){

    let match= {
        1: 'c7750a',
        24: 'c7aa06',
        55: '2eca07',
        115: '0bd681',
        150: '0b96d6',
        250: 'b10ed1'
    }
    
    
    const rayQueue = ['none','none','none','none','none','none','none','none','none','none','none','none','none','none','none'];
    const sideRayQueue = ['none','none','block','none','block','none','block','none','block','none','block','none','block','none','none','none'];
    const time = [10,50000,20000,2000,2000,2000,2000,2000,2000,2000,2000,2000,2000];

    // 50se, 30 sec
    //let [angle, setAngle] = useState(0);
    
    let [flash, setFlash] = useState(0);

    useEffect(()=>{

        if(flash === time.length - 1){
            let interval_id = setTimeout(()=>{
                setFlash(flash= 0); 
            },time[flash])
            return()=>{
                clearInterval(interval_id);
            }
        }

        else if(flash < time.length){
            let interval_id = setTimeout(()=>{
                console.log(flash + ' check ' + time[flash]);
                setFlash(flash+=1);
            }, time[flash])
            return()=>{
                clearInterval(interval_id);
            }
        }
    },[flash])

    return(
        <div className="lantern">
            <div className="lantern__bulb" style={{display: angle===90 ? rayQueue[flash] : sideRayQueue[flash]}}>
                <img
                    className="lantern__glare"
                    src={Glare}
                    style={{
                        filter: `invert(43%) sepia(81%) saturate(1412%) hue-rotate(${color}deg) brightness(98%) contrast(96%) drop-shadow(0 0 1rem blue)`}}
                    alt=""
                />
                <div className={(flash !== 2) ? "lantern__ray" : "lantern__rainbow"} style={{
                    display: (angle===90) ? rayQueue[flash] : sideRayQueue[flash],
                    top:posVert,
                    right:posHori, 
                    background: `linear-gradient(to right, #${match[color]} 1%, transparent)`, 
                    transform:`perspective(100px) rotate(${angle}deg) rotateY(120deg)`}}>
                </div>
            </div>
        </div>
    );
}


export default Lantern;