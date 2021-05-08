import './App.css';

import React, {useState, useEffect} from 'react';
import Stage from './Components/Stage.js';
import Ceiling from './Components/Ceiling.js';
import Drumline from './Components/Drumline.js';
import LeftSpeaker from './Components/LeftSpeaker.js';
import RightSpeaker from './Components/RightSpeaker.js';
import Light from './Components/Light.js';


function App(){


  return (
    <div className="app">  
      <div className="app__lightLeft__Lower">
        <Light posVert="14%" posHori="58.75%"/>
        <Light posVert="14%" posHori="55.75%"/>
        <Light posVert="14%" posHori="53%"/>
        <Light posVert="14%" posHori="50%"/>
        <Light posVert="14%" posHori="47%"/>
      </div>
      <div className="app__lightLeft__Upper">
        <Light posVert="8%" posHori="58.75%"/>
        <Light posVert="8%" posHori="55.75%"/>
        <Light posVert="8%" posHori="53%"/>
        <Light posVert="8%" posHori="50%"/>
        <Light posVert="8%" posHori="47%"/>
      </div>
      <div className="app__lightRight__Lower">
        <Light posVert="14%" posHori="23%"/>
        <Light posVert="14%" posHori="20%"/>
        <Light posVert="14%" posHori="17%"/>
        <Light posVert="14%" posHori="14%"/>
        <Light posVert="14%" posHori="12%"/>
      </div>
      <div className="app__lightRight__Upper">
        <Light posVert="8%" posHori="23%"/>
        <Light posVert="8%" posHori="20%"/>
        <Light posVert="8%" posHori="17%"/>
        <Light posVert="8%" posHori="14%"/>
        <Light posVert="8%" posHori="12%"/>
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