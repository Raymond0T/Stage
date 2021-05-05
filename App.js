import './App.css';

import React, {useState, useEffect} from 'react';
import Stage from './Components/Stage.js';
import Ceiling from './Components/Ceiling.js';
import Drumline from './Components/Drumline.js';
import LeftSpeaker from './Components/LeftSpeaker.js';
import RightSpeaker from './Components/RightSpeaker.js';

function App(){


  return (
    <div className="app">  
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