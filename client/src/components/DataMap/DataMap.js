import React from 'react';

const DataMap = props =>

<div>

	<h2 style={{textAlign: "center", marginTop:"7%"}}>
        {props.chosenUser.name} has a budget of {props.chosenUser.overAllBudget}
	</h2>

</div>


export default DataMap;

