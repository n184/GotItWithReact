import React from 'react';
import './ToggleButtons.css'




const ToggleButtons = (props) =>

 
	<div>
		<button className="btn btn-info toggleBut"
				
				style={{margin: "35px"}}
				onClick= {() => props.handleClick("userForm")}>
				<b>Add a User Form</b>
		</button>
		<button className="btn btn-info toggleBut"
				value="itemForm"
				onClick= {() => props.handleClick("itemForm")}>
				<b>Add an Item Form</b>
		</button>
	</div>

export default ToggleButtons;