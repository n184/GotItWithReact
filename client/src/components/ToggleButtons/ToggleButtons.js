import React from 'react';



const ToggleButtons = (props) =>

	<div>
		<button className="toggleBut"
	
				style={{background: "gray", color: "white", margin: "7%", padding: "4%" }}
				onClick= {() => props.handleClick("userForm")}>
				<b>Add a User Form</b>
		</button>
		<button className="toggleBut"
				value="itemForm"
				style={{background: "gray", color: "white", margin: "7%", padding: "4%" }}
				onClick= {() => props.handleClick("itemForm")}>
				<b>Add an Item Form</b>
		</button>
	</div>

export default ToggleButtons;