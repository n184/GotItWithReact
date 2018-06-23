import React from 'react';
import './Card.css';


let Card = props =>  (
	  <div className="card">
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Budget:</strong> {props.overAllBudget}
        </li>
      </ul>
    </div>
    <span onClick={() => props.removeUser(props.id)} className="remove">
      𝘅
    </span>
  </div>


	);

export default Card;

