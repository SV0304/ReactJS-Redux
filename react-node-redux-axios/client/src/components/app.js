import React,{Component} from 'react';
import {Link} from 'react-router';

export default class App extends Component{
	render(){
		return (
			<div>
				<h1>REACT REDUX NODE AXIOS WITH ROUTER</h1>
				<nav>
					<Link to="dashboard" activeClassName="active" >Dashboard</Link>
					<Link to="login" activeClassName="active" >Login</Link>
				</nav>
				<div className="container">
					{this.props.children}
				</div>
			</div>
		);
	}
}
