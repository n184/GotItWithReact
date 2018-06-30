import React from 'react';
import './ToggleButtons.css'

const ToggleButtons = (props) =>

 
	<div className="row">
		<button 
				className="btn btn-info toggleBut col-6"
				style={{marginTop: "35px"}}
				onClick= {() => props.handleClick("userForm")}>
				<b>Add a User Form</b>
		</button>
		<button className="btn btn-info toggleBut col-6"
				style={{marginTop: "35px"}}
				value="itemForm"
				onClick= {() => props.handleClick("itemForm")}>
				<b>Add an Item Form</b>
		</button>
	</div>

export default ToggleButtons;