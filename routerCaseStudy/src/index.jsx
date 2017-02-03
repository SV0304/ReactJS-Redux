import React, {Component} from 'react';
import {render} from 'react-dom';

//Import routing components
import {Router, Route, IndexRoute, browserHistory} from 'react-router';


import Main from './common/main.component.jsx';
import Home from './common/home.component.jsx';
import About from './common/about.component.jsx';
import Car from './car/car.component.jsx';
import CarDetail from './car/car-detail.component.jsx';

//Application State (Later use Redux)

const data = [
	{
		id:1,
		name:"Honda Accord Crosstour",
		year:"2010",
		model:'Accord Crosstour',
		make:'Honda',
		media:'http://automobiles.honda.com/images/2016/accord-sedan/overview-colors/WH.jpg',
		price:'$16,811'

	},
	{
		id:2,
		name:"Hyundai i20 Elite",
		year:"2016",
		model:'i20 Elite',
		make:'Hyundai',
		media:'http://www.hyundai.com/wcm/idc/groups/sgvehiclecontent/@in/documents/sitecontent/mdaw/mtaw/~edisp/in_ext_ib_side_viewa.png',
		price:'$12,811'
	},
	{
		id:3,
		name:"Maruti Suzuki Brezza",
		year:"2016",
		model:'Brezza',
		make:'Maruti',
		media:'https://blog.gaadikey.com/wp-content/uploads/2016/02/Maruti-Vitara-Brezza-White-Color-Pearl-Arctic-White-Single-tone.png',
		price:'$12,811'
	},
	{
		id:4,
		name:"Audi Q3",
		year:"2016",
		model:'Q3',
		make:'Audi',
		media:'https://file.kbb.com/kbb/vehicleimage/evoxseo/cp/l/10551/2016-audi-q3-front_10551_032_640x480_2y2y.png',
		price:'$25,811'
	}
];

render(
	<Router history={browserHistory}>
		<Route component={Main}>
			<Route path="/" component={Home} />
			<Route path="/cars" component={Car} data={data} />

			{/* Parameter route */}
			<Route path="/cars/:id" component={CarDetail} data={data}/>

			<Route path="/about" component={About}/>

		</Route>
	</Router>,
	document.getElementById("container")
);