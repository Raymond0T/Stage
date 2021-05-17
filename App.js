import React, {useState, useEffect} from 'react';
import './App.css';
import ReactPlayer from 'react-player';

import Stage from './Components/Stage.js';
import Ceiling from './Components/Ceiling.js';
import Drumline from './Components/Drumline.js';
import LeftSpeaker from './Components/LeftSpeaker.js';
import RightSpeaker from './Components/RightSpeaker.js';
import Lantern from './Components/Lantern.js';


function App(){

  const option = [1,24,55,85,150,250];
  const rayQueue = ['none','block','block'];
  const time = [14000,3000,20,20,20,20,20,20,20,20,20,20,20,20,20,4000,5000,4000,5000,4000,5000,6000,30000,29000,4000,5000,4000,5000,4000,5000,4000,5000,4000,5000,4000,5000,4000,5000,5000,6000];
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
      <div className="app__lightLeft__Side">
        <Lantern posVert="12%" posHori="75%" color={option[color]} angle={45} />
        <Lantern posVert="12%" posHori="72.5%" color={option[color]} angle={45} />
        <Lantern posVert="12%" posHori="69.5%" color={option[color]} angle={45} />
        <Lantern posVert="12%" posHori="66.5%" color={option[color]} angle={45} />
      </div> 
      <div className="app__lightLeft__Lower">
        <Lantern posVert="14%" posHori="58.75%" color={option[color]} angle={90}/>
        <Lantern posVert="14%" posHori="55.75%" color={option[color]} angle={90}/>
        <Lantern posVert="14%" posHori="53%" color={option[color]} angle={90}/>
        <Lantern posVert="14%" posHori="50%" color={option[color]} angle={90}/>
        <Lantern posVert="14%" posHori="47%" color={option[color]} angle={90}/>
      </div>
      <div className="app__lightLeft__Upper">
        <Lantern posVert="8%" posHori="58.75%" color={option[color]} angle={90}/>
        <Lantern posVert="8%" posHori="55.75%" color={option[color]} angle={90}/>
        <Lantern posVert="8%" posHori="52.75%" color={option[color]} angle={90}/>
        <Lantern posVert="8%" posHori="50%" color={option[color]} angle={90}/>
        <Lantern posVert="8%" posHori="47%" color={option[color]} angle={90}/>
      </div>
      <div className="app__lightRight__Side">
        <Lantern posVert="12%" posHori="-5%" color={option[color]} angle={135}/>
        <Lantern posVert="12%" posHori="-2%" color={option[color]} angle={135}/>
        <Lantern posVert="12%" posHori="1%" color={option[color]} angle={135}/>
        <Lantern posVert="12%" posHori="4%" color={option[color]} angle={135}/>
      </div>
      <div className="app__lightRight__Lower">
        <Lantern posVert="14%" posHori="23%" color={option[color]} angle={90}/>
        <Lantern posVert="14%" posHori="20%" color={option[color]} angle={90}/>
        <Lantern posVert="14%" posHori="17%" color={option[color]} angle={90}/>
        <Lantern posVert="14%" posHori="14%" color={option[color]} angle={90}/>
        <Lantern posVert="14%" posHori="12%" color={option[color]} angle={90}/>
      </div>
      <div className="app__lightRight__Upper">
        <Lantern posVert="8%" posHori="23%" color={option[color]} angle={90}/>
        <Lantern posVert="8%" posHori="20%" color={option[color]} angle={90}/>
        <Lantern posVert="8%" posHori="17%" color={option[color]} angle={90}/>
        <Lantern posVert="8%" posHori="14%" color={option[color]} angle={90}/>
        <Lantern posVert="8%" posHori="11%" color={option[color]} angle={90}/>
      </div>
    {/*
      <ReactPlayer 
        url='https://www.youtube.com/watch?v=6-47Jf8thfM&ab_channel=XxODESZAxX'
        playing={true}
        autoplay
        controls={false}
        light={true}
        playsinline={true}
      />
    */}
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