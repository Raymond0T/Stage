import './App.css';

import React, {useState, useEffect} from 'react';
import Stage from './Components/Stage.js';
import Ceiling from './Components/Ceiling.js';
import Drumline from './Components/Drumline.js';
import LeftSpeaker from './Components/LeftSpeaker.js';
import RightSpeaker from './Components/RightSpeaker.js';
import Lantern from './Components/Lantern.js';


function App(){

  const option = [1,24,55,85,150,250];
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
              setTemp(temp = 0);
          },time[temp])
          return()=>{
              clearInterval(interval_id);
          }
      }
      else if(temp < time.length){
          let interval_id = setTimeout(()=>{
              setColor(choice);
              setTemp(temp += 1);
          },time[temp])
          return()=>{
              clearInterval(interval_id);
          }
      }
  },[temp])

  return (
    <div className="app">  
  
      <div className="app__lightLeft__Lower">
        <Lantern posVert="14%" posHori="58.75%" color={option[color]}/>
        <Lantern posVert="14%" posHori="55.75%" color={option[color]}/>
        <Lantern posVert="14%" posHori="53%" color={option[color]}/>
        <Lantern posVert="14%" posHori="50%" color={option[color]}/>
        <Lantern posVert="14%" posHori="47%" color={option[color]}/>
      </div>
      <div className="app__lightLeft__Upper">
        <Lantern posVert="8%" posHori="58.75%" color={option[color]}/>
        <Lantern posVert="8%" posHori="55.75%" color={option[color]}/>
        <Lantern posVert="8%" posHori="53%" color={option[color]}/>
        <Lantern posVert="8%" posHori="50%" color={option[color]}/>
        <Lantern posVert="8%" posHori="47%" color={option[color]}/>
      </div>
      <div className="app__lightRight__Lower">
        <Lantern posVert="14%" posHori="23%" color={option[color]}/>
        <Lantern posVert="14%" posHori="20%" color={option[color]}/>
        <Lantern posVert="14%" posHori="17%" color={option[color]}/>
        <Lantern posVert="14%" posHori="14%" color={option[color]}/>
        <Lantern posVert="14%" posHori="12%" color={option[color]}/>
      </div>
      <div className="app__lightRight__Upper">
        <Lantern posVert="8%" posHori="23%" color={option[color]}/>
        <Lantern posVert="8%" posHori="20%" color={option[color]}/>
        <Lantern posVert="8%" posHori="17%" color={option[color]}/>
        <Lantern posVert="8%" posHori="14%" color={option[color]}/>
        <Lantern posVert="8%" posHori="12%" color={option[color]}/>
      </div>

      <Stage />
      <Ceiling />
      <Drumline />
      <LeftSpeaker />
      <RightSpeaker />
    {/* Lights */}
    {/* Fog */}
    {/* fireworks */}
    </div>
  );
}

export default App;