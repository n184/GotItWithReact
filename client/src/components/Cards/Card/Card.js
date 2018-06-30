import React from 'react';

import './Card.css';


const Card = props =>  (
	  <div className="card">
      <div className="content">
          <ul onClick={() => {props.expandUser(props._id)}}>
              <li>
                  <strong>Name:</strong> {props.name}
              </li>
              <li>
                   <strong>Budget:</strong> {props.overAllBudget}
              </li> 
          </ul>
      </div>
      <span 
          onClick={() => {props.removeUser(props._id)}}
          className="remove">
          𝘅
      </span>
  </div>


	);

export default Card;

