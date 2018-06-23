import React from 'react';

//import classes from './Input.css';
import './Input.css';

const input = ( props ) => {


    return (
        <div className="Input">
            <label className="Label">{props.label}</label>
            {inputElement}
        </div>
    );

};

export default input;