import React from 'react';

import TrainerList from '../containers/trainer-list';
import TrainerDetails from '../containers/trainer-detail';

require('../../scss/style.scss');

const App = () =>(
	<div>
		<h2>Trainers List - Murthy Infotech</h2>
		<TrainerList />
		<hr/>
		<h2>Trainer Details</h2>
		<TrainerDetails />
	</div>
);

export default App;
