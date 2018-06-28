import React from 'react';

import Aux from '../../hoc/Aux1';

const layout = (props) => (
	<Aux>
		
		<main>
			{props.children}
		</main>
	</Aux>
);

export default layout;