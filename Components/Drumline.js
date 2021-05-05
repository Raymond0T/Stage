import React from 'react';
import './Drumline.css';
import Person from '../images/drummer.png';

function Drumline(){
    return(
        <div className="drumline">
            <img 
                className="drumline__person1"
                src={Person}
                alt=""
            />
            <img 
                className="drumline__person1"
                src={Person}
                alt=""
            />
            <img 
                className="drumline__person1"
                src={Person}
                alt=""
            />
            <img 
                className="drumline__person1"
                src={Person}
                alt=""
            />
            <img 
                className="drumline__person1"
                src={Person}
                alt=""
            />
            <img 
                className="drumline__person1"
                src={Person}
                alt=""
            />
        </div>

    );
}


export default Drumline;