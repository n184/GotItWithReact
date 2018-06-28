import React from 'react';

const NeededDisplay = (props) => {
console.log(props, "prop")
return (
    <div className="neededDisplay">
       {props.user.map(whatNeeded => {
       	console.log(whatNeeded)
            return (
                    <h5 key={whatNeeded._id}>
                        {whatNeeded.name} has a budget of 
                        {whatNeeded.overAllBudget} and needs
                        {whatNeeded.items.map(item => {
                        		return ( 
                            		<p>{item.quantity} of {item.description}</p>
                           		)
                        })}
                    </h5>
             ) 
        })}
    </div>
)}



export default NeededDisplay;