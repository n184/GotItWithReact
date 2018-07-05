import React, { Component } from 'react';
import Radium from 'radium';
import './ToggleButtons.css';

class ToggleButtons  extends Component {

	render () {

	

	const styleLeft = {
		color: "white",
		background: "#b9b992",
       cursor: "pointer",
       borderColor: "gray",
       borderStyle: "solid",
       borderWidth: "3px 2px",
       marginLeft: "25%",
       marginTop: "35px",
       marginRight: "2px",
      ":hover": {
                color: "#b9b992",
				background: "white",
                }
      };

      	const styleRight = {
		color: "white",
		background: "#b9b992",
       cursor: "pointer",
       borderWidth: "3px 2px",
       borderColor: "gray",
       borderStyle: "solid",
       marginTop: "35px",
       marginLeft: "2px",
      ":hover": {
                color: "#b9b992",
				background: "white",
                }

           };

      	return (

 
	<div className="row">
		<button 
				className="toggleBut"
				key="1"
				style={styleLeft}
				onClick= {() => this.props.handleClick("userForm")}>
				<b>Add a User Form</b>
		</button>
		<button className="toggleBut"
				key="2"
				style={styleRight}
				value="itemForm"
				onClick= {() => this.props.handleClick("itemForm")}>
				<b>Add an Item Form</b>
		</button>
	</div>
	)
}
}

export default Radium(ToggleButtons);