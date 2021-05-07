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
        <Light posVert="18%" posHori="58.5%"/>
        <Light posVert="18%" posHori="56.25%"/>
        <Light posVert="18%" posHori="54.25%"/>
        <Light posVert="18%" posHori="52.25%"/>
        <Light posVert="18%" posHori="52.25%"/>
      </div>
      <div className="app__lightLeft__Upper">
        <Light posVert="18%" posHori="58.5%"/>
        <Light posVert="18%" posHori="56.25%"/>
        <Light posVert="18%" posHori="54.25%"/>
        <Light posVert="18%" posHori="52.25%"/>
        <Light posVert="18%" posHori="52.25%"/>
      </div>
      <div className="app__lightRight__Lower">
        <Light posVert="18%" posHori="58.5%"/>
        <Light posVert="18%" posHori="56.25%"/>
        <Light posVert="18%" posHori="54.25%"/>
        <Light posVert="18%" posHori="52.25%"/>
        <Light posVert="18%" posHori="52.25%"/>
      </div>
      <div className="app__lightRight__Upper">
        <Light posVert="18%" posHori="58.5%"/>
        <Light posVert="18%" posHori="56.25%"/>
        <Light posVert="18%" posHori="54.25%"/>
        <Light posVert="18%" posHori="52.25%"/>
        <Light posVert="18%" posHori="52.25%"/>
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