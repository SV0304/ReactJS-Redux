import React from 'react';

class StatefulApp extends React.Component{
	constructor(){
		super();
		this.state = {
			data:[
				{"id":1,
				"name":"Murthy",
				"age":"45"
				},
				{"id":2,
				"name":"Kavita",
				"age":"42"
				},
				{"id":3,
				"name":"Kiran",
				"age":"23"
				}
			]
		};
	}
	render(){
				
		return (
			<div className="well">
				<Header />
				<table className="table-hover table-bordered">
					<tbody>	
						{this.state.data.map((person, i) => 
							<TableRow key={i} data={person} /> 
						)}
					</tbody>
				</table>
			</div>
		);
	}
}

class Header extends React.Component{
	render(){
		return (
			<div>
				<h1 className="text-danger">Employees</h1>
			</div>
		);
	}
}

class TableRow extends React.Component{
	render(){
		var {id, name, age} = this.props.data;
		return (
			<tr className="bg-success">
				<td className="col-md-2">{id}</td>
				<td className="col-md-4">{name}</td>
				<td className="col-md-4">{age}</td>
			</tr>
		);
	}
}


export default StatefulApp;